import { Card, Col, Input, List, Row } from "antd";

import PageHeader from "../components/page-header";
import TeacherFilter from "../components/teacher-filter";
import TeacherItem from "../components/teacher-item";
import { teacherList } from "../models/mock";

const TeacherListPage = () => {
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
