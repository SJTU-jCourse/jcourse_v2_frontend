import { List } from "antd";

import PageHeader from "../components/page-header";
import ReviewItem from "../components/review-item";
import { useReviews } from "../services/review";

const ReviewListPage = () => {
  const { data } = useReviews();
  return (
    <>
      <PageHeader
        title="点评"
        subTitle={`共有${data?.total}个点评`}
      ></PageHeader>

      <List
        pagination={{ align: "center" }}
        dataSource={data?.data}
        renderItem={(item) => {
          return (
            <List.Item key={item.id}>
              <ReviewItem review={item} showCourse></ReviewItem>
            </List.Item>
          );
        }}
      ></List>
    </>
  );
};

export default ReviewListPage;
