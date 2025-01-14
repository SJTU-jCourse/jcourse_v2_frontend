import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useSWR from "swr";

import toQueryString from "../libs/queryString";
import { ListOrder, Pagination, PaginationApiResult } from "../models/dto";
import { CourseFilterForQuery } from "../models/filter";
import {
  BaseCourseProps,
  CourseDetailProps,
  CourseSummaryProps,
} from "../models/model";
import { fetcher } from "./request";

export const useCourses = (
  pagination: Pagination,
  filter?: CourseFilterForQuery,
  order?: ListOrder
) => {
  const listParams = toQueryString(pagination, order);
  const filterParams = new URLSearchParams(filter).toString();
  const { data, error } = useSWR<PaginationApiResult<CourseSummaryProps>>(
    `/api/course?${listParams}&${filterParams}`,
    fetcher
  );
  return {
    data,
    loading: !error && !data,
    error,
  };
};

export const useCourseDetail = (course_id: string) => {
  const { data, error } = useSWR<CourseDetailProps>(
    course_id ? `/api/course/${course_id}` : null,
    fetcher
  );

  return {
    data,
    loading: !error && !data,
    error,
  };
};

export const useBaseCourseDetail = (code: string) => {
  const { data, error } = useSWR<BaseCourseProps>(
    `/api/base_course/${code}`,
    fetcher
  );

  return {
    data,
    loading: !error && !data,
    error,
  };
};

export const useCourseFilter = () => {
  const { data, error } = useSWR("/api/course/filter", fetcher);
  return { data, loading: !error && !data, error };
};

export const useCourseFilterForQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterForQuery, setFilterForQuery] = useState<CourseFilterForQuery>();
  const onFilterChange = (value: CourseFilterForQuery) => {
    if (value.categories) {
      searchParams.set("categories", value.categories.join(","));
    }
    if (value.departments) {
      searchParams.set("departments", value.departments.join(","));
    }
    if (value.semesters) {
      searchParams.set("semesters", value.semesters.join(","));
    }
    if (value.credits) {
      searchParams.set("credits", value.credits.join(","));
    }
    setSearchParams(searchParams);
  };

  const doFilter = () => {
    const filterForQuery: CourseFilterForQuery = {
      departments: searchParams.get("departments")?.split(",") || [],
      categories: searchParams.get("categories")?.split(",") || [],
      semesters: searchParams.get("semesters")?.split(",") || [],
      credits: searchParams.get("credits")?.split(",") || [],
    };
    setFilterForQuery(filterForQuery);
  };

  useEffect(() => {
    doFilter();
  }, []);
  return { filterForQuery, onFilterChange, doFilter };
};
