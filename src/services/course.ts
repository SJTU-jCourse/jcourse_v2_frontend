import useSWR from "swr";

import { CourseFilter } from "../models/filter";
import {
  BaseCourseProps,
  CourseDetailProps,
  CourseSummaryProps,
  Pagination,
  PaginationApiResult,
} from "../models/model";
import { fetcher } from "./request";

export const useCourses = (pagination: Pagination, filter?: CourseFilter) => {
  const queryString = new URLSearchParams(filter).toString();
  const { data, error } = useSWR<PaginationApiResult<CourseSummaryProps>>(
    `/api/course?page=${pagination.page}&page_size=${pagination.page_size}&${queryString}`,
    fetcher
  );
  return {
    data,
    loading: !error && !data,
    error,
  };
};

export const useCourseDetail = (course_id: number) => {
  const { data, error } = useSWR<CourseDetailProps>(
    `/api/course/${course_id}`,
    fetcher
  );

  return {
    data,
    loading: !error && !data,
    error,
  };
};

export const useBaseCourseDetail = (code: string) => {
  const { data, error } = useSWR<BaseCourseProps>(
    `/api/base_course/${code}`,
    fetcher
  );

  return {
    data,
    loading: !error && !data,
    error,
  };
};
