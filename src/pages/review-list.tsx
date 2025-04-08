import EmojiData from "@emoji-mart/data";
import { List } from "antd";
import { init } from "emoji-mart";
import { useEffect } from "react";

import PageHeader from "@/components/page-header";
import ReviewItem from "@/components/review-item";
import usePagination from "@/libs/usePagination";
import { useReviews } from "@/services/review";

const ReviewListPage = () => {
  const { pagination, handlePageChange } = usePagination();
  const { data } = useReviews(pagination);

  useEffect(() => {
    init({ EmojiData });
  }, []);

  return (
    <>
      <PageHeader
        title="点评"
        subTitle={`共有${data ? data.total : 0}个点评`}
      ></PageHeader>

      <List
        pagination={{
          align: "center",
          onChange: handlePageChange,
          total: data?.total,
          current: pagination?.page,
          pageSize: pagination?.page_size,
          hideOnSinglePage: true,
        }}
        dataSource={data?.data}
        renderItem={(item) => {
          return (
            <List.Item key={item.id}>
              <ReviewItem
                review={item}
                showCourse
              ></ReviewItem>
            </List.Item>
          );
        }}
      ></List>
    </>
  );
};

export default ReviewListPage;
