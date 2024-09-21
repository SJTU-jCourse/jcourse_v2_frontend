import { Flex, Rate, Space, Typography } from "antd";

import { RatingInfoProps } from "../models/model";

const RateInfo = ({ rateInfo }: { rateInfo: RatingInfoProps }) => {
  if (rateInfo.count == 0) {
    return <Typography.Text type="secondary">暂无评分</Typography.Text>;
  }

  return (
    <Space direction="vertical" className="rate-info" style={{ minWidth: 80 }}>
      <Rate disabled value={rateInfo.average} style={{ fontSize: 14 }}></Rate>
      <Flex justify="space-between" align="center">
        <Typography.Text strong style={{ fontSize: 20 }}>
          {rateInfo.average.toFixed(1)}
        </Typography.Text>

        <Typography.Text type="secondary">
          {rateInfo.count} 评分
        </Typography.Text>
      </Flex>
    </Space>
  );
};

export default RateInfo;
