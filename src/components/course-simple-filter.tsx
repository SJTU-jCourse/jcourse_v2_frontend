import { Button, Col, Row, Select } from "antd";

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
    <Row gutter={[16, 16]}>
      <Col>
        排序：
        <Select popupMatchSelectWidth={false} options={orderOptions}></Select>
      </Col>
      <Col>
        开课学期：
        <Select
          popupMatchSelectWidth={false}
          options={semesterOptions}
        ></Select>
      </Col>
      <Button>筛选</Button>
    </Row>
  );
};

export default CourseSimpleFilter;
