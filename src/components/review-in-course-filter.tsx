import { Button, Col, Row, Select } from "antd";

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
    <Row gutter={[16, 16]}>
      <Col>
        排序：
        <Select popupMatchSelectWidth={false} options={orderOptions}></Select>
      </Col>
      <Col>
        学期：
        <Select
          popupMatchSelectWidth={false}
          options={semesterOptions}
        ></Select>
      </Col>
      <Col>
        推荐指数：
        <Select popupMatchSelectWidth={false} options={rateOptions}></Select>
      </Col>
      <Button>筛选</Button>
    </Row>
  );
};

export default ReviewInCourseFilter;
