import { Space } from "antd";

import MyRate from "@/components/my-rate";
import RateInfoDetail from "@/components/rate-info-detail";
import { RatingInfoProps } from "@/models/model";

const RateInfoWithMyRate = ({
  rateInfo,
  myRate,
}: {
  rateInfo: RatingInfoProps;
  myRate?: number;
}) => {
  return (
    <Space direction="vertical" align="center" style={{ margin: 20 }}>
      <RateInfoDetail rateInfo={rateInfo}></RateInfoDetail>
      <MyRate rate={myRate}></MyRate>
    </Space>
  );
};

export default RateInfoWithMyRate;
