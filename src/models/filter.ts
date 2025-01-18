export type CourseFilterForQuery = {
  code?: string;
  departments?: string[];
  credits?: string[];
  semesters?: string[];
  categories?: string[];
  search?: string;
};

export type ReviewFilterForQuery = {
  user_id?: string;
  course_id?: string;
  rating?: string;
  semester?: string;
  search?: string;
};

export type TrainingPlanFilterForQuery = {
  departments?: string[];
  degrees?: string[];
  entry_years?: string[];
  search?: string;
};

export type TeacherFilterForQuery = {
  departments?: string[];
  titles?: string[];
  search?: string;
};
