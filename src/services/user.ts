import useSWR from "swr";

import { PaginationApiResult, UserDetailProps } from "../models/model";
import { fetcher } from "./request";

export const useUsers = () => {
  const { data, error } = useSWR<PaginationApiResult<UserDetailProps>>(
    "/api/user",
    fetcher
  );

  return {
    users: data,
    loading: !error && !data,
    error,
  };
};

export const useCourseDetail = (user_id: number) => {
  const { data, error } = useSWR<UserDetailProps>(
    `/api/user/${user_id}`,
    fetcher
  );

  return {
    data,
    loading: !error && !data,
    error,
  };
};
