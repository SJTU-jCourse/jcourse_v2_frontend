import { useParams } from "react-router-dom";

const ReviewLocationPage = () => {
  const { id } = useParams();
  console.log(id);
  return <></>;
};

export default ReviewLocationPage;
