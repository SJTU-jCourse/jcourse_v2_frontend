import { Button, Form, Input } from "antd";

const LoginForm = ({
  onFinish,
  buttonText,
}: {
  onFinish?: (value: any) => void;
  buttonText?: string;
}) => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="login"
      style={{ maxWidth: 360 }}
      requiredMark="optional"
      size="large"
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          placeholder="邮箱"
          addonAfter={`@${import.meta.env.VITE_EMAIL_SUFFIX}`}
        ></Input>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.Password placeholder="密码" type="password"></Input.Password>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          {buttonText}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
