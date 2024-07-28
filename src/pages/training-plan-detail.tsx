import { Divider, List } from "antd";

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
      <TrainingPlanDetailCard
        trainingPlan={trainingPlan}
      ></TrainingPlanDetailCard>
      <Divider></Divider>
      <TrainingPlanBaseCourseFilter></TrainingPlanBaseCourseFilter>
      <Divider></Divider>
      <List
        grid={{ gutter: 16, column: 3 }}
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
