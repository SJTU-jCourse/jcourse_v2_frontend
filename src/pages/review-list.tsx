import { Card, List } from "antd";

import PageHeader from "../components/page-header";
import ReviewItem from "../components/review-item";
import { reviewList } from "../models/mock";

const ReviewListPage = () => {
  const reviews = reviewList;
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
