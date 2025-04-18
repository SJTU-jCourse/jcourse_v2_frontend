import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useSWR from "swr";

import toQueryString from "@/libs/queryString";
import { ListOrder, Pagination, PaginationApiResult } from "@/models/dto";
import { TeacherFilterForQuery } from "@/models/filter";
import { TeacherDetailProps, TeacherSummaryProps } from "@/models/model";
import { fetcher } from "@/services/request";

export const useTeachers = (
  pagination: Pagination,
  filter?: TeacherFilterForQuery,
  order?: ListOrder
) => {
  const listParams = toQueryString(pagination, order);
  // @ts-expect-error no need to check
  const filterParams = new URLSearchParams(filter).toString();
  const { data, error } = useSWR<PaginationApiResult<TeacherSummaryProps>>(
    `/api/teacher?${listParams}&${filterParams}`,
    fetcher
  );

  return {
    data,
    loading: !error && !data,
    error,
  };
};

export const useTeacherDetail = (teacher_id: number) => {
  const { data, error } = useSWR<TeacherDetailProps>(
    `/api/teacher/${teacher_id}`,
    fetcher
  );

  return {
    data,
    loading: !error && !data,
    error,
  };
};

export const useTeacherFilter = () => {
  const { data, error } = useSWR("/api/teacher/filter", fetcher);
  return { data, loading: !error && !data, error };
};

export const useTeacherFilterForQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterForQuery, setFilterForQuery] = useState<TeacherFilterForQuery>();
  const onFilterChange = (value: TeacherFilterForQuery) => {
    if (value.departments) {
      searchParams.set("department", value.departments.join(","));
    }
    if (value.titles) {
      searchParams.set("title", value.titles.join(","));
    }
    if (value.search) {
      searchParams.set("q", value.search);
    }

    setSearchParams(searchParams);
  };

  const doFilter = () => {
    const filterForQuery: TeacherFilterForQuery = {
      departments: searchParams.get("department")?.split(",") || [],
      titles: searchParams.get("title")?.split(",") || [],
      search: searchParams.get("q") || "",
    };
    setFilterForQuery(filterForQuery);
  };

  useEffect(() => {
    doFilter();
  }, []);
  return { filterForQuery, onFilterChange, doFilter };
};
