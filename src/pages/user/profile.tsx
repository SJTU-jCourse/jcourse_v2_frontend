import { Button, Form, Input, Select, message } from "antd";
import { useOutletContext } from "react-router-dom";

import { UserProfileRequest } from "@/models/dto";
import { UserDetailProps } from "@/models/model";
import { updateUserProfile } from "@/services/user";

const convertDetailToRequest = (user: UserDetailProps): UserProfileRequest => {
  return {
    username: user.username,
    avatar: user.avatar,
    type: user.type,
    department: user.department,
    major: user.major,
    grade: user.grade,
    bio: user.bio,
  };
};

const userTypeOption = [
  { label: "学生", value: "student" },
  { label: "教职工", value: "faculty" },
  { label: "校友", value: "alumni" },
  { label: "其他", value: "other" },
];

const UserProfileSubPage = () => {
  const user = useOutletContext<UserDetailProps>();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const onFinish = (r: UserProfileRequest) => {
    updateUserProfile(Number(user.id), r)
      .then(() => {
        messageApi.info("更新成功");
      })
      .catch((error) => {
        messageApi.error(error.response?.data?.message);
      });
  };
  const initialValue = convertDetailToRequest(user);
  // const [imageUrl, setImageUrl] = useState<string>();
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={initialValue}
    >
      {contextHolder}
      <Form.Item label="用户名" name="username">
        <Input></Input>
      </Form.Item>
      {/*<Form.Item label="头像" name="avatar">
        <Upload listType="picture-circle">
          <img src={imageUrl} />
        </Upload>
      </Form.Item>*/}
      <Form.Item label="身份" name="type">
        <Select options={userTypeOption}></Select>
      </Form.Item>
      {/*<Form.Item label="学院" name="department">
        <Select></Select>
      </Form.Item>
      <Form.Item label="专业" name="major">
        <Select></Select>
      </Form.Item>
      <Form.Item label="年级" name="grade">
        <Select></Select>
      </Form.Item>*/}
      <Form.Item label="个人介绍" name="bio">
        <Input.TextArea></Input.TextArea>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserProfileSubPage;
