import { Select } from "antd";

const departmentOptions = [
  "船舶海洋与建筑工程学院",
  "机械与动力工程学院",
  "电子信息与电气工程学院",
  "材料科学与工程学院",
  "生物医学工程学院",
].map((item) => {
  return { label: item, value: item };
});

const TeacherFilter = () => {
  return (
    <>
      学院：
      <Select
        popupMatchSelectWidth={false}
        options={departmentOptions}
      ></Select>
    </>
  );
};

export default TeacherFilter;
