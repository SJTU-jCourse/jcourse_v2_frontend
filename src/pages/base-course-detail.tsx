import { Divider, List } from "antd";
import { useParams } from "react-router-dom";

import CourseItem from "@/components/course-item";
import CourseSimpleFilter from "@/components/course-simple-filter";
import PageHeader from "@/components/page-header";
import usePagination from "@/libs/usePagination";
import { useBaseCourseDetail, useCourses } from "@/services/course";

const BaseCourseDetailPage = () => {
  const { code } = useParams();
  const { data: baseCourse } = useBaseCourseDetail(String(code));
  const { pagination, handlePageChange } = usePagination();
  const { data: courses } = useCourses(pagination, { code: code || "" });
  return (
    <>
      <PageHeader
        title={`${baseCourse?.code} ${baseCourse?.name}`}
      ></PageHeader>

      <CourseSimpleFilter></CourseSimpleFilter>

      <Divider></Divider>

      <List
        pagination={{
          align: "center",
          onChange: handlePageChange,
          total: courses?.total,
          current: pagination?.page,
          pageSize: pagination?.page_size,
          hideOnSinglePage: true,
        }}
        grid={{ gutter: 16, xs: 1, sm: 2, column: 3 }}
        dataSource={courses?.data}
        renderItem={(item) => {
          return (
            <List.Item key={item.id}>
              <CourseItem course={item}></CourseItem>
            </List.Item>
          );
        }}
      ></List>
    </>
  );
};

export default BaseCourseDetailPage;
