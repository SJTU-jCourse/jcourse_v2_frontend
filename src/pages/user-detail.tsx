import { Card, Descriptions, Divider, Grid, List, Tabs, TabsProps } from "antd";

import ReviewItem from "../components/review-item";
import UserDetailCard from "../components/user-detail-card";
import UserPointTab from "../components/user-point-tab";
import UserProfileTab from "../components/user-profile-tab";
import {
  reviewList,
  userDetail,
  userPointDetail,
  userSummaryDetail,
} from "../models/mock";

const UserDetailPage = () => {
  const user = userDetail;
  const reviews = reviewList;
  const userPoint = userPointDetail;
  const userSummary = userSummaryDetail;

  const tabItems: TabsProps["items"] = [
    {
      key: "1",
      label: "概览",
      children: (
        <Card bordered={false}>
          <Descriptions column={1}>
            <Descriptions.Item label="点评数">
              {userSummary.review_count}
            </Descriptions.Item>
            <Descriptions.Item label="获赞数">
              {userSummary.like_receive}
            </Descriptions.Item>
          </Descriptions>
        </Card>
      ),
    },
    {
      key: "2",
      label: "点评",
      children: (
        <List
          pagination={{ align: "center" }}
          dataSource={reviews}
          renderItem={(item) => {
            return (
              <List.Item>
                <ReviewItem review={item} showCourse></ReviewItem>
              </List.Item>
            );
          }}
        ></List>
      ),
    },
    {
      key: "3",
      label: "通知",
    },
    {
      key: "4",
      label: "积分",
      children: <UserPointTab userPoint={userPoint}></UserPointTab>,
    },
    {
      key: "5",
      label: "设置",
      children: <UserProfileTab user={user}></UserProfileTab>,
    },
  ];

  const screens = Grid.useBreakpoint();
  return (
    <>
      <UserDetailCard user={user}></UserDetailCard>

      <Divider></Divider>

      <Tabs
        tabPosition={screens.sm ? "left" : "top"}
        items={tabItems}
        style={{ width: "100%" }}
        centered
      ></Tabs>
    </>
  );
};

export default UserDetailPage;
