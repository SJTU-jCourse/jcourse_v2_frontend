import { Card, Col, Input, List, Row } from "antd";

import PageHeader from "../components/page-header";
import TrainingPlanFilter from "../components/training-plan-filter";
import TrainingPlanItem from "../components/training-plan-item";
import { TrainingPlanListItemProps } from "../models/model";

const TrainingPlanListPage = () => {
  const trainingPlanList: TrainingPlanListItemProps[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ].map(() => {
    return {
      id: 1,
      name: "机械工程（钱学森班）",
      department: "机械与动力工程学院",
      entry_year: "2024",
      degree: "学士",
    };
  });
  return (
    <>
      <PageHeader
        title="培养计划"
        subTitle={`共有${trainingPlanList.length}个培养计划`}
      ></PageHeader>
      <Row gutter={24}>
        <Col span={8}>
          <Card>
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
              dataSource={trainingPlanList}
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
