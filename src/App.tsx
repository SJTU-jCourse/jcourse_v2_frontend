import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainLayout from "./components/main-layout";
import IndexPage from "./pages";
import BaseCourseDetailPage from "./pages/base-course-detail";
import CourseDetailPage from "./pages/course-detail";
import CourseListPage from "./pages/course-list";
import RankPage from "./pages/rank";
import ReviewListPage from "./pages/review-list";
import TeacherDetailPage from "./pages/teacher-detail";
import TeacherListPage from "./pages/teacher-list";
import TrainingPlanDetailPage from "./pages/training-plan-detail";
import TrainingPlanListPage from "./pages/training-plan-list";
import UserDetailPage from "./pages/user-detail";
import WriteReviewPage from "./pages/write-review";

const router = createBrowserRouter([
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
        path: "user/:id",
        element: <UserDetailPage />,
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
        path: "base-course/:id",
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
  return <RouterProvider router={router} />;
}

export default App;
