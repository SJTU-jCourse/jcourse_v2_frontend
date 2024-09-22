import { Card, Descriptions } from "antd";
import { useParams } from "react-router-dom";

import { useUserActivity } from "../../services/user";

const UserActivitySubPage = () => {
  const { id } = useParams();
  const { data: userActivity } = useUserActivity(Number(id));
  if (!userActivity) {
    return <></>;
  }
  return (
    <Card bordered={false}>
      <Descriptions column={1}>
        <Descriptions.Item label="点评数">
          {userActivity.review_count}
        </Descriptions.Item>
        <Descriptions.Item label="获赞数">
          {userActivity.like_receive}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default UserActivitySubPage;
