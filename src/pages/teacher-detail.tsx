import { Col, Divider, List, Row, Space } from "antd";

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
          <Space direction="vertical" align="center">
            <RateInfoDetail rateInfo={teacher.rate_info}></RateInfoDetail>
            <MyRate user={user} rate={myRate}></MyRate>
          </Space>
        </Col>
      </Row>

      <Divider></Divider>

      <CourseSimpleFilter></CourseSimpleFilter>

      <Divider></Divider>

      <List
        grid={{ gutter: 16, xs: 1, sm: 2, column: 3 }}
        dataSource={teacher.courses}
        renderItem={(item) => {
          return (
            <List.Item>
              <CourseItem course={item}></CourseItem>
            </List.Item>
          );
        }}
      ></List>
    </>
  );
};

export default TeacherDetailPage;
