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
