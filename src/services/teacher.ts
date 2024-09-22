import useSWR from "swr";

import { TeacherFilter } from "../models/filter";
import {
  Pagination,
  PaginationApiResult,
  TeacherDetailProps,
  TeacherSummaryProps,
} from "../models/model";
import { fetcher } from "./request";

export const useTeachers = (pagination: Pagination, filter?: TeacherFilter) => {
  const queryString = new URLSearchParams(filter).toString();
  const { data, error } = useSWR<PaginationApiResult<TeacherSummaryProps>>(
    `/api/teacher?page=${pagination.page}&page_size=${pagination.page_size}&${queryString}`,
    fetcher
  );

  return {
    data,
    loading: !error && !data,
    error,
  };
};

export const useTeacherDetail = (teacher_id: number) => {
  const { data, error } = useSWR<TeacherDetailProps>(
    `/api/teacher/${teacher_id}`,
    fetcher
  );

  return {
    data,
    loading: !error && !data,
    error,
  };
};
