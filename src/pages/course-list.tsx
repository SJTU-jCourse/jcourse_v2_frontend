import { Button, Card, Col, Input, List, Row } from "antd";

import CourseFilterView from "../components/course-filter";
import CourseItem from "../components/course-item";
import PageHeader from "../components/page-header";
import RatingOrderSegment from "../components/rating-order-segment";
import useListOrder from "../libs/useListOrder";
import usePagination from "../libs/usePagination";
import { CourseFilterForQuery } from "../models/filter";
import {
  useCourseFilter,
  useCourseFilterForQuery,
  useCourses,
} from "../services/course";

const CourseListPage = () => {
  const { pagination, handlePageChange } = usePagination();
  const { filterForQuery, onFilterChange, doFilter } =
    useCourseFilterForQuery();
  const { listOrder, handleOrderByChange } = useListOrder();
  const { data: filter } = useCourseFilter();
  const { data, loading } = useCourses(pagination, filterForQuery, listOrder);

  return (
    <>
      <PageHeader
        title="课程"
        subTitle={`共有${data ? data.total : 0}个课程`}
      ></PageHeader>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8}>
          <Card title="筛选" extra={<Button onClick={doFilter}>筛选</Button>}>
            <CourseFilterView
              filter={filter}
              onChange={(value: CourseFilterForQuery) => {
                onFilterChange(value);
              }}
            ></CourseFilterView>
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
              <RatingOrderSegment
                defaultOrder={listOrder.order}
                onChange={handleOrderByChange}
              ></RatingOrderSegment>
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
