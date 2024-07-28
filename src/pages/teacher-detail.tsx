import { Card, Col, List, Row, Space } from "antd";

import CourseItem from "../components/course-item";
import CourseSimpleFilter from "../components/course-simple-filter";
import MyRate from "../components/my-rate";
import RateInfoDetail from "../components/rate-info-detail";
import TeacherDetailCard from "../components/teacher-detail-card";
import { teacherDetail, userDetail } from "../models/mock";

const TeacherDetailPage = () => {
  const teacher = teacherDetail;
  const user = userDetail;
  const myRate = 5;
  return (
    <>
      <Row>
        <Col>
          <TeacherDetailCard teacher={teacher}></TeacherDetailCard>
        </Col>
        <Col>
          <Card>
            <Space direction="vertical" align="center">
              <RateInfoDetail rateInfo={teacher.rate_info}></RateInfoDetail>
              <MyRate user={user} rate={myRate}></MyRate>
            </Space>
          </Card>
        </Col>
      </Row>

      <Card title="筛选条件">
        <CourseSimpleFilter></CourseSimpleFilter>
      </Card>
      <Card title="所有课程">
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={teacher.courses}
          renderItem={(item) => {
            return (
              <List.Item>
                <CourseItem course={item}></CourseItem>
              </List.Item>
            );
          }}
        ></List>
      </Card>
    </>
  );
};

export default TeacherDetailPage;
