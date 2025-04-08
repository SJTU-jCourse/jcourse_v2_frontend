import { Button, Grid, Layout, Tabs, TabsProps, message, theme } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import EmailCodePasswordForm from "@/components/email-code-password-form";
import LoginForm from "@/components/login-form";
import ResetPasswordModal from "@/components/reset-password-model";
import { LoginRequest, RegisterRequest } from "@/models/dto";
import { login, register } from "@/services/auth";

const { Header, Content, Footer } = Layout;

const LoginPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const screens = Grid.useBreakpoint();
  // 控制“重置密码”弹窗的可见性
  const [resetModalOpen, setResetModalOpen] = useState(false);

  const onLoginFinish = (r: LoginRequest) => {
    login(r.email, r.password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        messageApi.error(error.response?.data?.message);
      });
  };

  const onRegisterFinish = (r: RegisterRequest) => {
    register(r.email, r.password, r.code)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        messageApi.error(error.response?.data?.message);
      });
  };

  const tabItems: TabsProps["items"] = [
    {
      label: "登录",
      key: "login",
      children: (
        <LoginForm buttonText="登录" onFinish={onLoginFinish}></LoginForm>
      ),
    },
    {
      label: "注册",
      key: "register",
      children: (
        <EmailCodePasswordForm
          buttonText="注册"
          onFinish={onRegisterFinish}
          emailSuffix={import.meta.env.VITE_EMAIL_SUFFIX}
        ></EmailCodePasswordForm>
      ),
    },
  ];
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: colorBgContainer,
          padding: screens.md ? "0 96px" : "0 16px",
        }}
      >
        <div className="demo-logo" style={{ fontWeight: 800, fontSize: 20 }}>
          {import.meta.env.VITE_FULL_SITE_NAME}
        </div>
      </Header>
      <Content
        style={{
          padding: screens.md ? "24px 96px" : "24px 0",
          marginInline: "auto",
        }}
      >
        <Tabs centered items={tabItems}></Tabs>

        {/* 忘记密码按钮（弹出重置密码弹窗） */}
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <Button type="link" onClick={() => setResetModalOpen(true)}>
            忘记密码？点此重置
          </Button>
        </div>
        {contextHolder}

        {/* 重置密码弹窗 */}
        <ResetPasswordModal
          open={resetModalOpen}
          onClose={() => setResetModalOpen(false)}
        />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        {import.meta.env.VITE_FULL_SITE_NAME} ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default LoginPage;
