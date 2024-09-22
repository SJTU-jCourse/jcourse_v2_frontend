import { Button, Card, Col, Input, List, Row, Segmented } from "antd";

import PageHeader from "../components/page-header";
import TrainingPlanFilter from "../components/training-plan-filter";
import TrainingPlanItem from "../components/training-plan-item";
import usePagination from "../hooks/usePagination";
import { useTrainingPlans } from "../services/training_plan";

const TrainingPlanListPage = () => {
  const { pagination, handlePageChange } = usePagination();
  const { data } = useTrainingPlans(pagination);
  return (
    <>
      <PageHeader
        title="培养计划"
        subTitle={`共有${data ? data.total : 0}个培养计划`}
      ></PageHeader>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8}>
          <Card title="筛选" extra={<Button>筛选</Button>}>
            <TrainingPlanFilter></TrainingPlanFilter>
          </Card>
        </Col>

        <Col xs={24} sm={16}>
          <Row gutter={[16, 16]}>
            <Col flex="auto">
              <Input.Search
                placeholder="专业名称"
                style={{ marginBottom: 16 }}
              ></Input.Search>
            </Col>
            <Col>
              <Segmented options={["最多点评", "最高评分"]}></Segmented>
            </Col>
          </Row>
          <Row>
            <List
              pagination={{
                align: "center",
                onChange: handlePageChange,
                total: data?.total,
                current: pagination?.page,
                pageSize: pagination?.page_size,
                hideOnSinglePage: true,
              }}
              grid={{ gutter: 16, xs: 1, sm: 1, column: 2 }}
              dataSource={data?.data}
              renderItem={(item) => (
                <List.Item key={item.id}>
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
