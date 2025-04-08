import { Card, Descriptions, Typography } from "antd";
import { Link } from "react-router-dom";

import { TrainingPlanBaseCourseProps } from "@/models/model";

const TrainingPlanBaseCourse = ({
  trainingPlanBaseCourse,
}: {
  trainingPlanBaseCourse: TrainingPlanBaseCourseProps;
}) => {
  return (
    <Card bordered={false}>
      <Descriptions
        title={
          <Link to={`/base-course/${trainingPlanBaseCourse.base_course.code}`}>
            <Typography.Text
              strong
              style={{ fontSize: 16 }}
            >{`${trainingPlanBaseCourse.base_course.code} ${trainingPlanBaseCourse.base_course.name}`}</Typography.Text>
          </Link>
        }
        column={1}
      >
        <Descriptions.Item label="学分">
          {trainingPlanBaseCourse.base_course.credit}
        </Descriptions.Item>
        {trainingPlanBaseCourse.category?.length > 0 && (
          <Descriptions.Item label="课程性质">
            {trainingPlanBaseCourse.category}
          </Descriptions.Item>
        )}
        <Descriptions.Item label="推荐学期">
          {trainingPlanBaseCourse.suggest_semester}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default TrainingPlanBaseCourse;
