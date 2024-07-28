import { Checkbox, Col, Collapse, CollapseProps, Row } from "antd";

const CourseFullFilter = () => {
  const items: CollapseProps["items"] = [
    {
      key: "reviews",
      label: "点评",
      children: <Checkbox>仅显示有点评的课程</Checkbox>,
    },
    {
      key: "categories",
      label: "课程类别",
      children: (
        <Checkbox.Group>
          <Row>
            {["人文科学", "自然科学"].map((item) => (
              <Col span={24} key={item}>
                <Checkbox value={item}>{item}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      ),
    },
    {
      key: "departments",
      label: "开课单位",
      children: (
        <Checkbox.Group>
          <Row>
            {["船舶海洋与建筑工程学院", "机械与动力工程学院"].map((item) => (
              <Col span={24} key={item}>
                <Checkbox value={item}>{item}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      ),
    },
    {
      key: "credits",
      label: "学分",
      children: (
        <Checkbox.Group>
          <Row>
            {[1, 2, 3, 4, 5].map((item) => (
              <Col span={24} key={item}>
                <Checkbox value={item}>{item}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      ),
    },
    {
      key: "semester",
      label: "开课学期",
      children: (
        <Checkbox.Group>
          <Row>
            {[
              "2023-2024-1",
              "2023-2024-2",
              "2023-2024-3",
              "2024-2025-1",
              "2024-2025-2",
            ].map((item) => (
              <Col span={24} key={item}>
                <Checkbox value={item}>{item}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      ),
    },
  ];
  return <Collapse ghost items={items}></Collapse>;
};

export default CourseFullFilter;
