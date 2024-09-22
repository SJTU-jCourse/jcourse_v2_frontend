import { useSearchParams } from "react-router-dom";

import { Pagination } from "../models/dto";

function usePagination(defaultPage = 1, defaultPageSize = 10) {
  const [searchParams, setSearchParams] = useSearchParams();

  const pagination: Pagination = {
    page: Number(searchParams.get("page")) || defaultPage,
    page_size: Number(searchParams.get("page_size")) || defaultPageSize,
  };

  const handlePageChange = (newPage: number, newPageSize: number) => {
    searchParams.set("page", String(newPage));
    searchParams.set("page_size", String(newPageSize));
    setSearchParams(searchParams);
  };

  return {
    pagination,
    handlePageChange,
  };
}

export default usePagination;
