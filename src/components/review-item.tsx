import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  LikeOutlined,
  MessageOutlined,
  MessageTwoTone,
  ShareAltOutlined,
  TransactionOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Dropdown,
  Flex,
  MenuProps,
  Rate,
  Space,
  Tooltip,
  Typography,
} from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { Link } from "react-router-dom";

import { CourseInReviewProps, ReviewProps } from "../models/model";
import MarkDownPreview from "./markdown-preview";
import ReviewReplyList from "./review-reply-list";
import { showReviewTipModal } from "./review-tip-modal";

const { Text } = Typography;
const UserInReview = ({
  username,
  avatar,
  createdAt,
  updatedAt,

  course,
  showCourse,
}: {
  username: string;
  avatar: string | null;
  createdAt: number;
  updatedAt: number | null;
  course?: CourseInReviewProps;
  showCourse?: boolean;
}) => {
  return (
    <Space>
      <Avatar src={avatar} size={36}>
        {username.charAt(0)}
      </Avatar>
      <div>
        <Text strong>{username}</Text>

        {showCourse && course && (
          <>
            <span> 点评了 </span>
            <Link to={`/course/${course.id}`}>
              <Typography.Text strong>
                {course.code} {course.name}（{course.main_teacher.name}）
              </Typography.Text>
            </Link>
          </>
        )}

        <div>
          {updatedAt ? (
            <Tooltip
              title={`发表于 ${dayjs
                .unix(createdAt)
                .format("YYYY-MM-DD HH:mm")}`}
            >
              <Text type="secondary">
                编辑于 {`${dayjs.unix(updatedAt).format("YYYY-MM-DD HH:mm")}`}
              </Text>
            </Tooltip>
          ) : (
            <Text type="secondary">
              发表于 {`${dayjs.unix(createdAt).format("YYYY-MM-DD HH:mm")}`}
            </Text>
          )}
        </div>
      </div>
    </Space>
  );
};

const ReviewItem = ({
  review,
  showCourse,
}: {
  review: ReviewProps;
  showCourse?: boolean;
}) => {
  const items: MenuProps["items"] = [
    {
      label: "编辑点评",
      key: "1",
      icon: <EditOutlined />,
    },
    {
      label: "匿名/取消匿名",
      key: "2",
      icon: <UserSwitchOutlined />,
    },
    {
      label: "删除点评",
      key: "3",
      icon: <DeleteOutlined />,
      danger: true,
    },
  ];

  const [showReply, setShowReply] = useState<boolean>(false);

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Flex align="center" justify="space-between">
        {review.is_anonymous ? (
          <UserInReview
            username="匿名用户"
            avatar={null}
            createdAt={review.created_at}
            updatedAt={review.updated_at}
            course={review.course}
            showCourse={showCourse}
          />
        ) : (
          <UserInReview
            username={review.user.username}
            avatar={review.user.avatar}
            createdAt={review.created_at}
            updatedAt={review.updated_at}
            course={review.course}
            showCourse={showCourse}
          />
        )}
      </Flex>

      <Flex align="center" justify="flex-start" gap={10} wrap>
        <div>
          <Text>学期：</Text>
          <Text strong>{review.semester}</Text>
        </div>

        <div>
          <Text>评分：</Text>
          <Rate disabled value={review.rate}></Rate>
        </div>
      </Flex>

      <MarkDownPreview src={review.comment}></MarkDownPreview>
      <Text type="secondary">#{review.id}</Text>
      <Space>
        <Button size="small" type="text" icon={<LikeOutlined />}>
          {review.likes}
        </Button>
        <Button
          size="small"
          type="text"
          icon={showReply ? <MessageTwoTone /> : <MessageOutlined />}
          onClick={() => {
            setShowReply(!showReply);
          }}
        >
          {review.replies}
        </Button>
        <Button
          size="small"
          type="text"
          icon={<TransactionOutlined />}
          onClick={() => {
            showReviewTipModal({ userPoint: 100 });
          }}
        >
          {review.replies}
        </Button>
        <Button size="small" type="text" icon={<ShareAltOutlined />}></Button>
        <Dropdown menu={{ items }}>
          <Button size="small" type="text" icon={<EllipsisOutlined />}></Button>
        </Dropdown>
      </Space>

      {showReply && <ReviewReplyList />}
    </Space>
  );
};

export default ReviewItem;
