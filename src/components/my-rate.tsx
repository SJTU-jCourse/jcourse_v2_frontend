import { Flex, Rate } from "antd";

const MyRate = ({
  rate,
  onChange,
}: {
  rate?: number;
  onChange?: (rating: number) => void;
}) => {
  return (
    <Flex justify="space-between" gap={20}>
      <div>{rate ? "我的评分" : "立即评分"}</div>
      <Rate defaultValue={rate} onChange={onChange}></Rate>
    </Flex>
  );
};

export default MyRate;
