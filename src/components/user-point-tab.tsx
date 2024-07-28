import { Descriptions, Table, Typography } from "antd";

import { UserPointProps } from "../models/model";

const UserPointTab = ({ userPoint }: { userPoint: UserPointProps }) => {
  const columns = [
    {
      title: "时间",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "变动值",
      dataIndex: "value",
      key: "value",
    },
    { title: "描述", dataIndex: "description", key: "description" },
  ];
  return (
    <>
      <Typography.Title level={5}>概览</Typography.Title>
      <Descriptions bordered>
        <Descriptions.Item label="总积分" className="total-point">
          {userPoint.total}
        </Descriptions.Item>
      </Descriptions>
      <Typography.Title level={5}>说明</Typography.Title>

      <Typography.Paragraph>
        您可以前往
        <a href="https://share.dyweb.sjtu.cn/" target="_blank" rel="noreferrer">
          传承·交大
        </a>
        将选课社区积分兑换为传承积分。
      </Typography.Paragraph>

      <Typography.Title level={5}>积分详情</Typography.Title>

      <Table
        tableLayout="fixed"
        dataSource={userPoint.detail}
        columns={columns}
        pagination={false}
      ></Table>
    </>
  );
};

export default UserPointTab;
