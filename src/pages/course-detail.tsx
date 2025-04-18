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
  message,
} from "antd";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import CourseDetailCard from "@/components/course-detail-card";
import CourseItem from "@/components/course-item.tsx";
import PageHeader from "@/components/page-header";
import RateInfoWithMyRate from "@/components/rate-info-my-rate";
import ReviewItem from "@/components/review-item";
import usePagination from "@/libs/usePagination";
import { CourseSummaryResponse, RatingRequest } from "@/models/dto.ts";
import { CourseSummaryProps } from "@/models/model.ts";
import { useCourseDetail } from "@/services/course";
import { getCourseSummary } from "@/services/llm.ts";
import { createRating } from "@/services/rating.ts";
import { useReviews } from "@/services/review";

const CourseDetailPage = () => {
  const { id } = useParams();
  const { data: course } = useCourseDetail(id);
  const { pagination, handlePageChange } = usePagination();

  const { data: reviews } = useReviews(pagination, {
    course_id: id,
  });

  const [courseSummary, setCourseSummary] = useState("");
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const onRatingChange = (rating: number) => {
    if (!course?.id) return;
    const r: RatingRequest = {
      rating,
      related_id: course?.id,
      related_type: "course",
    };
    createRating(r)
      .then(() => messageApi.success("发表评分成功"))
      .catch(() => messageApi.error("发表评分失败"));
  };

  const handleShowSummary = () => {
    if (!course?.id) return;
    if (!showSummary) {
      setSummaryLoading(true);

      getCourseSummary(course.id)
        .then((resp: CourseSummaryResponse) => {
          setCourseSummary(resp.summary);
        })
        .catch(() => {
          messageApi.error("获取课程概要失败");
          setShowSummary(false);
        })
        .finally(() => {
          setSummaryLoading(false);
        });
    }
    setShowSummary(!showSummary);
  };

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
          {contextHolder}
          <RateInfoWithMyRate
            rateInfo={course.rating_info}
            myRate={course.rating_info.my_rating}
            onChange={onRatingChange}
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
            <Button type="default" onClick={handleShowSummary}>
              {showSummary ? "隐藏课程概要" : "查看课程概要"}
            </Button>

            {!course.rating_info.my_rating && (
              <Link to="/write-review" state={{ course: course }}>
                <Button type="primary">写点评</Button>
              </Link>
            )}
          </Flex>
          {showSummary && (
            <Card
              style={{ marginTop: 16 }}
              title="课程概要"
              loading={summaryLoading}
            >
              <Typography.Paragraph style={{ whiteSpace: "pre-wrap" }}>
                {summaryLoading ? "正在生成课程概要..." : courseSummary}
              </Typography.Paragraph>
            </Card>
          )}

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
            <Card title={`其他老师的 ${course.name}`}>
              <List
                dataSource={course?.related_courses?.courses_with_other_teachers}
                renderItem={(item: CourseSummaryProps) => (
                  <List.Item key={item.id}>
                    <CourseItem course={item}></CourseItem>
                  </List.Item>
                )}
              ></List>
            </Card>
            <Card title={`${course.main_teacher.name} 的其他课`}>
              <List
                dataSource={course?.related_courses?.courses_under_same_teacher}
                renderItem={(item: CourseSummaryProps) => (
                  <List.Item key={item.id}>
                    <CourseItem course={item}></CourseItem>
                  </List.Item>
                )}
              ></List>
            </Card>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default CourseDetailPage;
