import { Button, Form, Input, Select, Upload } from "antd";

import { UserDetailProps } from "../models/model";

const UserProfileTab = ({}: { user: UserDetailProps }) => {
  return (
    <Form layout="vertical">
      <Form.Item label="用户名">
        <Input></Input>
      </Form.Item>
      <Form.Item label="邮箱">
        <Input></Input>
      </Form.Item>
      <Form.Item label="头像">
        <Upload listType="picture-circle"></Upload>
      </Form.Item>

      <Form.Item label="身份">
        <Select></Select>
      </Form.Item>
      <Form.Item label="学院">
        <Select></Select>
      </Form.Item>
      <Form.Item label="专业">
        <Select></Select>
      </Form.Item>
      <Form.Item label="年级">
        <Select></Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary">保存</Button>
      </Form.Item>
    </Form>
  );
};

export default UserProfileTab;
