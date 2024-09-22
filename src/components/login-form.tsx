import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

import { LoginRequest } from "../models/dto";
import { login } from "../services/auth";

const LoginForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (r: LoginRequest) => {
    login(r.email, r.password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        messageApi.error(error);
      });
  };
  return (
    <Form
      form={form}
      name="login"
      style={{ maxWidth: 360 }}
      requiredMark="optional"
      size="large"
      onFinish={onFinish}
    >
      {contextHolder}
      <Form.Item name="email">
        <Input
          placeholder="邮箱"
          addonAfter={`@${import.meta.env.VITE_EMAIL_SUFFIX}`}
        ></Input>
      </Form.Item>
      <Form.Item name="password">
        <Input.Password placeholder="密码" type="password"></Input.Password>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
