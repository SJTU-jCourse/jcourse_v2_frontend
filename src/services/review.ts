import useSWR from "swr";

import toQueryString from "../libs/queryString";
import {
  ListOrder,
  Pagination,
  PaginationApiResult,
  ReviewRequest,
} from "../models/dto";
import { ReviewFilterForQuery } from "../models/filter";
import { ReviewProps } from "../models/model";
import { fetcher, request } from "./request";

export const useReviews = (
  pagination?: Pagination,
  filter?: ReviewFilterForQuery,
  order?: ListOrder
) => {
  const listParams = toQueryString(pagination, order);
  const filterParams = new URLSearchParams(filter).toString();
  const { data, error } = useSWR<PaginationApiResult<ReviewProps>>(
    `/api/review?${listParams}&${filterParams}`,
    fetcher
  );

  return {
    data,
    loading: !error && !data,
    error,
  };
};

export const writeReview = async (r: ReviewRequest) => {
  const resp = await request.post("/api/review", r);
  return resp.data;
};

export const updateReview = async (r: ReviewRequest) => {
  const resp = await request.put(`/api/review/${r.id}`, r);
  return resp.data;
};

export const getReviewDetail = (review_id: string) => {
  return fetcher(`/api/review/${review_id}`);
};
