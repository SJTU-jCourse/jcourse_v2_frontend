import { Card, Col, Input, List, Radio, Row, Segmented } from "antd";

import CourseFullFilter from "../components/course-full-filter";
import CourseItem from "../components/course-item";
import PageHeader from "../components/page-header";
import { CourseListItemProps, TeacherListItemProps } from "../models/model";

const CourseListPage = () => {
  const teacher: TeacherListItemProps = {
    code: "12345",
    name: "张峰",
    id: 1111,
    department: "电子信息与电气工程学院",
    title: "教授",
    avatar: "",
  };
  const courses: CourseListItemProps[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(
    () => {
      return {
        id: 1,
        code: "EE0502",
        name: "电路实验",
        credit: 3.5,
        main_teacher: teacher,
        categories: ["必修", "工程科学与技术"],
        department: "电子信息与电气工程学院",
        rate_info: {
          avg: 1.0,
          count: 10,
        },
      };
    }
  );

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
