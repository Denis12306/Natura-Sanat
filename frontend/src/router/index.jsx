import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/Home/HomePage";

import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";

import CoursesPage from "../pages/Courses/CoursesPage";
import CourseDetailPage from "../pages/Courses/CourseDetailPage";
import MyCourses from "../pages/Dashboard/Professional/MyCourses";
import CreateCoursePage from "../pages/Courses/CreateCoursePage";

import ArticlesPage from "../pages/Articles/ArticlesPage";
import ArticleDetailPage from "../pages/Articles/ArticleDetailPage";
import CreateArticlePage from "../pages/Articles/CreateArticlePage";
import EditArticlePage from "../pages/Articles/EditArticlePage";
import MyArticles from "../pages/Articles/MyArticles";

import ProfessionalsPage from "../pages/Professionals/ProfessionalsPage";
import ProfessionalDetailPage from "../pages/Professionals/ProfessionalDetailPage";
import ProfessionalDashboard from "../pages/Dashboard/Professional/Dashboard";
import CreateProfessionalPage from "../pages/Professionals/CreateProfessionalPage";
import EditProfessionalPage from "../pages/Professionals/EditProfessionalPage";

import AdDashboard from "../pages/Dashboard/Admin/AdDashboard";
import AdUsersPage from "../pages/Dashboard/Admin/AdUsersPage";
import AdCoursesPage from "../pages/Dashboard/Admin/AdCoursesPage";
import AdArticlesPage from "../pages/Dashboard/Admin/AdArticlesPage";
import AdProfessionalsPage from "../pages/Dashboard/Admin/AdProfessionalsPage";

import Profile from "../pages/Dashboard/Professional/Profile";
import ProfilePage from "../pages/Profile/ProfilePage";

import ProtectedRoute from "../components/ProtectedRoute";
import AdminRoute from "../components/AdminRoute";

import AboutPage from "../pages/About/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [

      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "login",
        element: <LoginPage />,
      },

      {
        path: "register",
        element: <RegisterPage />,
      },

      /* ================= PUBLIC ================= */

      {
        path: "courses",
        element: <CoursesPage />,
      },

      {
        path: "courses/:id",
        element: <CourseDetailPage />,
      },

      {
        path: "articles",
        element: <ArticlesPage />,
      },

      {
        path: "articles/:id",
        element: <ArticleDetailPage />,
      },

      {
        path: "professionals",
        element: <ProfessionalsPage />,
      },

      {
        path: "professionals/:id",
        element: <ProfessionalDetailPage />,
      },

      /* =============== PROFESSIONNEL =============== */

      {
        path: "dashboard/professional",
        element: (
          <ProtectedRoute role="professional">
            <ProfessionalDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard/professional/courses",
        element: (
          <ProtectedRoute role="professional">
            <MyCourses />
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard/professional/articles",
        element: (
          <ProtectedRoute role="professional">
            <MyArticles />
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard/professional/profile",
        element: (
          <ProtectedRoute role="professional">
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "professionals/create",
        element: (
          <ProtectedRoute roles={["professional", "admin"]}>
            <CreateProfessionalPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "professionals/edit/:id",
        element: (
          <ProtectedRoute roles={["professional", "admin"]}>
            <EditProfessionalPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "articles/create",
        element: (
          <ProtectedRoute roles={["professional", "admin"]}>
            <CreateArticlePage />
          </ProtectedRoute>
        ),
      },

      {
        path: "articles/edit/:id",
        element: (
          <ProtectedRoute roles={["professional", "admin"]}>
            <EditArticlePage />
          </ProtectedRoute>
        ),
      },

      {
        path: "courses/create",
        element: (
          <ProtectedRoute roles={["professional", "admin"]}>
            <CreateCoursePage />
          </ProtectedRoute>
        ),
      },

      /* ================= ADMIN ================= */

      {
        path: "admin",
        element: (
          <AdminRoute>
            <AdDashboard />
          </AdminRoute>
        ),
      },
      {
        path: "admin/users",
        element: (
          <AdminRoute>
            <AdUsersPage />
          </AdminRoute>
        ),
      },
      {
        path: "admin/courses",
        element: (
          <AdminRoute>
            <AdCoursesPage />
          </AdminRoute>
        ),
      },
      {
        path: "admin/articles",
        element: (
          <AdminRoute>
            <AdArticlesPage />
          </AdminRoute>
        ),
      },
      {
        path: "admin/professionals",
        element: (
          <AdminRoute>
            <AdProfessionalsPage />
          </AdminRoute>
        ),
      },

      /* ================= PROFILE ================= */

      {
        path: "/Profile",
        element: <ProfilePage />
      },

      /* ================= ABOUT ================= */

      {
        path: "about",
        element: <AboutPage />,
      },

    ],
  },
]);

export default router;
