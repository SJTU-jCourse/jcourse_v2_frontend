import useSWR from "swr";

import { PaginationApiResult, UserProfileRequest } from "../models/dto";
import { UserActivityProps, UserDetailProps } from "../models/model";
import { fetcher, request } from "./request";

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

export const useUserDetail = (user_id: number) => {
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

export const useUserActivity = (user_id: number) => {
  const { data, error } = useSWR<UserActivityProps>(
    `/api/user/${user_id}/activity`,
    fetcher
  );

  return {
    data,
    loading: !error && !data,
    error,
  };
};

export const updateUserProfile = async (
  user_id: number,
  r: UserProfileRequest
) => {
  const resp = await request(`/api/user/${user_id}/profile`, {
    method: "put",
    data: { ...r },
  });
  return resp.data;
};
