import useSWR from "swr";

import {
  PaginationApiResult,
  TrainingPlanDetailProps,
  TrainingPlanSummaryProps,
} from "../models/model";
import { fetcher } from "./request";

export const useTrainingPlans = () => {
  const { data, error } = useSWR<PaginationApiResult<TrainingPlanSummaryProps>>(
    "/api/training_plan",
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
