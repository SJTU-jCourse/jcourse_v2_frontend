import { Tabs, TabsProps } from "antd";
import { useContext } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

import UserDetailCard from "@/components/user-detail-card";
import { CommonInfoContext } from "@/libs/context";
import { useUserDetail } from "@/services/user";

const getActiveKey = (pathname: string) => {
  const part = pathname.split("/");
  return part[part.length - 1];
};

const UserDetailPage = () => {
  const { id } = useParams();
  const { data: user } = useUserDetail(Number(id));
  const navigate = useNavigate();

  const location = useLocation();
  const activeKey = getActiveKey(location.pathname);
  const tabItems: TabsProps["items"] = [
    /*{
      key: "activity",
      label: "活动",
    },*/
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
    {
      key: "security",
      label: "安全性",
    },
  ];
  const CommonInfo = useContext(CommonInfoContext);
  if (!user) {
    return <></>;
  }

  if (id != CommonInfo?.user.id) {
    return <UserDetailCard user={user}></UserDetailCard>;
  }

  return (
    <>
      <UserDetailCard user={user}></UserDetailCard>

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
