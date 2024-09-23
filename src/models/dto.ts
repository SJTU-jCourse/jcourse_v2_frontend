export type PaginationApiResult<Type> = {
  total: number;
  page: number;
  page_size: number;
  data: Type[];
};

export type Pagination = {
  page: number;
  page_size: number;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  email: string;
  password: string;
  code: string;
};

export type UserProfileRequest = {
  username: string;
  avatar: string;
  type: string;
  department: string;
  major: string;
  grade: string;
  bio: string;
};

export type ReviewRequest = {
  rating: number;
  grade: string;
  comment: string;
  is_anonymous: boolean;
  course_id: number;
}