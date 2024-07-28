import { Space } from "antd";

import { RateInfoDetailProps } from "../models/model";
import MyRate from "./my-rate";
import RateInfoDetail from "./rate-info-detail";

const RateInfoWithMyRate = ({
  rateInfo,
  myRate,
}: {
  rateInfo: RateInfoDetailProps;
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
