import { Divider, Tabs, TabsProps } from "antd";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

import UserDetailCard from "../components/user-detail-card";
import { useUserDetail } from "../services/user";

const getActiveKey = (pathname: string) => {
  const part = pathname.split("/");
  return part[part.length - 1];
};

const UserDetailPage = () => {
  const location = useLocation();
  const activeKey = getActiveKey(location.pathname);
  const { id } = useParams();
  const { data: user } = useUserDetail(Number(id));

  const tabItems: TabsProps["items"] = [
    {
      key: "activity",
      label: "活动",
    },
    {
      key: "review",
      label: "点评",
    },
    {
      key: "point",
      label: "积分",
    },
    {
      key: "profile",
      label: "个人资料",
    },
    /*{
      key: "auth",
      label: "安全性",
    },*/
  ];

  const navigate = useNavigate();
  if (!user) {
    return <></>;
  }
  return (
    <>
      <UserDetailCard user={user}></UserDetailCard>

      <Divider></Divider>

      <Tabs
        // tabPosition={screens.sm ? "left" : "top"}
        items={tabItems}
        style={{ width: "100%" }}
        centered
        activeKey={activeKey}
        onChange={(key) => {
          navigate(key);
        }}
      ></Tabs>
      <Outlet context={user} />
    </>
  );
};

export default UserDetailPage;
