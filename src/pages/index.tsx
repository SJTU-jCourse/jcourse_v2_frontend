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
  baseCourseDetail,
  courseListItem,
  rateInfo,
  reviewListItem,
  teacherListItem,
  trainingPlanListItem,
} from "../models/mock";

const IndexPage = () => {
  return (
    <Flex gap={20} vertical>
      <Flex wrap gap={20}>
        <BaseCourseItem baseCourse={baseCourseDetail}></BaseCourseItem>
        <CourseItem course={courseListItem}></CourseItem>
        <TeacherItem teacher={teacherListItem}></TeacherItem>
        <TrainingPlanItem
          trainingPlan={trainingPlanListItem}
        ></TrainingPlanItem>
        <ReviewItem review={reviewListItem} showCourse></ReviewItem>
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
          <RateInfoDetail rateInfo={rateInfo}></RateInfoDetail>
        </Card>
      </Flex>
    </Flex>
  );
};

export default IndexPage;
