import { Col, Divider, List, message, Row } from "antd";
import { useParams } from "react-router-dom";

import PageHeader from "@/components/page-header";
import RateInfoWithMyRate from "@/components/rate-info-my-rate";
import TrainingPlanBaseCourse from "@/components/training-plan-base-course";
import TrainingPlanBaseCourseFilter from "@/components/training-plan-base-course-filter";
import TrainingPlanDetailCard from "@/components/training-plan-detail-card";
import { useTrainingPlanDetail } from "@/services/training_plan";
import { RatingRequest } from "@/models/dto.ts";
import { createRating } from "@/services/rating.ts";

const TrainingPlanDetailPage = () => {
  const { id } = useParams();
  const { data: trainingPlan } = useTrainingPlanDetail(Number(id));
  const [messageApi, contextHolder] = message.useMessage();
  const onRatingChange = (rating: number) => {
    if (!trainingPlan?.id) return;
    const r: RatingRequest = {
      rating,
      related_id: trainingPlan?.id,
      related_type: "training_plan",
    };
    createRating(r)
      .then(() => messageApi.success("发表评分成功"))
      .catch(() => messageApi.error("发表评分失败"));
  };
  if (!trainingPlan) {
    return <></>;
  }
  return (
    <>
      <PageHeader title={`${trainingPlan.name} 专业`}></PageHeader>
      <Row align="middle">
        <Col flex="auto">
          <TrainingPlanDetailCard
            trainingPlan={trainingPlan}
          ></TrainingPlanDetailCard>
        </Col>
        <Col>
          {contextHolder}
          <RateInfoWithMyRate
            rateInfo={trainingPlan.rating_info}
            myRate={trainingPlan.rating_info.my_rating}
            onChange={onRatingChange}
          ></RateInfoWithMyRate>
        </Col>
      </Row>

      <Divider></Divider>
      <div style={{ paddingInline: 24 }}>
        <TrainingPlanBaseCourseFilter></TrainingPlanBaseCourseFilter>
      </div>

      <Divider></Divider>
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, column: 3 }}
        dataSource={trainingPlan.courses}
        renderItem={(item) => {
          return (
            <List.Item key={item.base_course.id}>
              <TrainingPlanBaseCourse
                trainingPlanBaseCourse={item}
              ></TrainingPlanBaseCourse>
            </List.Item>
          );
        }}
      ></List>
    </>
  );
};

export default TrainingPlanDetailPage;
