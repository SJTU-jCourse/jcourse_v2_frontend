import { Button, Flex, Select } from "antd";

const semesterOptions = ["2024", "2023", "2022", "2021", "2020"].map((item) => {
  return { label: item, value: item };
});

const categoryOptions = ["2024", "2023", "2022", "2021", "2020"].map((item) => {
  return { label: item, value: item };
});

const TrainingPlanBaseCourseFilter = () => {
  return (
    <Flex wrap align="center" justify="flex-start" gap={8}>
      <div>
        学期：
        <Select
          popupMatchSelectWidth={false}
          options={semesterOptions}
        ></Select>
      </div>
      <div>
        课程性质：
        <Select
          popupMatchSelectWidth={false}
          options={categoryOptions}
        ></Select>
      </div>
      <Button>筛选</Button>
    </Flex>
  );
};

export default TrainingPlanBaseCourseFilter;
