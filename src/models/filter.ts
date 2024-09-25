export type CourseFilterForQuery = {
  code?: string;
  departments?: string[];
  credits?: string[];
  semesters?: string[];
  categories?: string[];
};

export type ReviewFilterForQuery = {
  user_id?: string;
  course_id?: string;
};

export type TrainingPlanFilterForQuery = {};

export type TeacherFilterForQuery = {
  department: string;
};
