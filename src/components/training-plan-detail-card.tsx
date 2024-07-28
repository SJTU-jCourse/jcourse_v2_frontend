import { Card, Descriptions } from "antd";

import { TrainingPlanDetailProps } from "../models/model";

const TrainingPlanDetailCard = ({
  trainingPlan,
}: {
  trainingPlan: TrainingPlanDetailProps;
}) => {
  return (
    <Card title="基本信息">
      <Descriptions column={1}>
        <Descriptions.Item label="年级">
          {trainingPlan.entry_year}
        </Descriptions.Item>
        <Descriptions.Item label="专业类别">工学</Descriptions.Item>
        <Descriptions.Item label="开设学院">
          {trainingPlan.department}
        </Descriptions.Item>
        <Descriptions.Item label="学历层次">
          {trainingPlan.degree}
        </Descriptions.Item>
        <Descriptions.Item label="课程数">
          {trainingPlan.course_count}
        </Descriptions.Item>
        <Descriptions.Item label="毕业最低学分">
          {trainingPlan.minimal_credits}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default TrainingPlanDetailCard;
