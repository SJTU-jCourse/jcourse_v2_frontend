import { Button, Card, Col, Divider, List, Row, Space } from "antd";
import { Link } from "react-router-dom";

import CourseDetailCard from "../components/course-detail-card";
import MyRate from "../components/my-rate";
import PageHeader from "../components/page-header";
import RateInfoDetail from "../components/rate-info-detail";
import ReviewInCourseFilter from "../components/review-in-course-filter";
import ReviewItem from "../components/review-item";
import { courseDetail, reviewList, userDetail } from "../models/mock";

const CourseDetailPage = () => {
  const course = courseDetail;
  const reviews = reviewList;
  const user = userDetail;
  const myRate = 5;

  return (
    <>
      <PageHeader
        title={`${course.code} ${course.name}（${course.main_teacher.name}）`}
        extra={
          <Space>
            <Button>收藏</Button>
          </Space>
        }
      ></PageHeader>
      <Row>
        <Col span={12}>
          <CourseDetailCard course={course}></CourseDetailCard>
        </Col>
        <Col span={12}>
          <Space direction="vertical" align="center">
            <RateInfoDetail rateInfo={course.rate_info}></RateInfoDetail>
            <MyRate user={user} rate={myRate}></MyRate>
          </Space>
        </Col>
      </Row>
      <Divider></Divider>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <Card
            title="所有点评"
            extra={[
              <Link to="/write-review">
                <Button type="primary">写点评</Button>
              </Link>,
            ]}
            bordered={false}
          >
            <ReviewInCourseFilter></ReviewInCourseFilter>
            <Divider></Divider>
            <List
              pagination={{ align: "center" }}
              dataSource={reviews}
              renderItem={(item) => {
                return (
                  <List.Item>
                    <ReviewItem review={item}></ReviewItem>
                  </List.Item>
                );
              }}
            ></List>
          </Card>
        </Col>
        <Col span={8}>
          <Space direction="vertical" style={{ width: "100%" }}>
            <Card title="为你推荐"></Card>
            <Card title={`其他老师的 ${course.name}`}></Card>
            <Card title={`${course.main_teacher.name} 的其他课`}></Card>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default CourseDetailPage;
