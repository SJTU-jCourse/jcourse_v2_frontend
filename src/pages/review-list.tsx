import { Card, List } from "antd";

import PageHeader from "../components/page-header";
import ReviewItem from "../components/review-item";
import { ReviewProps } from "../models/model";

const ReviewListPage = () => {
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
  return (
    <>
      <PageHeader
        title="点评"
        subTitle={`共有${reviews.length}个点评`}
      ></PageHeader>

      <Card>
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
      </Card>
    </>
  );
};

export default ReviewListPage;
