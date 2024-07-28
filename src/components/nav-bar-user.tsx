import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Dropdown, MenuProps } from "antd";
import { Link } from "react-router-dom";

const NavBarUser = ({}) => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to="/user/1">个人中心</Link>,
    },
    {
      key: "2",
      label: <Link to="/user/1">通知</Link>,
    },
    {
      key: "4",
      danger: true,
      label: "登出",
    },
  ];

  return (
    <Badge count={1}>
      <Dropdown menu={{ items }}>
        <Avatar icon={<UserOutlined />} />
      </Dropdown>
    </Badge>
  );
};

export default NavBarUser;
