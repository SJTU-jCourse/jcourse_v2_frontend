import { Col, Progress, Row, Space, Typography } from "antd";

import { RateDistItemProps, RateInfoDetailProps } from "../models/model";

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
  return rateBars
    .map((item) => {
      return {
        rate: item.rate,
        name: `${item.rate}星`,
        percent: (item.count * 100) / total,
        label: `${item.count}`,
      };
    })
    .sort((a, b) => {
      return b.rate - a.rate;
    });
};

const RateInfoDetail = ({ rateInfo }: { rateInfo: RateInfoDetailProps }) => {
  const rateBars = convertRateBar(rateInfo.count, rateInfo.rate_dist);
  return (
    <Row justify="space-between" align="middle" gutter={[16, 16]}>
      <Col>
        <Space direction="vertical" align="center">
          <Typography.Text style={{ fontSize: 24, fontWeight: 600 }}>
            {rateInfo.avg.toFixed(1)}
          </Typography.Text>

          <Typography.Text type="secondary">
            {rateInfo.count} 评分
          </Typography.Text>
        </Space>
      </Col>
      <Col>
        {rateBars.map((item) => {
          return (
            <Row>
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
