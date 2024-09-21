import { ArrowRightOutlined } from "@ant-design/icons";
import { Avatar, Button, Flex, Space, Typography } from "antd";
import dayjs from "dayjs";

import { ReviewReplyItemProps, UserMinimalProps } from "../models/model";

const UserInReply = ({ user }: { user: UserMinimalProps }) => {
  return (
    <Space align="center">
      <Avatar src={user.avatar}></Avatar>
      <Typography.Text>{user.username}</Typography.Text>
    </Space>
  );
};

const ReviewReplyItem = ({ reply }: { reply: ReviewReplyItemProps }) => {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Flex gap={10} align="center">
        <UserInReply user={reply.user}></UserInReply>
        {reply.reply_user && (
          <>
            <Typography.Text type="secondary">
              <ArrowRightOutlined />
            </Typography.Text>
            <UserInReply user={reply.reply_user}></UserInReply>
          </>
        )}
      </Flex>

      <Typography.Paragraph>{reply.comment}</Typography.Paragraph>

      <Space>
        <Typography.Text type="secondary">
          {dayjs.unix(reply.created_at).format("YYYY-MM-DD HH:mm")}
        </Typography.Text>
        <Button type="text" size="small">
          回复
        </Button>
      </Space>
    </Space>
  );
};

export default ReviewReplyItem;
