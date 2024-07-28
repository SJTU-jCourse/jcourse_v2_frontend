import { Card, Flex, Space, Tag, Typography } from "antd";
import { Link } from "react-router-dom";

import { CourseListItemProps } from "../models/model";
import RateInfo from "./rate-info";

const { Text } = Typography;

const CourseItem = ({ course }: { course: CourseListItemProps }) => {
  return (
    <Card bordered={false}>
      <Flex justify="space-between">
        <Space direction="vertical">
          <Link to={`/course/${course.id}`}>
            <Text
              strong
              style={{ fontSize: 18 }}
            >{`${course.code} ${course.name}（${course.main_teacher.name}）`}</Text>
          </Link>

          <Text type="secondary">{`${course.credit} 学分 ${course.department}`}</Text>

          <div>
            {course.categories.map((category) => {
              return <Tag color="green">{category}</Tag>;
            })}
          </div>
        </Space>
        <RateInfo rateInfo={course.rate_info}></RateInfo>
      </Flex>
    </Card>
  );
};

export default CourseItem;
