import useSWR from "swr";

import { Pagination, PaginationApiResult, ReviewRequest } from "../models/dto";
import { ReviewFilterForQuery } from "../models/filter";
import { ReviewProps } from "../models/model";
import { fetcher, request } from "./request";

export const useReviews = (pagination?: Pagination, filter?: ReviewFilterForQuery) => {
  const paginationString = pagination
    ? `page=${pagination?.page}&page_size=${pagination?.page_size}`
    : "";
  const queryString = new URLSearchParams(filter).toString();
  const { data, error } = useSWR<PaginationApiResult<ReviewProps>>(
    `/api/review?${paginationString}&${queryString}`,
    fetcher
  );

  return {
    data,
    loading: !error && !data,
    error,
  };
};

export const writeReview = async (r: ReviewRequest) => {
  const resp = await request("/api/review", { method: "post", data: { ...r } });
  return resp.data
};
