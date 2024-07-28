import { Button, Card, Col, List, Row } from "antd";

import PageHeader from "../components/page-header";
import TrainingPlanBaseCourse from "../components/training-plan-base-course";
import TrainingPlanBaseCourseFilter from "../components/training-plan-base-course-filter";
import TrainingPlanDetailCard from "../components/training-plan-detail-card";
import { trainingPlanDetail } from "../models/mock";

const TrainingPlanDetailPage = () => {
  const trainingPlan = trainingPlanDetail;
  return (
    <>
      <PageHeader title={`${trainingPlan.name} 专业`}></PageHeader>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <TrainingPlanDetailCard
            trainingPlan={trainingPlan}
          ></TrainingPlanDetailCard>
          <Card title="筛选条件" extra={<Button>筛选</Button>}>
            <TrainingPlanBaseCourseFilter></TrainingPlanBaseCourseFilter>
          </Card>
        </Col>
        <Col span={16}>
          <List
            grid={{ gutter: 16, column: 2 }}
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
        </Col>
      </Row>
    </>
  );
};

export default TrainingPlanDetailPage;
