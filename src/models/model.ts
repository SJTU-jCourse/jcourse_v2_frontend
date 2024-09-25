export type BaseCourseProps = {
  id: number;
  code: string;
  name: string;
  credit: number;
};

export type TeacherSummaryProps = {
  id: number;
  code: string;
  name: string;
  title: string;
  department: string;
  avatar: string;

  rating_info: RatingInfoProps;
};

export type TeacherDetailProps = {
  id: number;
  code: string;
  name: string;
  title: string;
  department: string;
  avatar: string;
  email: string;
  profile_url: string;

  courses: CourseSummaryProps[];
  rating_info: RatingInfoProps;
};

export type CourseSummaryProps = {
  id: number;
  code: string;
  name: string;
  credit: number;
  main_teacher: TeacherSummaryProps;
  department: string;
  categories: string[];
  rating_info: RatingInfoProps;
};

export type RateDistItemProps = {
  rating: number;
  count: number;
};

export type RatingInfoProps = {
  count: number;
  average: number;
  rating_dist: RateDistItemProps[];
};

export type CourseDetailProps = {
  id: number;
  code: string;
  name: string;
  credit: number;
  main_teacher: TeacherSummaryProps;
  offered_courses: OfferedCourseProps[];

  department: string;
  categories: string[];
  rating_info: RatingInfoProps;
};

export type OfferedCourseProps = {
  id: number;
  semester: string;
  grade: string[];
  language: string;
  teacher_group: TeacherSummaryProps[];
};

export type TrainingPlanSummaryProps = {
  id: number;
  name: string;
  department: string;
  entry_year: string;
  degree: string;

  rating_info: RatingInfoProps;
};

export type TrainingPlanBaseCourseProps = {
  base_course: BaseCourseProps;
  suggest_semester: string;
  category: string;
};

export type TrainingPlanDetailProps = {
  id: number;
  name: string;
  department: string;
  entry_year: string;
  degree: string;
  min_credits: number;
  courses: TrainingPlanBaseCourseProps[];

  rating_info: RatingInfoProps;
};

export type UserMinimalProps = {
  id: number;
  username: string;
  avatar: string;
};

export type CourseMinimalProps = {
  id: number;
  code: string;
  name: string;
  main_teacher: TeacherSummaryProps;
};

export type ReviewReactionProps = {
  name: string;
  count: number;
};

export type ReviewProps = {
  id: number;
  user: UserMinimalProps;
  course: CourseMinimalProps;
  comment: string;
  rating: number;
  semester: string;
  created_at: number;
  updated_at: number | null;
  is_anonymous: boolean;

  likes: number;
  reactions: ReviewReactionProps[];
  replies: number;
};

export type UserDetailProps = {
  id: number;
  email: string;
  type: string;
  role: string;
  username: string;
  avatar: string;
  bio: string;
  grade: string;
  department: string;
  major: string;
};

export type UserPointDetailItemProps = {
  value: number;
  description: string | null;
  time: string;
};

export type UserPointProps = {
  total: number;
  detail: UserPointDetailItemProps[];
};

export type UserActivityProps = {
  review_count: number;
  like_receive: number;
  tip_receive: number;
  following_course_count: number;
};

export type ReviewReplyItemProps = {
  id: number;
  user: UserMinimalProps;
  reply_user: UserMinimalProps | null;
  comment: string;
  created_at: number;
  review_id: number;
  reply_to: number | null;
};

export type SettingProps = {
  key: string;
  value: string | number | boolean;
};

export type FilterItem = {
  value: string;
  count: number;
};

export type CourseFilter = {
  departments: FilterItem[];
  categories: FilterItem[];
  credits: FilterItem[];
  semesters: FilterItem[];
};
