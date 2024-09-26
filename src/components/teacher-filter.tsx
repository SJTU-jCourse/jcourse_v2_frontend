import { Checkbox, Collapse, CollapseProps, Row } from "antd";
import { useState } from "react";

import { TeacherFilterForQuery } from "../models/filter";
import { TeacherFilter } from "../models/model";
import FilterItemElement from "./filter-item";

const TeacherFilterView = ({
  filter,
  onChange,
}: {
  filter?: TeacherFilter;
  onChange?: (value: TeacherFilterForQuery) => void;
}) => {
  const [filterForQuery, setFilterForQuery] = useState<TeacherFilterForQuery>();

  if (!filter) {
    return <></>;
  }

  const items: CollapseProps["items"] = [
    {
      key: "departments",
      label: "单位",
      children: (
        <Checkbox.Group
          onChange={(value: string[]) => {
            const newValue: TeacherFilterForQuery = {
              ...filterForQuery,
              departments: value,
            };
            setFilterForQuery(newValue);
            if (onChange) {
              onChange(newValue);
            }
          }}
        >
          <Row>
            {filter.departments
              .sort((a, b) => {
                return b.value.localeCompare(a.value);
              })
              .map((item) => (
                <FilterItemElement item={item}></FilterItemElement>
              ))}
          </Row>
        </Checkbox.Group>
      ),
    },
    {
      key: "titles",
      label: "职称",
      children: (
        <Checkbox.Group
          onChange={(value: string[]) => {
            const newValue: TeacherFilterForQuery = {
              ...filterForQuery,
              titles: value,
            };
            setFilterForQuery(newValue);
            if (onChange) {
              onChange(newValue);
            }
          }}
        >
          <Row>
            {filter.titles
              .sort((a, b) => {
                return b.value.localeCompare(a.value);
              })
              .map((item) => (
                <FilterItemElement item={item}></FilterItemElement>
              ))}
          </Row>
        </Checkbox.Group>
      ),
    },
  ];
  return <Collapse ghost items={items}></Collapse>;
};

export default TeacherFilterView;
