import { Col, Divider, List, Row, Typography } from "antd";

import CourseItem from "../components/course-item";
import CourseSimpleFilter from "../components/course-simple-filter";
import RateInfoWithMyRate from "../components/rate-info-my-rate";
import TeacherDetailCard from "../components/teacher-detail-card";
import { teacherDetail } from "../models/mock";

const TeacherDetailPage = () => {
  const teacher = teacherDetail;
  const myRate = 5;
  return (
    <>
      <Row align="middle">
        <Col flex="auto">
          <TeacherDetailCard teacher={teacher}></TeacherDetailCard>
        </Col>
        <Col>
          <RateInfoWithMyRate
            rateInfo={teacher.rating_info}
            myRate={myRate}
          ></RateInfoWithMyRate>
        </Col>
      </Row>

      <Divider></Divider>
      <Typography.Text strong style={{ fontSize: 18 }}>
        开设课程
      </Typography.Text>
      
      <Divider></Divider>

      <CourseSimpleFilter></CourseSimpleFilter>

      <Divider></Divider>

      <List
        grid={{ gutter: 16, xs: 1, sm: 2, column: 3 }}
        dataSource={teacher.courses}
        renderItem={(item) => {
          return (
            <List.Item key={item.id}>
              <CourseItem course={item}></CourseItem>
            </List.Item>
          );
        }}
      ></List>
    </>
  );
};

export default TeacherDetailPage;
