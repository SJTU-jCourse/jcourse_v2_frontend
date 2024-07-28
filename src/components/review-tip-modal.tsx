import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal, Slider } from "antd";
import { useState } from "react";

const ReviewTipModal = ({ userPoint }: { userPoint: number }) => {
  const [point, setPoint] = useState<number>(0);

  const onChange = (newValue: any) => {
    setPoint(newValue as number);
  };
  return (
    <>
      我的积分：{userPoint}
      <Slider max={userPoint} onChange={onChange}></Slider>
      打赏积分：{point}
    </>
  );
};

export const showReviewTipModal = ({ userPoint }: { userPoint: number }) => {
  Modal.confirm({
    title: "打赏点评",
    icon: <ExclamationCircleFilled />,
    content: <ReviewTipModal userPoint={userPoint}></ReviewTipModal>,
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};
