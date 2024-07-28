import { Button, Card, Col, List, Row, Space } from "antd";
import { Link } from "react-router-dom";

import CourseDetailCard from "../components/course-detail-card";
import MyRate from "../components/my-rate";
import PageHeader from "../components/page-header";
import RateInfoDetail from "../components/rate-info-detail";
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

      <Row gutter={[16, 16]}>
        <Col span={16}>
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
          <Row>
            <Col span={24}>
              <Card
                title="所有点评"
                extra={[
                  <Link to="/write-review">
                    <Button type="primary">写点评</Button>
                  </Link>,
                ]}
                bordered={false}
              >
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
          </Row>
        </Col>
        <Col span={8}>
          <Space direction="vertical">
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
