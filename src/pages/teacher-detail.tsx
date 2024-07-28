import { Card, Col, List, Row, Space } from "antd";

import CourseItem from "../components/course-item";
import CourseSimpleFilter from "../components/course-simple-filter";
import MyRate from "../components/my-rate";
import RateInfoDetail from "../components/rate-info-detail";
import TeacherDetailCard from "../components/teacher-detail-card";
import { RateInfoDetailProps, TeacherDetailProps } from "../models/model";

const TeacherDetailPage = () => {
  const teacher: TeacherDetailProps = {
    id: 0,
    code: "12345",
    name: "张峰",
    title: "教授",
    department: "电子信息与电气工程学院",
    avatar: "",
    courses: [],
    email: "izf@sjtu.edu.cn",
    profile_url: "",
  };
  teacher.courses = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
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
  });
  const rateInfo: RateInfoDetailProps = {
    avg: 1.0,
    count: 103,
    rate_dist: [
      {
        rate: 1,
        count: 1,
      },
      {
        rate: 2,
        count: 2,
      },
      {
        rate: 3,
        count: 3,
      },
      {
        rate: 4,
        count: 5,
      },
      {
        rate: 5,
        count: 1,
      },
    ],
  };
  return (
    <>
      <Row>
        <Col>
          <TeacherDetailCard teacher={teacher}></TeacherDetailCard>
        </Col>
        <Col>
          <Card>
            <Space direction="vertical" align="center">
              <RateInfoDetail rateInfo={rateInfo}></RateInfoDetail>
              <MyRate
                user={{
                  id: 0,
                  username: "11",
                  avatar: "",
                }}
                rate={5}
              ></MyRate>
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
