import useSWR from "swr";

import { PaginationApiResult, ReviewProps } from "../models/model";
import { fetcher } from "./request";

export const useReviews = () => {
  const { data, error } = useSWR<PaginationApiResult<ReviewProps>>(
    "/api/review",
    fetcher
  );

  return {
    data,
    loading: !error && !data,
    error,
  };
};
