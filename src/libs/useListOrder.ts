import { useSearchParams } from "react-router-dom";

import { ListOrder } from "../models/dto";

const useListOrder = (defaultListOrder?: ListOrder) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const listOrder: ListOrder = {
    order: defaultListOrder?.order || searchParams.get("order") || "",
    ascending:
      defaultListOrder?.ascending || searchParams.get("ascending") == "true",
  };

  const handleOrderByChange = (newListOrder: ListOrder) => {
    searchParams.set("order", newListOrder.order);
    searchParams.set("ascending", String(newListOrder.ascending));
    setSearchParams(searchParams);
  };

  return {
    listOrder,
    handleOrderByChange,
  };
};

export default useListOrder;
