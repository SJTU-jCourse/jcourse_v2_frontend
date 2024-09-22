export type CourseFilter = {
  code: string;
};

export type ReviewFilter = {
  user_id?: string;
  course_id?: string;
};

export type TrainingPlanFilter = {};

export type TeacherFilter = {
  department: string;
};
