import { Flex, Rate } from "antd";

const MyRate = ({ rate }: { rate?: number }) => {
  return (
    <Flex justify="space-between" gap={20}>
      <div>{rate ? "我的评分" : "立即评分"}</div>
      <Rate defaultValue={rate}></Rate>
    </Flex>
  );
};

export default MyRate;
