import { Col, Divider, List, message, Row, Typography } from "antd";
import { useParams } from "react-router-dom";

import CourseItem from "../components/course-item";
import CourseSimpleFilter from "@/components/course-simple-filter";
import RateInfoWithMyRate from "@/components/rate-info-my-rate";
import TeacherDetailCard from "@/components/teacher-detail-card";
import { useTeacherDetail } from "@/services/teacher";
import { RatingRequest } from "@/models/dto.ts";
import { createRating } from "@/services/rating.ts";

const TeacherDetailPage = () => {
  const { id } = useParams();
  const { data: teacher } = useTeacherDetail(Number(id));

  const [messageApi, contextHolder] = message.useMessage();
  const onRatingChange = (rating: number) => {
    if (!teacher?.id) return;
    const r: RatingRequest = {
      rating,
      related_id: teacher?.id,
      related_type: "teacher",
    };
    createRating(r)
      .then(() => messageApi.success("发表评分成功"))
      .catch(() => messageApi.error("发表评分失败"));
  };

  if (!teacher) {
    return <></>;
  }
  return (
    <>
      <Row align="middle">
        <Col flex="auto">
          <TeacherDetailCard teacher={teacher}></TeacherDetailCard>
        </Col>
        <Col>
          {contextHolder}
          <RateInfoWithMyRate
            rateInfo={teacher.rating_info}
            myRate={teacher.rating_info.my_rating}
            onChange={onRatingChange}
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
