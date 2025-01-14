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
import { useState } from "react";
import { useLocation } from "react-router-dom";

import MarkDownEditor from "../components/markdown-editor";
import PageHeader from "../components/page-header";
import { ReviewRequest } from "../models/dto";
import { CourseDetailProps } from "../models/model";
import { writeReview } from "../services/review";

const WriteReviewPage = () => {
  const { state } = useLocation();
  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

  // 记录用户点击了哪些标签
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // 要展示的标签列表
  const tagOptions = [
    { label: "课程内容", text: "课程内容：" },
    { label: "上课自由度", text: "上课自由度：" },
    { label: "考核标准", text: "考核标准：" },
    { label: "授课质量", text: "授课质量：" },
  ];

  const handleTagClick = (label: string, text: string) => {
    const isSelected = selectedTags.includes(label);
    let commentValue = form.getFieldValue("comment") || "";

    if (isSelected) {
      const lines = commentValue.split("\n");
      const newLines = lines.filter((line: string) => {
        return !line.trimStart().startsWith(text);
      });
      commentValue = newLines.join("\n");

      const newSelectedTags = selectedTags.filter((item) => item !== label);
      setSelectedTags(newSelectedTags);
    } else {
      commentValue = commentValue + (commentValue ? "\n" : "");

      commentValue += text;

      setSelectedTags([...selectedTags, label]);
    }

    form.setFieldsValue({ comment: commentValue });
  };

  const course: CourseDetailProps = state.course;
  if (!course) {
    return <></>;
  }
  const semesterOptions = course.offered_courses.map((item) => {
    return { label: item.semester, value: item.semester };
  });

  const onFinish = (v: ReviewRequest) => {
    v.course_id = course.id;
    writeReview(v)
      .catch((error) => {
        messageApi.error(error);
      })
      .then(() => {
        history.back();
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
          <Form.Item label="">
            <Space>
              <Button>AI 润色</Button>
              <Button type="primary" htmlType="submit">
                提交点评
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default WriteReviewPage;
