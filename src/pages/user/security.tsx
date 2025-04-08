import { Button } from "antd";
import { useState } from "react";

import ResetPasswordModal from "@/components/reset-password-model";

const UserSecurityPage = () => {
  const [openChangeModal, setOpenChangeModal] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setOpenChangeModal(true)}>
        修改密码
      </Button>
      <ResetPasswordModal
        open={openChangeModal}
        onClose={() => setOpenChangeModal(false)}
      />
    </div>
  );
};

export default UserSecurityPage;
