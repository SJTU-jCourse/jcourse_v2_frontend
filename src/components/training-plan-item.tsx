import { Card, Flex, Space, Typography } from "antd";
import { Link } from "react-router-dom";

import { TrainingPlanSummaryProps } from "../models/model";
import RateInfo from "./rate-info";

const { Text } = Typography;
const TrainingPlanItem = ({
  trainingPlan,
}: {
  trainingPlan: TrainingPlanSummaryProps;
}) => {
  return (
    <Card bordered={false}>
      <Flex justify="space-between">
        <Space direction="vertical">
          <Link to={`/training-plan/${trainingPlan.id}`}>
            <Text strong style={{ fontSize: 16 }}>
              {trainingPlan.name}
            </Text>
          </Link>

          <Space>
            <Text type="secondary">{trainingPlan.entry_year}级</Text>
            <Text type="secondary">{trainingPlan.department}</Text>
          </Space>
        </Space>
        <RateInfo rateInfo={trainingPlan.rating_info}></RateInfo>
      </Flex>
    </Card>
  );
};

export default TrainingPlanItem;
