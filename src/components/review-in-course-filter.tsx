import { Button, Flex, Select } from "antd";

const orderOptions = [
  "最新回复",
  "最早回复",
  "最高获赞",
  "最高评分",
  "最低评分",
].map((item) => {
  return { label: item, value: item };
});
const semesterOptions = [
  "2024-2025-1",
  "2024-2025-2",
  "2024-2025-3",
  "2023-2024-1",
  "2023-2024-2",
].map((item) => {
  return { label: item, value: item };
});
const rateOptions = ["5", "4", "3", "2", "1"].map((item) => {
  return { label: item, value: item };
});

const ReviewInCourseFilter = () => {
  return (
    <Flex wrap align="center" justify="flex-start" gap={8}>
      <div>
        排序：
        <Select popupMatchSelectWidth={false} options={orderOptions}></Select>
      </div>
      <div>
        学期：
        <Select
          popupMatchSelectWidth={false}
          options={semesterOptions}
        ></Select>
      </div>
      <div>
        评分：
        <Select popupMatchSelectWidth={false} options={rateOptions}></Select>
      </div>

      <Button>筛选</Button>
    </Flex>
  );
};

export default ReviewInCourseFilter;
