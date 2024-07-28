import { Button, Select, Space } from "antd";

const semesterOptions = ["2024", "2023", "2022", "2021", "2020"].map((item) => {
  return { label: item, value: item };
});

const categoryOptions = ["2024", "2023", "2022", "2021", "2020"].map((item) => {
  return { label: item, value: item };
});

const TrainingPlanBaseCourseFilter = () => {
  return (
    <Space>
      学期：
      <Select popupMatchSelectWidth={false} options={semesterOptions}></Select>
      课程性质：
      <Select popupMatchSelectWidth={false} options={categoryOptions}></Select>
      <Button>筛选</Button>
    </Space>
  );
};

export default TrainingPlanBaseCourseFilter;
