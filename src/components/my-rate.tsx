import { Avatar, Rate, Space } from "antd";

import { UserInReviewProps } from "../models/model";

const MyRate = ({
  user,
  rate,
}: {
  user?: UserInReviewProps;
  rate?: number;
}) => {
  if (!rate || !user) {
    return (
      <Space>
        <div>请评分</div>
        <Rate></Rate>
      </Space>
    );
  }

  return (
    <Space>
      <Avatar src={user.avatar} size={24}>
        {user.username.charAt(0)}
      </Avatar>
      <Rate defaultValue={rate}></Rate>
    </Space>
  );
};

export default MyRate;
