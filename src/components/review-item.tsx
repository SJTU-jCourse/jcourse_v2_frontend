import {
  DeleteOutlined,
  EditOutlined,
  LikeOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Flex,
  Popconfirm,
  Rate,
  Space,
  Tooltip,
  Typography,
  message,
} from "antd";
import dayjs from "dayjs";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CommonInfoContext } from "../libs/context";
import { CourseMinimalProps, ReviewProps } from "../models/model";
import { deleteReview } from "../services/review";
import MarkDownPreview from "./markdown-preview";

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
  course?: CourseMinimalProps;
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
          <Rate disabled value={review.rating}></Rate>
        </div>
      </Flex>

      <MarkDownPreview src={review.comment}></MarkDownPreview>
      <Text type="secondary">#{review.id}</Text>
      <Space>
        <Button size="small" type="text" icon={<LikeOutlined />}>
          {review.likes}
        </Button>
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
        {/*<Button
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
       */}
        <Button
          size="small"
          type="text"
          icon={<ShareAltOutlined />}
          onClick={copyReviewUrlToClipboard}
        ></Button>
      </Space>

      {/*showReply && <ReviewReplyList />*/}
    </Space>
  );
};

export default ReviewItem;
