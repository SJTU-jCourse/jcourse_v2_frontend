import { Checkbox, Collapse, CollapseProps, Row } from "antd";
import { useState } from "react";

import { TrainingPlanFilterForQuery } from "../models/filter";
import { TrainingPlanFilter } from "../models/model";
import FilterItemElement from "./filter-item";

const TrainingPlanFilterView = ({
  filter,
  onChange,
}: {
  filter?: TrainingPlanFilter;
  onChange?: (value: TrainingPlanFilterForQuery) => void;
}) => {
  const [filterForQuery, setFilterForQuery] =
    useState<TrainingPlanFilterForQuery>();

  if (!filter) {
    return <></>;
  }
  const items: CollapseProps["items"] = [
    {
      key: "departments",
      label: "培养单位",
      children: (
        <Checkbox.Group
          onChange={(value: string[]) => {
            const newValue: TrainingPlanFilterForQuery = {
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
      key: "degrees",
      label: "学历层次",
      children: (
        <Checkbox.Group
          onChange={(value: string[]) => {
            const newValue: TrainingPlanFilterForQuery = {
              ...filterForQuery,
              degrees: value,
            };
            setFilterForQuery(newValue);
            if (onChange) {
              onChange(newValue);
            }
          }}
        >
          <Row>
            {filter.degrees
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
      key: "entry_years",
      label: "年级",
      children: (
        <Checkbox.Group
          onChange={(value: string[]) => {
            const newValue: TrainingPlanFilterForQuery = {
              ...filterForQuery,
              entry_years: value,
            };
            setFilterForQuery(newValue);
            if (onChange) {
              onChange(newValue);
            }
          }}
        >
          <Row>
            {filter.entry_years
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

export default TrainingPlanFilterView;
