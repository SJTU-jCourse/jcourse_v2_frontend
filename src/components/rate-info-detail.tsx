import { Col, Progress, Rate, Row, Space, Typography } from "antd";

import { RateDistItemProps, RateInfoDetailProps } from "../models/model";

type RatePercentItemProps = {
  rate: number;
  name: string;
  percent: number; // count / max_count
  label: string;
};

const convertRateBar = (
  rateBars: RateDistItemProps[]
): RatePercentItemProps[] => {
  const maxCount = rateBars.reduce((max, item) => {
    return item.count > max.count ? item : max;
  }, rateBars[0]);

  return rateBars
    .map((item) => {
      return {
        rate: item.rate,
        name: `${item.rate}星`,
        percent: (item.count * 100) / maxCount.count,
        label: `${item.count}`,
      };
    })
    .sort((a, b) => {
      return b.rate - a.rate;
    });
};

const RateInfoDetail = ({ rateInfo }: { rateInfo: RateInfoDetailProps }) => {
  const rateBars = convertRateBar(rateInfo.rate_dist);
  return (
    <Row>
      <Col>
        <Row align="middle">
          <Col>
            <Typography.Text
              style={{ fontSize: 24, fontWeight: 600, marginRight: 16 }}
            >
              {rateInfo.avg.toFixed(1)}
            </Typography.Text>
          </Col>

          <Col flex="auto">
            <Row justify="center">
              <Rate
                style={{ fontSize: 14 }}
                disabled
                value={rateInfo.avg}
              ></Rate>
            </Row>
            <Row justify="center">
              <Typography.Text>{rateInfo.count}个评价</Typography.Text>
            </Row>
          </Col>
        </Row>

        {rateBars.map((item) => {
          return (
            <Row>
              <Space>
                <Typography.Text type="secondary">{item.name}</Typography.Text>
                <Progress
                  style={{ width: 100 }}
                  status="normal"
                  showInfo={false}
                  percent={item.percent}
                  size="small"
                ></Progress>
                <Typography.Text type="secondary">{item.label}</Typography.Text>
              </Space>
            </Row>
          );
        })}
      </Col>
    </Row>
  );
};

export default RateInfoDetail;
