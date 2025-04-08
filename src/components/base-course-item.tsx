import { Card, Space, Typography } from "antd";
import { Link } from "react-router-dom";

import { BaseCourseProps } from "@/models/model";

const { Text } = Typography;
const BaseCourseItem = ({ baseCourse }: { baseCourse: BaseCourseProps }) => {
  return (
    <Card bordered={false}>
      <Space direction="vertical">
        <Link to={`/base-course/${baseCourse.id}`}>
          <Text
            strong
            style={{ fontSize: 18 }}
          >{`${baseCourse.code} ${baseCourse.name}`}</Text>
        </Link>

        <Text type="secondary">{`${baseCourse.credit} 学分`}</Text>
      </Space>
    </Card>
  );
};

export default BaseCourseItem;
