import React from "react";

import { CommonInfo } from "@/models/common";

export const CommonInfoContext = React.createContext<CommonInfo | undefined>(
  undefined
);
