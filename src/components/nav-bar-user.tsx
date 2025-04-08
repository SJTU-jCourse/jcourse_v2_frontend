import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Dropdown, MenuProps } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { UserDetailProps } from "@/models/model";
import { logout } from "@/services/auth";

const NavBarUser = ({ user }: { user?: UserDetailProps }) => {
  const navigate = useNavigate();
  const clickLogout = () => {
    logout().then(() => {
      navigate("/login");
    });
  };

  const items: MenuProps["items"] = [
    {
      key: "home",
      label: <Link to={`/user/${user?.id}`}>个人中心</Link>,
    },
    {
      key: "logout",
      danger: true,
      label: "登出",
      onClick: clickLogout,
    },
  ];

  return (
    <Badge count={0}>
      <Dropdown menu={{ items }}>
        <Avatar icon={<UserOutlined />} />
      </Dropdown>
    </Badge>
  );
};

export default NavBarUser;
