import useSWR from "swr";

import {
  PaginationApiResult,
  TeacherDetailProps,
  TeacherSummaryProps,
} from "../models/model";
import { fetcher } from "./request";

export const useTeachers = () => {
  const { data, error } = useSWR<PaginationApiResult<TeacherSummaryProps>>(
    "/api/teacher",
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
