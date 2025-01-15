import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  LikeOutlined,
  ShareAltOutlined,
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
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CommonInfoContext } from "../libs/context";
import { CourseMinimalProps, ReviewProps } from "../models/model";
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
  const CommonInfo = useContext(CommonInfoContext);
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      label: "删除点评",
      key: "2",
      icon: <DeleteOutlined />,
      danger: true,
    },
  ];

  // const [showReply, setShowReply] = useState<boolean>(false);

  const showEdit = review.user?.id == CommonInfo?.user?.id;

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
        </Button>*/}
        <Button size="small" type="text" icon={<ShareAltOutlined />}></Button>
        <Dropdown menu={{ items }}>
          <Button size="small" type="text" icon={<EllipsisOutlined />}></Button>
        </Dropdown>
      </Space>

      {/*showReply && <ReviewReplyList />*/}
    </Space>
  );
};

export default ReviewItem;
