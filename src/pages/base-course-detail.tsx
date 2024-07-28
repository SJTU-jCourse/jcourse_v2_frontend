import { Card, List } from "antd";

import CourseItem from "../components/course-item";
import CourseSimpleFilter from "../components/course-simple-filter";
import PageHeader from "../components/page-header";
import { BaseCourseProps, TeacherDetailProps } from "../models/model";

const BaseCourseDetailPage = () => {
  const baseCourse: BaseCourseProps = {
    id: 1,
    code: "EE0502",
    name: "电路实验",
    credit: 3.5,
  };
  const teacher: TeacherDetailProps = {
    id: 0,
    code: "12345",
    name: "张峰",
    title: "教授",
    department: "电子信息与电气工程学院",
    avatar: "",
    courses: [],
    email: "izf@sjtu.edu.cn",
    profile_url: "",
  };
  const courses = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
    return {
      id: 1,
      code: "EE0502",
      name: "电路实验",
      credit: 3.5,
      main_teacher: teacher,
      categories: ["必修", "工程科学与技术"],
      department: "电子信息与电气工程学院",
      rate_info: {
        avg: 1.0,
        count: 10,
      },
    };
  });
  return (
    <>
      <PageHeader title={`${baseCourse.code} ${baseCourse.name}`}></PageHeader>
      <Card>
        <CourseSimpleFilter></CourseSimpleFilter>
      </Card>
      <Card>
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
      </Card>
    </>
  );
};

export default BaseCourseDetailPage;
