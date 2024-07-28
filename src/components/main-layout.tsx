import { OpenAIOutlined } from "@ant-design/icons";
import { Button, Grid, Layout, Menu, MenuProps, theme } from "antd";
import { Link, Outlet } from "react-router-dom";

import NavBarUser from "./nav-bar-user";

const { Header, Content, Footer } = Layout;

const navItems: MenuProps["items"] = [
  // { key: "推荐", label: <Link to="/">推荐</Link> },
  { key: "点评", label: <Link to="/review">点评</Link> },
  { key: "课程", label: <Link to="/course">课程</Link> },
  { key: "教师", label: <Link to="/teacher">教师</Link> },
  { key: "培养计划", label: <Link to="/training-plan">培养计划</Link> },
  { key: "排行榜", label: <Link to="/rank">排行榜</Link> },
];

const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const screens = Grid.useBreakpoint();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: colorBgContainer,
          padding: screens.md ? "0 48px" : "0 16px",
        }}
      >
        <div
          className="demo-logo"
          style={{ fontWeight: 800, fontSize: screens.md ? 20 : 14 }}
        >
          {screens.md && "SJTU "}选课社区
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          items={navItems}
          style={{ flex: 1, minWidth: 0 }}
        />
        <Button
          style={{ marginInline: 10 }}
          shape="circle"
          icon={<OpenAIOutlined />}
        ></Button>
        <NavBarUser></NavBarUser>
      </Header>
      <Content style={{ padding: screens.md ? "24px 48px" : "24px 0" }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        SJTU 选课社区 ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default MainLayout;
