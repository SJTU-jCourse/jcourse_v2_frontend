import { Card, Flex } from "antd";

import BaseCourseItem from "../components/base-course-item";
import CourseItem from "../components/course-item";
import RateInfoDetail from "../components/rate-info-detail";
import ReviewInCourseFilter from "../components/review-in-course-filter";
import ReviewItem from "../components/review-item";
import TeacherItem from "../components/teacher-item";
import TrainingPlanFilter from "../components/training-plan-filter";
import TrainingPlanItem from "../components/training-plan-item";
import {
  BaseCourseProps,
  CourseListItemProps,
  ReviewProps,
  TeacherListItemProps,
  TrainingPlanListItemProps,
} from "../models/model";

const baseCourse: BaseCourseProps = {
  id: 1,
  code: "EE0502",
  name: "电路实验",
  credit: 3.5,
};
const teacher: TeacherListItemProps = {
  code: "12345",
  name: "张峰",
  id: 1111,
  department: "电子信息与电气工程学院",
  title: "教授",
  avatar: "",
};
const course: CourseListItemProps = {
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

const trainingPlan: TrainingPlanListItemProps = {
  id: 1,
  name: "机械工程（钱学森班）",
  department: "机械与动力工程学院",
  entry_year: "2024",
  degree: "学士",
};

const review: ReviewProps = {
  id: 1,
  user: {
    id: 1,
    username: "傲娇系藤原千花",
    avatar: "",
  },
  course: {
    id: 1,
    code: "EE0502",
    name: "电路实验",
    main_teacher: {
      id: 111,
      code: "1111",
      name: "张峰",
      title: "教授",
      department: "电子信息与电气工程学院",
      avatar: "",
    },
  },
  comment: "这里是点评正文",
  rate: 1,
  semester: "2024-2025-1",
  created_at: 1722065399,
  updated_at: 1722065399,
  is_anonymous: false,
  reactions: [],
  replies: 22,
  likes: 11,
};

const IndexPage = () => {
  return (
    <Flex gap={20} vertical>
      <Flex wrap gap={20}>
        <BaseCourseItem baseCourse={baseCourse}></BaseCourseItem>
        <CourseItem course={course}> </CourseItem>
        <TeacherItem teacher={teacher}></TeacherItem>
        <TrainingPlanItem trainingPlan={trainingPlan}></TrainingPlanItem>
        <ReviewItem review={review} showCourse></ReviewItem>
      </Flex>
      <Flex wrap gap={20}>
        <Card>
          <ReviewInCourseFilter></ReviewInCourseFilter>
        </Card>
        <Card>
          <TrainingPlanFilter></TrainingPlanFilter>
        </Card>
      </Flex>
      <Flex wrap gap={20}>
        <Card>
          <RateInfoDetail
            rateInfo={{
              count: 10086,
              avg: 4.5,
              rate_dist: [
                { rate: 1, count: 100 },
                { rate: 2, count: 20 },
                { rate: 3, count: 50 },
                { rate: 4, count: 60 },
                { rate: 5, count: 70 },
              ],
            }}
          ></RateInfoDetail>
        </Card>
      </Flex>
    </Flex>
  );
};

export default IndexPage;
