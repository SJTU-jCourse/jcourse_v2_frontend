import useSWR from "swr";

import { CommonInfo } from "../models/common";
import { fetcher } from "./request";

export const useCommonInfo = () => {
  const { data, error } = useSWR<CommonInfo>("/api/common", fetcher);
  return { data, error };
};
