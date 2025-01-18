import { Modal, message } from "antd";

import { resetPassword } from "../services/auth";
import EmailCodePasswordForm from "./email-code-password-form";

interface ResetPasswordModalProps {
  open: boolean;
  onClose: () => void;
}

/**
 * 通用弹窗：未登录场景下 “重置密码” 弹窗示例
 */
const ResetPasswordModal: React.FC<ResetPasswordModalProps> = (props) => {
  const { open, onClose } = props;

  const handleFinish = (values: any) => {
    const email = values.email;
    const code = values.code;
    const newPassword = values.password;

    resetPassword(email, newPassword, code)
      .then(() => {
        message.success("密码重置成功", 1, onClose);
      })
      .catch((error) => {
        message.error(error?.response?.data?.message);
      });
  };

  return (
    <Modal
      title="重置密码"
      open={open}
      onCancel={onClose}
      footer={null} // 让表单自己决定提交按钮
      destroyOnClose // 关闭时销毁内部表单
    >
      <EmailCodePasswordForm
        onFinish={handleFinish}
        buttonText="重置密码"
        emailSuffix={import.meta.env.VITE_EMAIL_SUFFIX}
      />
    </Modal>
  );
};

export default ResetPasswordModal;
