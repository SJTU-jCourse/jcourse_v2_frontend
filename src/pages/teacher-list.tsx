import { Card, Col, Input, List, Row } from "antd";

import PageHeader from "../components/page-header";
import TeacherFilter from "../components/teacher-filter";
import TeacherItem from "../components/teacher-item";
import { TeacherListItemProps } from "../models/model";

const TeacherListPage = () => {
  const teacherList: TeacherListItemProps[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ].map(() => {
    return {
      code: "12345",
      name: "张峰",
      id: 1111,
      department: "电子信息与电气工程学院",
      title: "教授",
      avatar: "",
    };
  });
  return (
    <>
      <PageHeader
        title="教师"
        subTitle={`共有${teacherList.length}个教师`}
      ></PageHeader>
      <Row gutter={24}>
        <Col span={8}>
          <Card>
            <TeacherFilter></TeacherFilter>
          </Card>
        </Col>

        <Col span={16}>
          <Row>
            <Input.Search
              placeholder="教师名称"
              style={{ marginBottom: 16 }}
            ></Input.Search>
          </Row>
          <Row>
            <List
              pagination={{ align: "center" }}
              grid={{ gutter: 16, column: 2 }}
              dataSource={teacherList}
              renderItem={(item) => (
                <List.Item>
                  <TeacherItem teacher={item}></TeacherItem>
                </List.Item>
              )}
            ></List>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default TeacherListPage;
