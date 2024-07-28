import { Card, Col, Input, List, Radio, Row, Segmented } from "antd";

import CourseFullFilter from "../components/course-full-filter";
import CourseItem from "../components/course-item";
import PageHeader from "../components/page-header";
import { courseList } from "../models/mock";
import { CourseListItemProps } from "../models/model";

const CourseListPage = () => {
  const courses: CourseListItemProps[] = courseList;

  return (
    <>
      <PageHeader
        title="课程"
        subTitle={`共有${courses.length}个课程`}
      ></PageHeader>
      <Row gutter={24}>
        <Col span={8}>
          <Card title="筛选">
            <CourseFullFilter></CourseFullFilter>
          </Card>
        </Col>

        <Col span={16}>
          <Row gutter={[16, 16]}>
            <Col flex="auto">
              <Input.Search
                placeholder="课程名称/课程号"
                style={{ marginBottom: 16 }}
              ></Input.Search>
            </Col>
            <Col>
              <Segmented options={["最多点评", "最高评分"]}></Segmented>
            </Col>
          </Row>
          <Row>
            <List
              pagination={{ align: "center" }}
              grid={{ gutter: 16, column: 2 }}
              dataSource={courses}
              renderItem={(item) => (
                <List.Item>
                  <CourseItem course={item}></CourseItem>
                </List.Item>
              )}
            ></List>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default CourseListPage;
