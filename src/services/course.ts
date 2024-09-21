import useSWR from "swr";

import {
  CourseDetailProps,
  CourseSummaryProps,
  PaginationApiResult,
} from "../models/model";
import { fetcher } from "./request";

export const useCourses = () => {
  const { data, error } = useSWR<PaginationApiResult<CourseSummaryProps>>(
    "/api/course",
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
