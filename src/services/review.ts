import useSWR from "swr";

import { Pagination, PaginationApiResult } from "../models/dto";
import { ReviewFilter } from "../models/filter";
import { ReviewProps } from "../models/model";
import { fetcher } from "./request";

export const useReviews = (pagination?: Pagination, filter?: ReviewFilter) => {
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
