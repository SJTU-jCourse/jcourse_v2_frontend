import { Card, Descriptions } from "antd";

import { CourseDetailProps } from "../models/model";

const CourseDetailCard = ({ course }: { course: CourseDetailProps }) => {
  return (
    <Card>
      <Descriptions column={1}>
        <Descriptions.Item label="课号">{course.code}</Descriptions.Item>
        <Descriptions.Item label="学分">{course.credit}</Descriptions.Item>
        <Descriptions.Item label="课程类型">
          {course.categories.join(",")}
        </Descriptions.Item>
        <Descriptions.Item label="开课单位">
          {course.department}
        </Descriptions.Item>
        <Descriptions.Item label="开课学期">
          {course.offered_semesters.join(",")}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default CourseDetailCard;
