import {
  BaseCourseProps,
  CourseDetailProps,
  CourseSummaryProps,
  RatingInfoProps,
  ReviewProps,
  ReviewReplyItemProps,
  TeacherDetailProps,
  TeacherSummaryProps,
  TrainingPlanBaseCourseProps,
  TrainingPlanDetailProps,
  TrainingPlanSummaryProps,
  UserDetailProps,
  UserPointProps,
  UserActivityProps,
} from "./model";

export const rateInfo: RatingInfoProps = {
  average: 1.0,
  count: 12,
  rating_dist: [
    {
      rating: 1,
      count: 1,
    },
    {
      rating: 2,
      count: 2,
    },
    {
      rating: 3,
      count: 3,
    },
    {
      rating: 4,
      count: 5,
    },
    {
      rating: 5,
      count: 1,
    },
  ],
};

export const teacherDetail: TeacherDetailProps = {
  id: 0,
  code: "12345",
  name: "张峰",
  title: "教授",
  department: "电子信息与电气工程学院",
  avatar: "",
  courses: [],
  email: "izf@sjtu.edu.cn",
  profile_url: "",
  rating_info: rateInfo,
};

export const teacherListItem: TeacherSummaryProps = {
  code: "12345",
  name: "张峰",
  id: 1111,
  department: "电子信息与电气工程学院",
  title: "教授",
  avatar: "",
  rating_info: rateInfo,
};

export const teacherList: TeacherSummaryProps[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
].map(() => {
  return teacherListItem;
});

export const courseDetail: CourseDetailProps = {
  id: 1,
  code: "EE0502",
  name: "电路实验",
  credit: 3.5,
  main_teacher: teacherListItem,
  categories: ["必修", "工程科学与技术"],
  department: "电子信息与电气工程学院",
  rating_info: rateInfo,
  offered_courses: []
};

export const courseListItem: CourseSummaryProps = {
  id: 1,
  code: "EE0502",
  name: "电路实验",
  credit: 3.5,
  main_teacher: teacherDetail,
  categories: ["必修", "工程科学与技术"],
  department: "电子信息与电气工程学院",
  rating_info: {
    average: 1.0,
    count: 10,
    rating_dist: [],
  },
};

export const courseList: CourseSummaryProps[] = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
  () => {
    return courseListItem;
  }
);

teacherDetail.courses = courseList;

export const baseCourseDetail: BaseCourseProps = {
  id: 1,
  code: "EE0502",
  name: "电路实验",
  credit: 3.5,
};

export const userDetail: UserDetailProps = {
  id: 0,
  username: "傲娇系藤原千花",
  avatar: "",
  bio: "漫画《辉夜大小姐想让我告白～天才们的恋爱头脑战～》及其衍生作品的女主角",
};

export const trainingPlanListItem: TrainingPlanSummaryProps = {
  id: 1,
  name: "机械工程（钱学森班）",
  department: "机械与动力工程学院",
  entry_year: "2024",
  degree: "学士",
  rating_info: rateInfo,
};

export const trainingPlanList: TrainingPlanSummaryProps[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
].map(() => {
  return trainingPlanListItem;
});

export const trainingPlanBaseCourse: TrainingPlanBaseCourseProps = {
  base_course: baseCourseDetail,
  suggest_semester: "2024-2025-1",
  category: "必修",
};

export const trainingPlanDetail: TrainingPlanDetailProps = {
  id: 0,
  name: "机械工程（钱学森班）",
  department: "机械与动力工程学院",
  entry_year: "2024",
  degree: "本科",
  min_credits: 183,
  courses: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
    return trainingPlanBaseCourse;
  }),

  rating_info: rateInfo,
};

export const reviewListItem: ReviewProps = {
  id: 18666,
  user: userDetail,
  course: {
    id: 1,
    code: "EE0502",
    name: "电路实验",
    main_teacher: teacherListItem,
  },
  comment: "这里是点评正文",
  rating: 1,
  semester: "2024-2025-1",
  created_at: 1722065399,
  updated_at: 1722065399,
  is_anonymous: false,
  reactions: [],
  replies: 222,
  likes: 111,
};
export const reviewList: ReviewProps[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14,
].map(() => {
  return reviewListItem;
});

export const userPointDetail: UserPointProps = {
  total: 100,
  detail: [{ value: 10, time: "2020-07-01 11:00", description: "说明" }],
};

export const userActivityDetail: UserActivityProps = {
  review_count: 0,
  like_receive: 0,
  tip_receive: 0,
  following_course_count: 0,
};

export const reviewReplyListItem: ReviewReplyItemProps = {
  id: 1,
  user: userDetail,
  reply_user: userDetail,
  comment: "这里是回复正文",
  created_at: 1722065399,
  review_id: 0,
  reply_to: 1,
};

export const reviewReplyList: ReviewReplyItemProps[] = [1, 2, 3].map(() => {
  return reviewReplyListItem;
});
