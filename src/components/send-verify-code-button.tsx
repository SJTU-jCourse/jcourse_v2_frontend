import { Button, message } from "antd";
import { useEffect, useRef, useState } from "react";

import { sendVerifyCode } from "../services/auth";

interface SendVerifyCodeButtonProps {
  /** 返回当前输入的邮箱，用于发送验证码 */
  getEmail: () => string;
  /** 点击按钮后要调用的服务函数（可根据不同场景复用） */
  onSend?: (email: string) => Promise<any>;
  /** 倒计时时间，默认60秒 */
  countdown?: number;
}

const SendVerifyCodeButton: React.FC<SendVerifyCodeButtonProps> = ({
  getEmail,
  onSend,
  countdown = 60,
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [time, setTime] = useState<number>(0);
  const timeRef = useRef<any>(null);
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
  }, [time, inCounter]);

  const onClick = () => {
    const email = getEmail();
    const serviceCall = onSend ?? sendVerifyCode;
    serviceCall(email)
      .then((data: any) => {
        setTime(countdown);
        messageApi.success(data?.message);
      })
      .catch((error: any) => {
        console.log(error);
        messageApi.error(error.response?.data?.message);
      });
  };
  return (
    <Button onClick={onClick} disabled={inCounter}>
      {inCounter ? `${time}秒后` : "获取验证码"}
      {contextHolder}
    </Button>
  );
};

export default SendVerifyCodeButton;
