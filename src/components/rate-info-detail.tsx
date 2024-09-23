import { Col, Progress, Row, Space, Typography } from "antd";

import { RateDistItemProps, RatingInfoProps } from "../models/model";

type RatePercentItemProps = {
  rate: number;
  name: string;
  percent: number; // count / max_count
  label: string;
};

const convertRateBar = (
  total: number,
  rateBars: RateDistItemProps[]
): RatePercentItemProps[] => {
  const rates = [5, 4, 3, 2, 1].map((item) => {
    return { rate: item, name: `${item}星`, percent: 0, label: `0` };
  });

  rateBars.forEach((item) => {
    console.log(item)
    rates[5 - item.rating].percent = item.count * 100 / total;
  });

  return rates;
};

const RateInfoDetail = ({ rateInfo }: { rateInfo: RatingInfoProps }) => {
  const rateBars = convertRateBar(rateInfo.count, rateInfo.rating_dist);
  return (
    <Row justify="space-between" align="middle" gutter={[16, 16]}>
      <Col>
        <Space direction="vertical" align="center">
          <Typography.Text style={{ fontSize: 36, fontWeight: 600 }}>
            {rateInfo.average.toFixed(1)}
          </Typography.Text>

          <Typography.Text type="secondary">
            {rateInfo.count} 评分
          </Typography.Text>
        </Space>
      </Col>
      <Col>
        {rateBars.map((item) => {
          return (
            <Row key={item.rate}>
              <Space>
                <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                  {item.name}
                </Typography.Text>
                <Progress
                  style={{ width: 100 }}
                  status="normal"
                  showInfo={false}
                  percent={item.percent}
                  size="small"
                ></Progress>
                <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                  {item.label}
                </Typography.Text>
              </Space>
            </Row>
          );
        })}
      </Col>
    </Row>
  );
};

export default RateInfoDetail;
