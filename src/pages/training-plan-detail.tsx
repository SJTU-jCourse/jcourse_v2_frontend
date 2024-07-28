import { Card, Col, List, Row } from "antd";

import PageHeader from "../components/page-header";
import TrainingPlanBaseCourse from "../components/training-plan-base-course";
import TrainingPlanBaseCourseFilter from "../components/training-plan-base-course-filter";
import TrainingPlanDetailCard from "../components/training-plan-detail-card";
import { TrainingPlanDetailProps } from "../models/model";

const TrainingPlanDetailPage = () => {
  const trainingPlan: TrainingPlanDetailProps = {
    id: 0,
    name: "机械工程（钱学森班）",
    department: "机械与动力工程学院",
    entry_year: "2024",
    degree: "本科",
    course_count: 93,
    minimal_credits: 183,
    courses: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
      return {
        base_course: {
          id: 1,
          code: "EE0502",
          name: "电路实验",
          credit: 1.5,
        },
        semester: "2024-2025-1",
        category: "必修",
      };
    }),
  };

  return (
    <>
      <PageHeader title={`${trainingPlan.name} 专业`}></PageHeader>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <TrainingPlanDetailCard
            trainingPlan={trainingPlan}
          ></TrainingPlanDetailCard>
          <Card title="筛选条件">
            <TrainingPlanBaseCourseFilter></TrainingPlanBaseCourseFilter>
          </Card>
        </Col>
        <Col span={16}>
          <Card title="所有课程">
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
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TrainingPlanDetailPage;
