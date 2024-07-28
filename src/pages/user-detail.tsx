import {
  Card,
  Descriptions,
  DescriptionsProps,
  Divider,
  List,
  Tabs,
  TabsProps,
} from "antd";

import ReviewItem from "../components/review-item";
import UserDetailCard from "../components/user-detail-card";
import UserPointTab from "../components/user-point-tab";
import UserProfileTab from "../components/user-profile-tab";
import { ReviewProps, UserDetailProps } from "../models/model";

const UserDetailPage = () => {
  const user: UserDetailProps = {
    id: 0,
    username: "傲娇系藤原千花",
    avatar: "",
    bio: "漫画《辉夜大小姐想让我告白～天才们的恋爱头脑战～》及其衍生作品的女主角",
  };

  const descriptionItems: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "点评数量",
      children: 1,
    },
    {
      key: "2",
      label: "获赞",
      children: 20,
    },
    {
      key: "2",
      label: "被打赏",
      children: 20,
    },
    {
      key: "3",
      label: "关注课程",
      children: 1,
    },
  ];

  const reviews: ReviewProps[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
    return {
      id: 1,
      user: {
        id: 1,
        username: "傲娇系藤原千花",
        avatar: "",
      },
      course: {
        id: 1,
        code: "EE0502",
        name: "电路实验",
        main_teacher: {
          id: 111,
          code: "1111",
          name: "张峰",
          title: "教授",
          department: "电子信息与电气工程学院",
          avatar: "",
        },
      },
      comment: "这里是点评正文",
      rate: 1,
      semester: "2024-2025-1",
      created_at: 1722065399,
      updated_at: 1722065399,
      is_anonymous: false,
      reactions: [],
      replies: 22,
      likes: 11,
    };
  });

  const tabItems: TabsProps["items"] = [
    {
      key: "1",
      label: "概览",
      children: (
        <Card bordered={false}>
          <Descriptions column={1} items={descriptionItems} />
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
      children: (
        <UserPointTab
          userPoint={{
            total: 20,
            detail: [
              { value: 10, time: "2020-07-01 11:00", description: "说明" },
            ],
          }}
        ></UserPointTab>
      ),
    },
    {
      key: "5",
      label: "个人设置",
      children: <UserProfileTab user={user}></UserProfileTab>,
    },
  ];

  return (
    <>
      <UserDetailCard user={user}></UserDetailCard>

      <Divider></Divider>

      <Tabs
        tabPosition="left"
        items={tabItems}
        style={{ width: "100%" }}
        centered
      ></Tabs>
    </>
  );
};

export default UserDetailPage;
