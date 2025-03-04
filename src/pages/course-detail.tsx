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
import ReviewItem from "../components/review-item";
import usePagination from "../libs/usePagination";
import { useCourseDetail } from "../services/course";
import { useReviews } from "../services/review";

const CourseDetailPage = () => {
  const { id } = useParams();
  const { data: course } = useCourseDetail(id);
  const { pagination, handlePageChange } = usePagination();

  const { data: reviews } = useReviews(pagination, {
    course_id: id,
  });

  if (!course) {
    return <></>;
  }

  // const offeredSemesters = course.offered_courses.map((item) => item.semester);

  return (
    <>
      <PageHeader
        title={`${course.code} ${course.name}（${course.main_teacher.name}）`}
      ></PageHeader>
      <Row align="middle">
        <Col flex="auto">
          <CourseDetailCard course={course}></CourseDetailCard>
        </Col>
        <Col>
          <RateInfoWithMyRate
            rateInfo={course.rating_info}
            myRate={course.rating_info.my_rating}
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
            {!course.rating_info.my_rating && (
              <Link to="/write-review" state={{ course: course }}>
                <Button type="primary">写点评</Button>
              </Link>
            )}
          </Flex>

          {/*
           <Divider></Divider>
        <ReviewInCourseFilter
            semesters={offeredSemesters}
          ></ReviewInCourseFilter>*/}
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
            <Card title={`其他老师的 ${course.name}`}></Card>
            <Card title={`${course.main_teacher.name} 的其他课`}></Card>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default CourseDetailPage;
