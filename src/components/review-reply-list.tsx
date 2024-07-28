import { Button, Card, Form, Input, List } from "antd";

import { reviewReplyList } from "../models/mock";
import ReviewReplyItem from "./review-reply-item";

const ReviewReplyList = () => {
  const replies = reviewReplyList;
  return (
    <Card>
      <List
        dataSource={replies}
        renderItem={(item) => {
          return (
            <List.Item>
              <ReviewReplyItem reply={item}></ReviewReplyItem>
            </List.Item>
          );
        }}
      ></List>

      <Form>
        <Form.Item>
          <Input.TextArea></Input.TextArea>
        </Form.Item>
        <Form.Item>
          <Button>回复</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ReviewReplyList;
