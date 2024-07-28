import { Button, Card, Form, Input, Rate, Select, Space, Switch } from "antd";

import PageHeader from "../components/page-header";
import { courseDetail } from "../models/mock";

const WriteReviewPage = () => {
  const course = courseDetail;

  return (
    <>
      <PageHeader
        title={`点评 ${course.code} ${course.name}（${course.main_teacher.name}）`}
      ></PageHeader>

      <Card>
        <Form layout="vertical" requiredMark="optional">
          <Form.Item label="学期">
            <Select></Select>
          </Form.Item>
          <Form.Item label="成绩">
            <Input></Input>
          </Form.Item>
          <Form.Item label="评分">
            <Rate></Rate>
          </Form.Item>
          <Form.Item label="详细点评">
            <Input.TextArea></Input.TextArea>
          </Form.Item>
          <Form.Item label="匿名">
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
