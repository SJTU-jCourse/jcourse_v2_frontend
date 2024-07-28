import { Rate, Space } from "antd";

const MyRate = ({ rate }: { rate?: number }) => {
  if (!rate) {
    return (
      <Space>
        <div>立即评分</div>
        <Rate></Rate>
      </Space>
    );
  }

  return (
    <Space>
      <div>我的评分</div>
      <Rate defaultValue={rate}></Rate>
    </Space>
  );
};

export default MyRate;
