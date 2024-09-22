import { Col, Divider, List, Row } from "antd";
import { useParams } from "react-router-dom";

import PageHeader from "../components/page-header";
import RateInfoWithMyRate from "../components/rate-info-my-rate";
import TrainingPlanBaseCourse from "../components/training-plan-base-course";
import TrainingPlanBaseCourseFilter from "../components/training-plan-base-course-filter";
import TrainingPlanDetailCard from "../components/training-plan-detail-card";
import { useTrainingPlanDetail } from "../services/training_plan";

const TrainingPlanDetailPage = () => {
  const { id } = useParams();
  const { data: trainingPlan } = useTrainingPlanDetail(Number(id));
  const myRate = 5;
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
          <RateInfoWithMyRate
            rateInfo={trainingPlan.rating_info}
            myRate={myRate}
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
