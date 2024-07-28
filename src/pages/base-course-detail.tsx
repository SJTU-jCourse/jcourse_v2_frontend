import { Card, Divider, List } from "antd";

import CourseItem from "../components/course-item";
import CourseSimpleFilter from "../components/course-simple-filter";
import PageHeader from "../components/page-header";
import { baseCourseDetail, courseList } from "../models/mock";
import { BaseCourseProps } from "../models/model";

const BaseCourseDetailPage = () => {
  const baseCourse: BaseCourseProps = baseCourseDetail;
  const courses = courseList;
  return (
    <>
      <PageHeader title={`${baseCourse.code} ${baseCourse.name}`}></PageHeader>

      <CourseSimpleFilter></CourseSimpleFilter>

      <Divider></Divider>

      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={courses}
        renderItem={(item) => {
          return (
            <List.Item>
              <CourseItem course={item}></CourseItem>
            </List.Item>
          );
        }}
      ></List>
    </>
  );
};

export default BaseCourseDetailPage;
