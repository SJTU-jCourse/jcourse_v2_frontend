import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Row, Space, Typography } from "antd";

import { TeacherDetailProps } from "../models/model";

const TeacherDetailCard = ({ teacher }: { teacher: TeacherDetailProps }) => {
  return (
    <div style={{ width: "100%", height: "100%", padding: 24 }}>
      <Row gutter={16}>
        <Col>
          <Avatar
            src={teacher.avatar}
            size={80}
            icon={<UserOutlined />}
          ></Avatar>
        </Col>
        <Col>
          <Space direction="vertical" align="center">
            <Space align="baseline">
              <Typography.Text style={{ fontSize: 22, fontWeight: 600 }}>
                {teacher.name}
              </Typography.Text>

              <Typography.Text style={{ fontSize: 16 }}>
                {teacher.title}
              </Typography.Text>
            </Space>
            <Typography.Text>{teacher.department}</Typography.Text>
            <Typography.Link href={`mailto:${teacher.email}`}>
              {teacher.email}
            </Typography.Link>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default TeacherDetailCard;
