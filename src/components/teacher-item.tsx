import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Row, Space, Typography } from "antd";
import { Link } from "react-router-dom";

import { TeacherListItemProps } from "../models/model";
import RateInfo from "./rate-info";

const { Text } = Typography;
const TeacherItem = ({ teacher }: { teacher: TeacherListItemProps }) => {
  return (
    <Card bordered={false}>
      <Row align="middle" gutter={[16, 16]}>
        <Col>
          <Avatar
            src={teacher.avatar}
            size={48}
            icon={<UserOutlined />}
          ></Avatar>
        </Col>
        <Col flex="auto">
          <Space direction="vertical">
            <Link to={`/teacher/${teacher.id}`}>
              <Text strong style={{ fontSize: 18 }}>
                {teacher.name}
              </Text>
              <Text> {teacher.title}</Text>
            </Link>
            <Text type="secondary">{teacher.department}</Text>
          </Space>
        </Col>
        <Col>
          <RateInfo rateInfo={teacher.rate_info}></RateInfo>
        </Col>
      </Row>
    </Card>
  );
};

export default TeacherItem;
