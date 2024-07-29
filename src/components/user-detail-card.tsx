import { Avatar, Col, Row, Space, Typography } from "antd";

import { UserDetailProps } from "../models/model";

const UserDetailCard = ({ user }: { user: UserDetailProps }) => {
  return (
    <Space direction="vertical">
      <Row gutter={[16, 16]} wrap={false}>
        <Col>
          <Avatar src={user.avatar} size={64}></Avatar>
        </Col>
        <Col>
          <Typography.Text style={{ fontSize: 22, fontWeight: 600 }}>
            {user.username}
          </Typography.Text>
        </Col>
      </Row>
      <div>
        <Typography.Text>{user.bio}</Typography.Text>
      </div>
    </Space>
  );
};

export default UserDetailCard;
