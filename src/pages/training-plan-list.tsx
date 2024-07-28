import { Button, Card, Col, Input, List, Row } from "antd";

import PageHeader from "../components/page-header";
import TrainingPlanFilter from "../components/training-plan-filter";
import TrainingPlanItem from "../components/training-plan-item";
import { trainingPlanList } from "../models/mock";

const TrainingPlanListPage = () => {
  const trainingPlans = trainingPlanList;
  return (
    <>
      <PageHeader
        title="培养计划"
        subTitle={`共有${trainingPlans.length}个培养计划`}
      ></PageHeader>
      <Row gutter={24}>
        <Col span={8}>
          <Card title="筛选" extra={<Button>筛选</Button>}>
            <TrainingPlanFilter></TrainingPlanFilter>
          </Card>
        </Col>

        <Col span={16}>
          <Row>
            <Input.Search
              placeholder="专业名称"
              style={{ marginBottom: 16 }}
            ></Input.Search>
          </Row>
          <Row>
            <List
              pagination={{ align: "center" }}
              grid={{ gutter: 16, column: 2 }}
              dataSource={trainingPlans}
              renderItem={(item) => (
                <List.Item>
                  <TrainingPlanItem trainingPlan={item}></TrainingPlanItem>
                </List.Item>
              )}
            ></List>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default TrainingPlanListPage;
