import { Button, Flex, Form, Input } from "antd";

import SendVerifyCodeButton from "./send-verify-code-button";

interface EmailCodePasswordFormProps {
  /** 点击“提交”时触发的回调，负责与后端交互 */
  onFinish?: (values: any) => void;
  /** 提交按钮文案 */
  buttonText?: string;
  /** 是否需要显示邮箱后缀(如注册时) */
  emailSuffix?: string;
}

const EmailCodePasswordForm: React.FC<EmailCodePasswordFormProps> = ({
  onFinish,
  buttonText = "提交",
  emailSuffix = "",
}) => {
  const [form] = Form.useForm();

  const getEmail = (): string => {
    // 返回邮箱（加不加后缀，看你数据库或后端如何处理）
    // 若后台是 "xxx@xxx.com" 形式，就拼上后缀
    // 如果后端只存 "xxx"，就可能不要加后缀
    const rawEmail = form.getFieldValue("email");
    return emailSuffix ? `${rawEmail}@${emailSuffix}` : rawEmail;
  };
  return (
    <Form
      form={form}
      name="register"
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
          addonAfter={emailSuffix ? `@${emailSuffix}` : ""}
        ></Input>
      </Form.Item>
      <Form.Item
        name="code"
        rules={[
          {
            required: true,
            len: 6,
            message: "请输入正确的验证码",
          },
        ]}
        hasFeedback
      >
        <Flex gap="small">
          <Input placeholder="验证码"></Input>
          <SendVerifyCodeButton getEmail={getEmail}></SendVerifyCodeButton>
        </Flex>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            min: 9,
            pattern: /^.*(?=.*\d)(?=.*[a-zA-Z]{1,}).*$/,
            message: "至少9位，并包含数字和字母",
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="密码"></Input.Password>
      </Form.Item>
      <Form.Item
        name="repeat-password"
        dependencies={["password"]}
        rules={[
          { required: true },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("两次输入密码不匹配！"));
            },
          }),
        ]}
        hasFeedback
      >
        <Input.Password placeholder="重复密码"></Input.Password>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          {buttonText}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EmailCodePasswordForm;
