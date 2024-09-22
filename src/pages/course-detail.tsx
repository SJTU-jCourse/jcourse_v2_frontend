import {
  Button,
  Card,
  Col,
  Divider,
  Flex,
  List,
  Row,
  Space,
  Typography,
} from "antd";
import { Link, useParams } from "react-router-dom";

import CourseDetailCard from "../components/course-detail-card";
import PageHeader from "../components/page-header";
import RateInfoWithMyRate from "../components/rate-info-my-rate";
import ReviewInCourseFilter from "../components/review-in-course-filter";
import ReviewItem from "../components/review-item";
import usePagination from "../libs/usePagination";
import { useCourseDetail } from "../services/course";
import { useReviews } from "../services/review";

const CourseDetailPage = () => {
  const { id } = useParams();
  const { data: course } = useCourseDetail(Number(id));
  const { pagination, handlePageChange } = usePagination();
  const { data: reviews } = useReviews(pagination, {
    course_id: String(course?.id),
  });
  const myRate = 5;
  if (!course) {
    return <></>;
  }
  return (
    <>
      <PageHeader
        title={`${course.code} ${course.name}（${course.main_teacher.name}）`}
        extra={<Button>收藏</Button>}
      ></PageHeader>
      <Row align="middle">
        <Col flex="auto">
          <CourseDetailCard course={course}></CourseDetailCard>
        </Col>
        <Col>
          <RateInfoWithMyRate
            rateInfo={course.rating_info}
            myRate={myRate}
          ></RateInfoWithMyRate>
        </Col>
      </Row>
      <Divider></Divider>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={16}>
          <Flex justify="space-between" align="center">
            <Typography.Text strong style={{ fontSize: 18 }}>
              所有点评
            </Typography.Text>
            <Link to="/write-review">
              <Button type="primary">写点评</Button>
            </Link>
          </Flex>
          <Divider></Divider>
          <ReviewInCourseFilter></ReviewInCourseFilter>
          <Divider></Divider>
          <List
            pagination={{
              align: "center",
              onChange: handlePageChange,
              total: reviews?.total,
              current: pagination?.page,
              pageSize: pagination?.page_size,
              hideOnSinglePage: true,
            }}
            dataSource={reviews?.data}
            renderItem={(item) => {
              return (
                <List.Item key={item.id}>
                  <ReviewItem review={item}></ReviewItem>
                </List.Item>
              );
            }}
          ></List>
        </Col>
        <Col xs={24} sm={24} md={8}>
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
