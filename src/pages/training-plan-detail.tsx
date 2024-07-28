import { Col, Divider, List, Row } from "antd";

import PageHeader from "../components/page-header";
import RateInfoWithMyRate from "../components/rate-info-my-rate";
import TrainingPlanBaseCourse from "../components/training-plan-base-course";
import TrainingPlanBaseCourseFilter from "../components/training-plan-base-course-filter";
import TrainingPlanDetailCard from "../components/training-plan-detail-card";
import { trainingPlanDetail } from "../models/mock";

const TrainingPlanDetailPage = () => {
  const trainingPlan = trainingPlanDetail;
  const myRate = 5;
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
            rateInfo={trainingPlan.rate_info}
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
            <List.Item>
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
