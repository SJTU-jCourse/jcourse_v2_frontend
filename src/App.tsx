import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";

import MainLayout from "./components/main-layout";
import IndexPage from "./pages";
import BaseCourseDetailPage from "./pages/base-course-detail";
import CourseDetailPage from "./pages/course-detail";
import CourseListPage from "./pages/course-list";
import LoginPage from "./pages/login";
import RankPage from "./pages/rank";
import ReviewListPage from "./pages/review-list";
import ReviewLocationPage from "./pages/review-location";
import TeacherDetailPage from "./pages/teacher-detail";
import TeacherListPage from "./pages/teacher-list";
import TrainingPlanDetailPage from "./pages/training-plan-detail";
import TrainingPlanListPage from "./pages/training-plan-list";
import UserDetailPage from "./pages/user-detail";
import UserActivitySubPage from "./pages/user/activity";
import UserPointSubPage from "./pages/user/point";
import UserProfileSubPage from "./pages/user/profile";
import UserReviewSubPage from "./pages/user/review";
import WriteReviewPage from "./pages/write-review";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <IndexPage />,
      },
      {
        path: "rank",
        element: <RankPage />,
      },
      {
        path: "user/:id/",
        element: <UserDetailPage />,
        children: [
          { path: "activity", element: <UserActivitySubPage /> },
          { path: "point", element: <UserPointSubPage /> },
          { path: "profile", element: <UserProfileSubPage /> },
          { path: "review", element: <UserReviewSubPage /> },
        ],
      },
      {
        path: "write-review",
        element: <WriteReviewPage />,
      },
      {
        path: "review",
        element: <ReviewListPage />,
      },
      {
        path: "review/:id",
        element: <ReviewLocationPage />,
      },
      {
        path: "base-course/:code",
        element: <BaseCourseDetailPage />,
      },
      {
        path: "course",
        element: <CourseListPage />,
      },
      {
        path: "course/:id",
        element: <CourseDetailPage />,
      },
      {
        path: "training-plan",
        element: <TrainingPlanListPage />,
      },
      {
        path: "training-plan/:id",
        element: <TrainingPlanDetailPage />,
      },
      {
        path: "teacher",
        element: <TeacherListPage />,
      },
      {
        path: "teacher/:id",
        element: <TeacherDetailPage />,
      },
    ],
  },
]);

function App() {
  return (
    <SWRConfig value={{ shouldRetryOnError: false, revalidateOnFocus: false }}>
      <ConfigProvider locale={zhCN}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </SWRConfig>
  );
}

export default App;
