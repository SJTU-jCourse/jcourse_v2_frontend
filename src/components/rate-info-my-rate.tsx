import { Space } from "antd";

import MyRate from "@/components/my-rate";
import RateInfoDetail from "@/components/rate-info-detail";
import { RatingInfoProps } from "@/models/model";

const RateInfoWithMyRate = ({
  rateInfo,
  myRate,
  onChange,
}: {
  rateInfo: RatingInfoProps;
  myRate?: number;
  onChange?: (rating: number) => void;
}) => {
  return (
    <Space direction="vertical" align="center" style={{ margin: 20 }}>
      <RateInfoDetail rateInfo={rateInfo}></RateInfoDetail>
      <MyRate rate={myRate} onChange={onChange}></MyRate>
    </Space>
  );
};

export default RateInfoWithMyRate;
