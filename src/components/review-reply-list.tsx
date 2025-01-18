import { Button, Card, Form, Input, List } from "antd";

import { ReviewReplyItemProps } from "../models/model";
import ReviewReplyItem from "./review-reply-item";

const ReviewReplyList = () => {
  return (
    <Card>
      <List
        renderItem={(item: ReviewReplyItemProps) => {
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
