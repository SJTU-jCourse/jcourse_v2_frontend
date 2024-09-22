import { Descriptions } from "antd";

import { TrainingPlanDetailProps } from "../models/model";

const TrainingPlanDetailCard = ({
  trainingPlan,
}: {
  trainingPlan: TrainingPlanDetailProps;
}) => {
  return (
    <div style={{ width: "100%", height: "100%", padding: 24 }}>
      <Descriptions style={{ maxWidth: 600 }}>
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
          {trainingPlan.courses.length}
        </Descriptions.Item>
        <Descriptions.Item label="毕业最低学分">
          {trainingPlan.min_credits}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default TrainingPlanDetailCard;
