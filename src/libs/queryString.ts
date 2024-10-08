import { ListOrder, Pagination } from "../models/dto";

const toQueryString = (pagination?: Pagination, order?: ListOrder): string => {
  const searchParams = new URLSearchParams();

  if (pagination) {
    searchParams.set("page", String(pagination.page));
    searchParams.set("page_size", String(pagination.page_size));
  }
  if (order) {
    searchParams.set("order", order.order);
    searchParams.set("ascending", String(order.ascending));
  }
  return searchParams.toString();
};

export default toQueryString;
