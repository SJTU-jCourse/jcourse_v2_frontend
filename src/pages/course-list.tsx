import { Button, Card, Col, Input, List, Row, Segmented } from "antd";

import CourseFullFilter from "../components/course-full-filter";
import CourseItem from "../components/course-item";
import PageHeader from "../components/page-header";
import usePagination from "../hooks/usePagination";
import { useCourses } from "../services/course";

const CourseListPage = () => {
  const { pagination, handlePageChange } = usePagination();
  const { data, loading } = useCourses(pagination);
  return (
    <>
      <PageHeader
        title="课程"
        subTitle={`共有${data ? data.total : 0}个课程`}
      ></PageHeader>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8}>
          <Card title="筛选" extra={<Button>筛选</Button>}>
            <CourseFullFilter></CourseFullFilter>
          </Card>
        </Col>

        <Col xs={24} sm={16}>
          <Row gutter={[16, 16]}>
            <Col flex="auto">
              <Input.Search
                placeholder="课程名称/课程号"
                style={{ marginBottom: 16 }}
              ></Input.Search>
            </Col>
            <Col>
              <Segmented options={["最多点评", "最高评分"]}></Segmented>
            </Col>
          </Row>
          <Row>
            <List
              loading={loading}
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
                  <CourseItem course={item}></CourseItem>
                </List.Item>
              )}
            ></List>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default CourseListPage;
