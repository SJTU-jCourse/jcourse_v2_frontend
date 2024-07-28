import { Card, Space, Typography } from "antd";
import { Link } from "react-router-dom";

import { TrainingPlanListItemProps } from "../models/model";

const { Text } = Typography;
const TrainingPlanItem = ({
  trainingPlan,
}: {
  trainingPlan: TrainingPlanListItemProps;
}) => {
  return (
    <Card bordered={false}>
      <Space direction="vertical">
        <Link to={`/training-plan/${trainingPlan.id}`}>
          <Text strong style={{ fontSize: 18 }}>
            {trainingPlan.name}
          </Text>
        </Link>

        <Space>
          <Text type="secondary">{trainingPlan.entry_year}级</Text>
          <Text type="secondary">{trainingPlan.department}</Text>
        </Space>
      </Space>
    </Card>
  );
};

export default TrainingPlanItem;
