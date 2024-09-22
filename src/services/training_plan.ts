import useSWR from "swr";

import { TrainingPlanFilter } from "../models/filter";
import {
  Pagination,
  PaginationApiResult,
  TrainingPlanDetailProps,
  TrainingPlanSummaryProps,
} from "../models/model";
import { fetcher } from "./request";

export const useTrainingPlans = (
  pagination: Pagination,
  filter?: TrainingPlanFilter
) => {
  const queryString = new URLSearchParams(filter).toString();
  const { data, error } = useSWR<PaginationApiResult<TrainingPlanSummaryProps>>(
    `/api/training_plan?page=${pagination.page}&page_size=${pagination.page_size}&${queryString}`,
    fetcher
  );

  return {
    data,
    loading: !error && !data,
    error,
  };
};

export const useTrainingPlanDetail = (training_plan_id: number) => {
  const { data, error } = useSWR<TrainingPlanDetailProps>(
    `/api/training_plan/${training_plan_id}`,
    fetcher
  );

  return {
    data,
    loading: !error && !data,
    error,
  };
};
