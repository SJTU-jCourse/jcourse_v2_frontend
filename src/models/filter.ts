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

export type TrainingPlanFilterForQuery = {
  departments?: string[];
  degrees?: string[];
  entry_years?: string[];
};

export type TeacherFilterForQuery = {
  departments?: string[];
  titles?: string[];
};
