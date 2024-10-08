import { Checkbox, Col, Tag } from "antd";

import { FilterItem } from "../models/model";

const FilterItemElement = ({ item }: { item: FilterItem }) => {
  return (
    <Col span={24}>
      <Checkbox value={item.value}>
        {item.value} <Tag>{item.count}</Tag>
      </Checkbox>
    </Col>
  );
};

export default FilterItemElement;
