import useSWR from "swr";

import { ReviewFilter } from "../models/filter";
import { Pagination, PaginationApiResult, ReviewProps } from "../models/model";
import { fetcher } from "./request";

export const useReviews = (pagination: Pagination, filter?: ReviewFilter) => {
  const queryString = new URLSearchParams(filter).toString();
  const { data, error } = useSWR<PaginationApiResult<ReviewProps>>(
    `/api/review?page=${pagination.page}&page_size=${pagination.page_size}&${queryString}`,
    fetcher
  );

  return {
    data,
    loading: !error && !data,
    error,
  };
};
