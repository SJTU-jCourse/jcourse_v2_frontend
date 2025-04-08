import { Tabs, TabsProps } from "antd";

import PageHeader from "@/components/page-header";

const RankPage = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "课程",
    },
    {
      key: "2",
      label: "教师",
    },
    {
      key: "3",
      label: "培养计划",
    },
    {
      key: "4",
      label: "用户",
    },
  ];
  return (
    <>
      <PageHeader title={"排行榜"}></PageHeader>
      <Tabs items={items}></Tabs>
    </>
  );
};

export default RankPage;
