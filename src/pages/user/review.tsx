import { List } from "antd";
import { useParams } from "react-router-dom";

import ReviewItem from "@/components/review-item";
import usePagination from "@/libs/usePagination";
import { useReviews } from "@/services/review";

const UserReviewSubPage = () => {
  const { id } = useParams();
  const { pagination, handlePageChange } = usePagination();
  const { data: reviews } = useReviews(pagination, { user_id: id });
  return (
    <List
      pagination={{
        align: "center",
        onChange: handlePageChange,
        total: reviews?.total,
        current: pagination?.page,
        pageSize: pagination?.page_size,
        hideOnSinglePage: true,
      }}
      dataSource={reviews?.data}
      renderItem={(item) => {
        return (
          <List.Item key={item.id}>
            <ReviewItem review={item} showCourse></ReviewItem>
          </List.Item>
        );
      }}
    ></List>
  );
};

export default UserReviewSubPage;
