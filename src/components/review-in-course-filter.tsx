import { Button, Flex, Select } from "antd";
import { useState } from "react";

import { ReviewFilterForQuery } from "@/models/filter";

const orderOptions = [
  "最新回复",
  "最早回复",
  "最高获赞",
  "最高评分",
  "最低评分",
].map((item) => {
  return { label: item, value: item };
});

const rateOptions = ["5", "4", "3", "2", "1"].map((item) => {
  return { label: item, value: item };
});

const ReviewInCourseFilter = ({ semesters }: { semesters: string[] }) => {
  const [filterForQuery] = useState<ReviewFilterForQuery>({});

  const semesterOptions = semesters.map((item) => {
    return { label: item, value: item };
  });
  return (
    <Flex wrap align="center" justify="flex-start" gap={8}>
      <div>
        排序：
        <Select popupMatchSelectWidth={false} options={orderOptions}></Select>
      </div>
      <div>
        学期：
        <Select
          popupMatchSelectWidth={false}
          options={semesterOptions}
          value={filterForQuery.semester}
        ></Select>
      </div>
      <div>
        评分：
        <Select
          popupMatchSelectWidth={false}
          options={rateOptions}
          value={filterForQuery.rating}
        ></Select>
      </div>

      <Button>筛选</Button>
    </Flex>
  );
};

export default ReviewInCourseFilter;
