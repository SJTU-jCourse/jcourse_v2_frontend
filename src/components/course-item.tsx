import { Card, Flex, Space, Tag, Typography } from "antd";
import { Link } from "react-router-dom";

import { CourseSummaryProps } from "../models/model";
import RateInfo from "./rate-info";

const { Text } = Typography;

const CourseItem = ({ course }: { course: CourseSummaryProps }) => {
  return (
    <Card bordered={false}>
      <Flex justify="space-between">
        <Space direction="vertical">
          <Link to={`/course/${course.id}`}>
            <Text
              strong
              style={{ fontSize: 16 }}
            >{`${course.code} ${course.name}（${course.main_teacher.name}）`}</Text>
          </Link>

          <Text type="secondary">{`${course.credit} 学分 ${course.department}`}</Text>
          {course.categories.length > 0 && (
            <div>
              {course.categories.map((category) => {
                return (
                  <Tag color="green" key={category}>
                    {category}
                  </Tag>
                );
              })}
            </div>
          )}
        </Space>
        <RateInfo rateInfo={course.rating_info}></RateInfo>
      </Flex>
    </Card>
  );
};

export default CourseItem;
