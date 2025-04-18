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
  my_rating: number;
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

  related_courses: RelatedCourseProps;
};

export type RelatedCourseProps = {
  courses_under_same_teacher: CourseSummaryProps[];
  courses_with_other_teachers: CourseSummaryProps[];
}

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
  total_reactions: ReviewReactionItemProps[];
  my_reactions: Map<string, number>; // reaction -> id
};

export type ReviewReactionItemProps = {
  reaction: string;
  count: number;
}

export type ReviewProps = {
  id: number;
  user: UserMinimalProps;
  course: CourseMinimalProps;
  comment: string;
  rating: number;
  grade: string;
  semester: string;
  created_at: number;
  updated_at: number | null;
  is_anonymous: boolean;

  reaction: ReviewReactionProps;
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
  current_point: number;
  total: number;
  data: UserPointDetailItemProps[];
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

export type TeacherFilter = {
  departments: FilterItem[];
  titles: FilterItem[];
};

export type TrainingPlanFilter = {
  departments: FilterItem[];
  entry_years: FilterItem[];
  degrees: FilterItem[];
};
