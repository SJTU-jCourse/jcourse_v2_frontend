import { Segmented } from "antd";

import { ListOrder } from "@/models/dto";

const RatingOrderSegment = ({
  defaultOrder,
  onChange,
}: {
  defaultOrder?: string;
  onChange?: (order: ListOrder) => void;
}) => {
  const listOrderMap: Map<string, ListOrder> = new Map<string, ListOrder>([
    ["最多点评", { order: "rating_count", ascending: false }],
    ["最高评分", { order: "rating_avg", ascending: false }],
  ]);

  const orderToLabelMap: Map<string, string> = new Map([
    ["rating_count", "最多点评"],
    ["rating_avg", "最高评分"],
  ]);

  const options = Array.from(listOrderMap.keys()).map((item) => {
    return { label: item, value: item };
  });

  const handleChange = (value: string) => {
    const order = listOrderMap.get(value);
    if (!order) return;
    if (!onChange) return;
    onChange(order);
  };

  return (
    <Segmented
      options={options}
      onChange={handleChange}
      defaultValue={
        defaultOrder ? orderToLabelMap.get(defaultOrder) : "最多点评"
      }
    ></Segmented>
  );
};

export default RatingOrderSegment;
