import {
  DeleteOutlined,
  EditOutlined,
  ShareAltOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import EmojiData from "@emoji-mart/data";
import EmojiPicker from "@emoji-mart/react";
import {
  Avatar,
  Button,
  Flex,
  Popconfirm,
  Popover,
  Rate,
  Space,
  Tooltip,
  Typography,
  message,
} from "antd";
import dayjs from "dayjs";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import MarkDownPreview from "@/components/markdown-preview";
import { CommonInfoContext } from "@/libs/context";
import {
  CourseMinimalProps,
  ReviewProps,
  ReviewReactionProps,
  UserMinimalProps,
} from "@/models/model";
import useReviewReaction from "@/services/reaction.ts";
import { deleteReview } from "@/services/review";

const { Text } = Typography;
const ReviewTitle = ({
  user,
  createdAt,
  updatedAt,
  anonymous,
  course,
  showCourse,
}: {
  user: UserMinimalProps;
  createdAt: number;
  updatedAt: number | null;
  course?: CourseMinimalProps;
  anonymous?: boolean;
  showCourse?: boolean;
}) => {
  return (
    <Space>
      <Avatar src={user.avatar || null} size={36}>
        {user.username.charAt(0)}
      </Avatar>
      <div>
        {anonymous ? (
          <Text strong>{user.username}</Text>
        ) : (
          <Link to={`/user/${user.id}`}>
            <Text strong>{user.username}</Text>
          </Link>
        )}
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
          {updatedAt && updatedAt != createdAt ? (
            <Tooltip
              title={`发表于 ${dayjs(createdAt).format("YYYY-MM-DD HH:mm")}`}
            >
              <Text type="secondary">
                编辑于 {`${dayjs(updatedAt).format("YYYY-MM-DD HH:mm")}`}
              </Text>
            </Tooltip>
          ) : (
            <Text type="secondary">
              发表于 {`${dayjs(createdAt).format("YYYY-MM-DD HH:mm")}`}
            </Text>
          )}
        </div>
      </div>
    </Space>
  );
};

export const ReviewReactions = ({
  reactions,
  handleReaction,
}: {
  reactions: ReviewReactionProps;
  handleReaction?: (reaction: string) => void;
}) => {
  const myReactionMap = new Map(Object.entries(reactions.my_reactions));

  return (
    <Space wrap>
      {reactions.total_reactions.map((item) => (
        <Button
          key={item.reaction}
          type={myReactionMap.has(item.reaction) ? "primary" : "default"}
          onClick={() => {
            if (handleReaction) handleReaction(item.reaction);
          }}
          size="small"
        >
          <em-emoji id={item.reaction}></em-emoji>
          {item.count}
        </Button>
      ))}
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
  const [messageApi, contextHolder] = message.useMessage();
  const CommonInfo = useContext(CommonInfoContext);
  const navigate = useNavigate();

  const [pickerOpen, setPickerOpen] = useState<boolean>(false);

  const { handleReaction } = useReviewReaction(review.id, review.reaction);
  // const [showReply, setShowReply] = useState<boolean>(false);

  const showEdit = review.user?.id == CommonInfo?.user?.id;

  const copyReviewUrlToClipboard = async () => {
    const url = window.location.origin + "/course/" + review.course.id;
    try {
      await navigator.clipboard.writeText(url);
      messageApi.open({
        type: "success",
        content: "已复制点评链接到剪贴板",
      });
    } catch (err) {
      messageApi.open({
        type: "error",
        content: "复制点评链接失败",
      });
    }
  };
  return (
    <Space
      id={`review-${review.id}`}
      direction="vertical"
      style={{ width: "100%" }}
    >
      {contextHolder}
      <Flex align="center" justify="space-between">
        {review.is_anonymous ? (
          <ReviewTitle
            user={{ id: 0, username: "匿名用户", avatar: "" }}
            createdAt={review.created_at}
            updatedAt={review.updated_at}
            course={review.course}
            anonymous={true}
            showCourse={showCourse}
          />
        ) : (
          <ReviewTitle
            user={review.user}
            createdAt={review.created_at}
            updatedAt={review.updated_at}
            course={review.course}
            anonymous={false}
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
          <Rate disabled value={review.rating}></Rate>
        </div>
      </Flex>

      <MarkDownPreview src={review.comment}></MarkDownPreview>

      <ReviewReactions
        reactions={review.reaction}
        handleReaction={handleReaction}
      />

      <Space>
        <Text type="secondary">#{review.id}</Text>
        <Popover
          open={pickerOpen}
          content={
            <EmojiPicker
              data={EmojiData}
              onEmojiSelect={(emoji: { id: string }) => {
                handleReaction(emoji.id);
                setPickerOpen(false);
              }}
              locale="zh"
              skinTonePosition="none"
            />
          }
        >
          <Button
            size="small"
            type="text"
            icon={<SmileOutlined />}
            onClick={() => {
              setPickerOpen(true);
            }}
          ></Button>
        </Popover>

        {showEdit && (
          <Button
            size="small"
            type="text"
            icon={<EditOutlined />}
            onClick={() => {
              navigate(`/write-review?review_id=${review.id}`);
            }}
          ></Button>
        )}
        {showEdit && (
          <Popconfirm
            title="删除点评？"
            onConfirm={() => {
              deleteReview(review.id);
            }}
          >
            <Button
              size="small"
              type="text"
              danger
              icon={<DeleteOutlined />}
            ></Button>
          </Popconfirm>
        )}
        <Button
          size="small"
          type="text"
          icon={<ShareAltOutlined />}
          onClick={copyReviewUrlToClipboard}
        ></Button>
      </Space>
    </Space>
  );
};

export default ReviewItem;
