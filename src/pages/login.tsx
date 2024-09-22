import { Grid, Layout, Tabs, TabsProps, theme } from "antd";

import LoginForm from "../components/login-form";
import RegisterForm from "../components/register-form";

const { Header, Content, Footer } = Layout;

const tabItems: TabsProps["items"] = [
  {
    label: "登录",
    key: "login",
    children: <LoginForm></LoginForm>,
  },
  { label: "注册", key: "register", children: <RegisterForm></RegisterForm> },
];
const LoginPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const screens = Grid.useBreakpoint();
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
      </Content>
      <Footer style={{ textAlign: "center" }}>
        {import.meta.env.VITE_FULL_SITE_NAME} ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default LoginPage;
