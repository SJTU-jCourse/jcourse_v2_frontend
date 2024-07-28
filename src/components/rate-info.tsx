import { Space, Typography } from "antd";

import { RateInfoProps } from "../models/model";

const RateInfo = ({ rateInfo }: { rateInfo: RateInfoProps }) => {
  if (rateInfo.count == 0) {
    return <Typography.Text type="secondary">暂无评分</Typography.Text>;
  }

  return (
    <Space>
      <Typography.Text strong style={{ fontSize: 18 }}>
        {rateInfo.avg.toFixed(1)}
      </Typography.Text>
      <Space direction="vertical">
        <Typography.Text type="secondary">
          {rateInfo.count}人评价
        </Typography.Text>
      </Space>
    </Space>
  );
};

export default RateInfo;
