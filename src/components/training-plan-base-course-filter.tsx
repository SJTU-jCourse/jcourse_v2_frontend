import { Button, Col, Row, Select } from "antd";

const semesterOptions = ["2024", "2023", "2022", "2021", "2020"].map((item) => {
  return { label: item, value: item };
});

const categoryOptions = ["2024", "2023", "2022", "2021", "2020"].map((item) => {
  return { label: item, value: item };
});

const TrainingPlanBaseCourseFilter = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        学期：
        <Select
          popupMatchSelectWidth={false}
          options={semesterOptions}
        ></Select>
      </Col>
      <Col span={24}>
        课程性质：
        <Select
          popupMatchSelectWidth={false}
          options={categoryOptions}
        ></Select>
      </Col>
      <Col span={24}>
        <Button>筛选</Button>
      </Col>
    </Row>
  );
};

export default TrainingPlanBaseCourseFilter;
