import { Button, Card, Col, List, Row, Space } from "antd";
import { Link } from "react-router-dom";

import CourseDetailCard from "../components/course-detail-card";
import MyRate from "../components/my-rate";
import PageHeader from "../components/page-header";
import RateInfoDetail from "../components/rate-info-detail";
import ReviewItem from "../components/review-item";
import {
  CourseDetailProps,
  ReviewProps,
  TeacherListItemProps,
} from "../models/model";

const CourseDetailPage = () => {
  const teacher: TeacherListItemProps = {
    code: "12345",
    name: "张峰",
    id: 1111,
    department: "电子信息与电气工程学院",
    title: "教授",
    avatar: "",
  };

  const course: CourseDetailProps = {
    id: 1,
    code: "EE0502",
    name: "电路实验",
    credit: 3.5,
    main_teacher: teacher,
    categories: ["必修", "工程科学与技术"],
    department: "电子信息与电气工程学院",
    rate_info: {
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
    },
    offered_semesters: ["2023-2024-1", "2023-2024-2"],
  };

  const reviews: ReviewProps[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14,
  ].map(() => {
    return {
      id: 1,
      user: {
        id: 1,
        username: "傲娇系藤原千花",
        avatar: "",
      },
      course: {
        id: 1,
        code: "EE0502",
        name: "电路实验",
        main_teacher: {
          id: 111,
          code: "1111",
          name: "张峰",
          title: "教授",
          department: "电子信息与电气工程学院",
          avatar: "",
        },
      },
      comment: "这里是点评正文",
      rate: 1,
      semester: "2024-2025-1",
      created_at: 1722065399,
      updated_at: 1722065399,
      is_anonymous: false,
      reactions: [],
      replies: 22,
      likes: 11,
    };
  });

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
              <Card>
                <Space direction="vertical" align="center">
                  <RateInfoDetail rateInfo={course.rate_info}></RateInfoDetail>
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
          <Row>
            <Col span={24}>
              <Card
                title="所有点评"
                extra={[
                  <Link to="/write-review">
                    <Button type="primary">写点评</Button>
                  </Link>,
                ]}
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
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card title="为你推荐"></Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card title="其他老师的 电路实验"></Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card title="张峰 的其他课"></Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default CourseDetailPage;
