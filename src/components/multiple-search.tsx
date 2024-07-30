import { AutoComplete, Input, Typography } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MultipleSearch = () => {
  const [keyword, setKeyword] = useState<string>("");
  const navigate = useNavigate();
  const options = [
    {
      label: (
        <>
          <Typography.Text type="secondary">搜索 </Typography.Text>
          {keyword}
          <Typography.Text type="secondary"> 课程</Typography.Text>
        </>
      ),
      value: "/course",
    },
    {
      label: (
        <>
          <Typography.Text type="secondary">搜索 </Typography.Text>
          {keyword}
          <Typography.Text type="secondary"> 教师</Typography.Text>
        </>
      ),
      value: "/teacher",
    },
    {
      label: (
        <>
          <Typography.Text type="secondary">搜索 </Typography.Text>
          {keyword}
          <Typography.Text type="secondary"> 培养计划</Typography.Text>
        </>
      ),
      value: "/training-plan",
    },
  ];

  const onSelect = (value: string) => {
    navigate(`${value}?q=${keyword}`);
  };

  return (
    <>
      <AutoComplete options={options} onSelect={onSelect} value={keyword}>
        <Input
          onChange={(e: any) => {
            setKeyword(e.target.value as string);
          }}
          style={{ minWidth: 200 }}
        ></Input>
      </AutoComplete>
    </>
  );
};

export default MultipleSearch;
