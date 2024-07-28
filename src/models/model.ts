export type BaseCourseProps = {
  id: number;
  code: string;
  name: string;
  credit: number;
};

export type TeacherListItemProps = {
  id: number;
  code: string;
  name: string;
  title: string;
  department: string;
  avatar: string;

  rate_info: RateInfoProps;
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

  courses: CourseListItemProps[];
  rate_info: RateInfoDetailProps;
};

export type CourseListItemProps = {
  id: number;
  code: string;
  name: string;
  credit: number;
  main_teacher: TeacherListItemProps;
  department: string;
  categories: string[];
  rate_info: RateInfoProps;
};

export type RateInfoProps = {
  count: number;
  avg: number;
};

export type RateDistItemProps = {
  rate: number;
  count: number;
};

export type RateInfoDetailProps = {
  count: number;
  avg: number;
  rate_dist: RateDistItemProps[];
};

export type CourseDetailProps = {
  id: number;
  code: string;
  name: string;
  credit: number;
  main_teacher: TeacherListItemProps;
  offered_semesters: string[];

  department: string;
  categories: string[];
  rate_info: RateInfoDetailProps;
};

export type TrainingPlanListItemProps = {
  id: number;
  name: string;
  department: string;
  entry_year: string;
  degree: string;
};

export type TrainingPlanBaseCourseProps = {
  base_course: BaseCourseProps;
  semester: string;
  category: string;
};

export type TrainingPlanDetailProps = {
  id: number;
  name: string;
  department: string;
  entry_year: string;
  degree: string;
  course_count: number;
  minimal_credits: number;
  courses: TrainingPlanBaseCourseProps[];
};

export type UserInReviewProps = {
  id: number;
  username: string;
  avatar: string;
};

export type CourseInReviewProps = {
  id: number;
  code: string;
  name: string;
  main_teacher: TeacherListItemProps;
};

export type ReviewReactionProps = {
  name: string;
  count: number;
};

export type ReviewProps = {
  id: number;
  user: UserInReviewProps;
  course: CourseInReviewProps;
  comment: string;
  rate: number;
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
  username: string;
  avatar: string;
  bio: string;
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

export type UserSummary = {
  review_count: number;
  like_receive: number;
  tip_receive: number;
  following_course_count: number;
};
