import { Flex, Rate, Space, Typography } from "antd";

import { RateInfoProps } from "../models/model";

const RateInfo = ({ rateInfo }: { rateInfo: RateInfoProps }) => {
  if (rateInfo.count == 0) {
    return <Typography.Text type="secondary">暂无评分</Typography.Text>;
  }

  return (
    <Space direction="vertical">
      <Rate disabled value={rateInfo.avg} style={{ fontSize: 14 }}></Rate>
      <Flex justify="space-between" align="center">
        <Typography.Text strong style={{ fontSize: 20 }}>
          {rateInfo.avg.toFixed(1)}
        </Typography.Text>

        <Typography.Text type="secondary">
          {rateInfo.count} 评分
        </Typography.Text>
      </Flex>
    </Space>
  );
};

export default RateInfo;
