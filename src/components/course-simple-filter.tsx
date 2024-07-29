import { Button, Flex, Select } from "antd";

const orderOptions = ["最高评分", "最低评分", "最多点评", "最少点评"].map(
  (item) => {
    return { label: item, value: item };
  }
);
const semesterOptions = [
  "2024-2025-1",
  "2024-2025-2",
  "2024-2025-3",
  "2023-2024-1",
  "2023-2024-2",
].map((item) => {
  return { label: item, value: item };
});

const CourseSimpleFilter = () => {
  return (
    <Flex wrap align="center" justify="flex-start" gap={8}>
      <div>
        排序：
        <Select popupMatchSelectWidth={false} options={orderOptions}></Select>
      </div>
      <div>
        开课学期：
        <Select
          popupMatchSelectWidth={false}
          options={semesterOptions}
        ></Select>
      </div>
      <Button>筛选</Button>
    </Flex>
  );
};

export default CourseSimpleFilter;
