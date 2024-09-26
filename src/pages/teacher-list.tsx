import { Button, Card, Col, Input, List, Row, Segmented } from "antd";

import PageHeader from "../components/page-header";
import TeacherFilterView from "../components/teacher-filter";
import TeacherItem from "../components/teacher-item";
import usePagination from "../libs/usePagination";
import {
  useTeacherFilter,
  useTeacherFilterForQuery,
  useTeachers,
} from "../services/teacher";

const TeacherListPage = () => {
  const { pagination, handlePageChange } = usePagination();
  const { filterForQuery, onFilterChange, doFilter } =
    useTeacherFilterForQuery();
  const { data: filter } = useTeacherFilter();
  const { data, loading } = useTeachers(pagination, filterForQuery);

  return (
    <>
      <PageHeader
        title="教师"
        subTitle={`共有${data ? data.total : 0}个教师`}
      ></PageHeader>
      <Row gutter={[16, 16]}>
        <Col sm={8} xs={24}>
          <Card title="筛选" extra={<Button onClick={doFilter}>筛选</Button>}>
            <TeacherFilterView
              filter={filter}
              onChange={onFilterChange}
            ></TeacherFilterView>
          </Card>
        </Col>

        <Col sm={16} xs={24}>
          <Row gutter={[16, 16]}>
            <Col flex="auto">
              <Input.Search
                placeholder="教师名称/拼音"
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
                  <TeacherItem teacher={item}></TeacherItem>
                </List.Item>
              )}
            ></List>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default TeacherListPage;
