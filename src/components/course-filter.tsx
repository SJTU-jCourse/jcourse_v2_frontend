import { Checkbox, Collapse, CollapseProps, Row } from "antd";
import { useState } from "react";

import { CourseFilterForQuery } from "../models/filter";
import { CourseFilter } from "../models/model";
import FilterItemElement from "./filter-item";

const CourseFilterView = ({
  filter,
  onChange,
}: {
  filter?: CourseFilter;
  onChange?: (value: CourseFilterForQuery) => void;
}) => {
  const [filterForQuery, setFilterForQuery] = useState<CourseFilterForQuery>();

  if (!filter) {
    return <></>;
  }

  const items: CollapseProps["items"] = [
    {
      key: "categories",
      label: "课程类别",
      children: (
        <Checkbox.Group
          onChange={(value: string[]) => {
            const newValue: CourseFilterForQuery = {
              ...filterForQuery,
              categories: value,
            };
            setFilterForQuery(newValue);
            if (onChange) {
              onChange(newValue);
            }
          }}
        >
          <Row>
            {filter.categories
              .sort((a, b) => {
                return b.value.localeCompare(a.value);
              })
              .map((item) => (
                <FilterItemElement
                  key={item.value}
                  item={item}
                ></FilterItemElement>
              ))}
          </Row>
        </Checkbox.Group>
      ),
    },
    {
      key: "departments",
      label: "开课单位",
      children: (
        <Checkbox.Group
          onChange={(value: string[]) => {
            const newValue: CourseFilterForQuery = {
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
                <FilterItemElement
                  key={item.value}
                  item={item}
                ></FilterItemElement>
              ))}
          </Row>
        </Checkbox.Group>
      ),
    },
    {
      key: "credits",
      label: "学分",
      children: (
        <Checkbox.Group
          onChange={(value: string[]) => {
            const newValue: CourseFilterForQuery = {
              ...filterForQuery,
              credits: value,
            };
            setFilterForQuery(newValue);
            if (onChange) {
              onChange(newValue);
            }
          }}
        >
          <Row>
            {filter.credits
              .sort((a, b) => {
                return Number(a.value) - Number(b.value);
              })
              .map((item) => (
                <FilterItemElement
                  key={item.value}
                  item={item}
                ></FilterItemElement>
              ))}
          </Row>
        </Checkbox.Group>
      ),
    },
    {
      key: "semesters",
      label: "开课学期",
      children: (
        <Checkbox.Group
          onChange={(value: string[]) => {
            const newValue: CourseFilterForQuery = {
              ...filterForQuery,
              semesters: value,
            };
            setFilterForQuery(newValue);
            if (onChange) {
              onChange(newValue);
            }
          }}
        >
          <Row>
            {filter.semesters
              .sort((a, b) => {
                return b.value.localeCompare(a.value);
              })
              .map((item) => (
                <FilterItemElement
                  key={item.value}
                  item={item}
                ></FilterItemElement>
              ))}
          </Row>
        </Checkbox.Group>
      ),
    },
  ];
  return <Collapse ghost items={items}></Collapse>;
};

export default CourseFilterView;
