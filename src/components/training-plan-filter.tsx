import { Button, Col, Row, Select } from "antd";

const gradeOptions = ["2024", "2023", "2022", "2021", "2020"].map((item) => {
  return { label: item, value: item };
});
const departmentOptions = [
  "船舶海洋与建筑工程学院",
  "机械与动力工程学院",
  "电子信息与电气工程学院",
  "材料科学与工程学院",
  "生物医学工程学院",
].map((item) => {
  return { label: item, value: item };
});

const TrainingPlanFilter = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        年级：
        <Select popupMatchSelectWidth={false} options={gradeOptions}></Select>
      </Col>
      <Col span={24}>
        学院：
        <Select
          popupMatchSelectWidth={false}
          options={departmentOptions}
        ></Select>
      </Col>
      <Col span={24}>
        <Button>筛选</Button>
      </Col>
    </Row>
  );
};

export default TrainingPlanFilter;
