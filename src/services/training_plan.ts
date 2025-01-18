import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useSWR from "swr";

import toQueryString from "../libs/queryString";
import { ListOrder, Pagination, PaginationApiResult } from "../models/dto";
import { TrainingPlanFilterForQuery } from "../models/filter";
import {
  TrainingPlanDetailProps,
  TrainingPlanSummaryProps,
} from "../models/model";
import { fetcher } from "./request";

export const useTrainingPlans = (
  pagination: Pagination,
  filter?: TrainingPlanFilterForQuery,
  order?: ListOrder
) => {
  const listParams = toQueryString(pagination, order);
  const filterParams = new URLSearchParams(filter).toString();
  const { data, error } = useSWR<PaginationApiResult<TrainingPlanSummaryProps>>(
    `/api/training_plan?${listParams}&${filterParams}`,
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

export const useTrainingPlanFilter = () => {
  const { data, error } = useSWR("/api/training_plan/filter", fetcher);
  return { data, loading: !error && !data, error };
};

export const useTrainingPlanFilterForQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterForQuery, setFilterForQuery] =
    useState<TrainingPlanFilterForQuery>();
  const onFilterChange = (value: TrainingPlanFilterForQuery) => {
    if (value.departments) {
      searchParams.set("department", value.departments.join(","));
    }
    if (value.degrees) {
      searchParams.set("title", value.degrees.join(","));
    }
    if (value.entry_years) {
      searchParams.set("entry_year", value.entry_years.join(","));
    }
    if (value.search) {
      searchParams.set("q", value.search);
    }
    setSearchParams(searchParams);
  };

  const doFilter = () => {
    const filterForQuery: TrainingPlanFilterForQuery = {
      departments: searchParams.get("department")?.split(",") || [],
      degrees: searchParams.get("degree")?.split(",") || [],
      entry_years: searchParams.get("entry_year")?.split(",") || [],
      search: searchParams.get("q") || "",
    };
    setFilterForQuery(filterForQuery);
  };

  useEffect(() => {
    doFilter();
  }, []);
  return { filterForQuery, onFilterChange, doFilter };
};
