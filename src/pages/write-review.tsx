import {
  Button,
  Card,
  Form,
  Input,
  Rate,
  Select,
  Space,
  Switch,
  message,
} from "antd";
import { useLocation } from "react-router-dom";

import PageHeader from "../components/page-header";
import { ReviewRequest } from "../models/dto";
import { CourseDetailProps } from "../models/model";
import { writeReview } from "../services/review";

const WriteReviewPage = () => {
  const { state } = useLocation();
  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

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
          <Form.Item
            label="详细点评"
            name="comment"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea></Input.TextArea>
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
