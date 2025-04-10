import {
  Button,
  Card,
  Form,
  Input,
  Rate,
  Select,
  Space,
  Switch,
  Tag,
  message,
} from "antd";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import AIReviewEnhancer from "@/components/ai-review-enhancer";
import MarkDownEditor from "@/components/markdown-editor";
import PageHeader from "@/components/page-header";
import {
  OptCourseReviewRequest,
  OptCourseReviewResponse,
  ReviewRequest,
} from "@/models/dto";
import { CourseDetailProps, ReviewProps } from "@/models/model";
import { getCourseDetail } from "@/services/course";
import { optReviewContent } from "@/services/llm.ts";
import { getReviewDetail, updateReview, writeReview } from "@/services/review";

// 要展示的标签列表
const tagOptions = [
  { label: "课程内容", text: "课程内容：" },
  { label: "上课自由度", text: "上课自由度：" },
  { label: "考核标准", text: "考核标准：" },
  { label: "授课质量", text: "授课质量：" },
];

const findInitTags = (text: string): string[] => {
  if (!text) return [];
  const lines = text.split("\n");

  return tagOptions
    .filter((option) =>
      lines.some((line) => line.trimStart().startsWith(option.text))
    )
    .map((option) => option.label);
};

const parseTagContentFromString = (comment: string): Record<string, string> => {
  const lines = comment.split("\n");
  const newTagContents: Record<string, string> = {};
  tagOptions.forEach((option) => {
    const foundLine = lines.find((line) =>
      line.trimStart().startsWith(option.text)
    );
    if (foundLine) {
      newTagContents[option.label] = foundLine.slice(
        foundLine.indexOf(option.text) + option.text.length
      );
    }
  });
  return newTagContents;
};

const WriteReviewPage = () => {
  const { state } = useLocation();
  const [searchParams] = useSearchParams();
  const [course, setCourse] = useState<CourseDetailProps | null>(state?.course);
  const reviewId = searchParams.get("review_id");
  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

  // 记录用户点击了哪些标签
  const [tagContents, setTagContents] = useState<Record<string, string>>({});
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // 在WriteReviewPage组件中添加以下状态
  const [showAIEnhancement, setShowAIEnhancement] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<OptCourseReviewResponse>({
    result: "",
    suggestion: "",
  });

  const handleAIEnhance = () => {
    const currentComment = form.getFieldValue("comment");
    if (!currentComment || currentComment.trim() === "") {
      messageApi.warning("请先添加评论内容再使用AI润色");
      return;
    }

    setAiLoading(true);
    setShowAIEnhancement(true);

    const request: OptCourseReviewRequest = {
      course_name: course!.name, // 使用课程名称而非ID
      review_content: currentComment, // 字段名变更为review_content
    };

    optReviewContent(request)
      .then((result: OptCourseReviewResponse) => {
        setAiResponse(result);
      })
      .catch(() => {
        messageApi.error("AI润色失败，请稍后重试");
        setShowAIEnhancement(false);
      })
      .finally(() => {
        setAiLoading(false);
      });
  };

  useEffect(() => {
    if (reviewId) {
      getReviewDetail(reviewId).then((data: ReviewProps) => {
        form.setFieldsValue({
          semester: data.semester,
          rating: data.rating,
          comment: data.comment,
          is_anonymous: data.is_anonymous,
          grade: data.grade,
        });

        getCourseDetail(String(data.course.id)).then((course) => {
          setCourse(course);
        });

        setTagContents(parseTagContentFromString(data.comment));

        const initTags = findInitTags(data.comment);
        setSelectedTags(initTags);
      });
    }
  }, [reviewId]);

  const handleTagClick = (label: string, text: string) => {
    const isSelected = selectedTags.includes(label);
    let commentValue = String(form.getFieldValue("comment")) || "";
    const lines = commentValue.split("\n");

    if (isSelected) {
      const foundLine = lines.find((line) => line.trimStart().startsWith(text));
      if (foundLine) {
        const userPortion = foundLine.slice(
          foundLine.indexOf(text) + text.length
        );
        setTagContents((prev) => ({
          ...prev,
          [label]: userPortion,
        }));
      }
      const newLines = lines.filter((line: string) => {
        return !line.trimStart().startsWith(text);
      });
      commentValue = newLines.join("\n");

      const newSelectedTags = selectedTags.filter((item) => item !== label);
      setSelectedTags(newSelectedTags);
    } else {
      const userPortion = tagContents[label] || "";
      commentValue =
        commentValue + (commentValue ? "\n" : "") + text + userPortion;

      setSelectedTags([...selectedTags, label]);
    }

    form.setFieldsValue({ comment: commentValue });
  };

  if (!course) {
    return <></>;
  }
  const semesterOptions = course.offered_courses.map((item) => {
    return { label: item.semester, value: item.semester };
  });

  const onFinish = (v: ReviewRequest) => {
    let func: (v: ReviewRequest) => Promise<any>;
    v.course_id = course.id;
    if (reviewId) {
      v.id = Number(reviewId);
      func = updateReview;
    } else {
      func = writeReview;
    }

    func(v)
      .then((resp) => {
        if (resp.status == 200) {
          message.success("提交成功，即将回到上一页", 1, () => history.back());
        }
      })
      .catch((error) => {
        messageApi.error(error.response?.data?.message);
      });
  };

  return (
    <>
      <PageHeader
        title={`点评 ${course.code} ${course.name}（${course.main_teacher.name}）`}
      ></PageHeader>
      {contextHolder}
      <Card>
        <Form
          layout="vertical"
          requiredMark="optional"
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            label="学期"
            name="semester"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select options={semesterOptions}></Select>
          </Form.Item>
          <Form.Item label="成绩" name="grade">
            <Input></Input>
          </Form.Item>

          <Form.Item
            label="评分"
            name="rating"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Rate></Rate>
          </Form.Item>
          <Form.Item label="匿名" name="is_anonymous" initialValue={false}>
            <Switch></Switch>
          </Form.Item>

          <Form.Item label="详细点评" required>
            <div style={{ marginBottom: 8 }}>
              <Space size={[8, 8]} wrap>
                {tagOptions.map((tag) => (
                  <Tag
                    key={tag.label}
                    color={
                      selectedTags.includes(tag.label) ? "blue" : "default"
                    }
                    onClick={() => handleTagClick(tag.label, tag.text)}
                    style={{ cursor: "pointer", userSelect: "none" }}
                  >
                    {tag.label}
                  </Tag>
                ))}
              </Space>
            </div>
            <Form.Item
              name="comment"
              rules={[
                {
                  required: true,
                  message: "请填写详细点评",
                },
              ]}
            >
              <MarkDownEditor></MarkDownEditor>
            </Form.Item>
          </Form.Item>

          <Form.Item label="">
            <Space>
              <Button onClick={handleAIEnhance}>AI 润色</Button>
              <Button type="primary" htmlType="submit">
                提交点评
              </Button>
            </Space>
          </Form.Item>
        </Form>

        <AIReviewEnhancer
          open={showAIEnhancement}
          originalContent={form.getFieldValue("comment")}
          enhancedContent={aiResponse.result}
          suggestion={aiResponse.suggestion}
          isLoading={aiLoading}
          onAccept={(content: string) => {
            form.setFieldsValue({ comment: content });
          }}
          onCancel={() => {
            setShowAIEnhancement(false);
          }}
        />
      </Card>
    </>
  );
};

export default WriteReviewPage;
