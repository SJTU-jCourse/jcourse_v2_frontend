import { Button, Flex, Form, Input, message } from "antd";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { RegisterRequest } from "../models/dto";
import { register, sendVerifyCode } from "../services/auth";

const SendVerifyCodeButton = ({
  handleClick,
}: {
  handleClick: () => string;
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [time, setTime] = useState<number>(0);
  const timeRef = useRef<any>();
  const inCounter = time != 0;

  useEffect(() => {
    if (inCounter) {
      timeRef.current = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timeRef.current);
    };
  }, [time]);

  const onClick = () => {
    const email = handleClick();
    sendVerifyCode(email)
      .then((data: any) => {
        setTime(60);
        messageApi.success(data.message);
      })
      .catch((error: any) => {
        console.log(error);
        messageApi.error(error.response.data.message);
      });
  };
  return (
    <Button onClick={onClick} disabled={inCounter}>
      {inCounter ? `${time}秒后` : "获取验证码"}
      {contextHolder}
    </Button>
  );
};

const RegisterForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (r: RegisterRequest) => {
    register(r.email, r.password, r.code)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        messageApi.error(error);
      });
  };

  const findEmail = (): string => {
    const email: string = form.getFieldValue("email");
    return email;
  };
  return (
    <Form
      form={form}
      name="register"
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
      <Form.Item name="code">
        <Flex gap="small">
          <Input placeholder="验证码"></Input>
          <SendVerifyCodeButton handleClick={findEmail}></SendVerifyCodeButton>
        </Flex>
      </Form.Item>
      <Form.Item name="password">
        <Input.Password placeholder="密码"></Input.Password>
      </Form.Item>
      <Form.Item name="repeat-password">
        <Input.Password placeholder="重复密码"></Input.Password>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
