import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/Home/HomePage";

import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";

import CreateCoursePage from "../pages/Courses/CreateCoursePage";

import MyCourses from "../pages/Dashboard/Professional/MyCourses";
import MyArticles from "../pages/Dashboard/Professional/MyArticles";
import Profile from "../pages/Dashboard/Professional/Profile";

/* ---------- FRONT PUBLIC ---------- */

import CoursesPage from "../pages/Courses/CoursesPage";
import CourseDetailPage from "../pages/Courses/CourseDetailPage";
import EditCoursePage from "../pages/Courses/EditCoursePage";

import ArticlesPage from "../pages/Articles/ArticlesPage";
import ArticleDetailPage from "../pages/Articles/ArticleDetailPage";

import ProfessionalsPage from "../pages/Professionals/ProfessionalsPage";
import ProfessionalDetailPage from "../pages/Professionals/ProfessionalDetailPage";

/* ---------- DASHBOARDS ---------- */

import Dashboard from "../pages/Dashboard/Admin/AdDashboard";
import ProfessionalDashboard from "../pages/Dashboard/Professional/Dashboard";

/* ---------- PAGES ADMIN ---------- */

import AdUsersPage from "../pages/Dashboard/Admin/AdUsersPage";
import AdCoursesPage from "../pages/Dashboard/Admin/AdCoursesPage";
import AdminDashboard from "../pages/Dashboard/Admin/AdDashboard";
import AdArticlesPage from "../pages/Dashboard/Admin/AdArticlesPage";
import AdProfessionalsPage from "../pages/Dashboard/Admin/AdProfessionalsPage";

/* ---------- ROUTES PROTEGEES ---------- */

import ProtectedRoute from "../components/ProtectedRoute";
import AdminRoute from "../components/AdminRoute";

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

      /* =======================
         FRONT PUBLIC
      ======================= */

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

      /* =======================
         ADMIN
      ======================= */

      {
        path: "admin",
        element: (
          <AdminRoute>
            <Dashboard />
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

      /* =======================
         PROFESSIONNEL
      ======================= */

      {
        path: "dashboard/professional",
        element: (
          <ProtectedRoute role="professional">
            <ProfessionalDashboard />
          </ProtectedRoute>
        ),
      },

      {
        path: "courses/create",
        element: (
          <ProtectedRoute role="professional">
            <CreateCoursePage />
          </ProtectedRoute>
        )
      },

      {
        path: "courses/edit/:id",
        element: (
          <ProtectedRoute role="professional">
            <EditCoursePage />
          </ProtectedRoute>
        )
      },

      {
        path: "dashboard/professional/courses",
        element: (
          <ProtectedRoute role="professional">
            <MyCourses />
          </ProtectedRoute>
        )
      },
      {
        path: "dashboard/professional/articles",
        element: (
          <ProtectedRoute role="professional">
            <MyArticles />
          </ProtectedRoute>
        )
      },
      {
        path: "dashboard/professional/profile",
        element: (
          <ProtectedRoute role="professional">
            <Profile />
          </ProtectedRoute>
        )
      },
    ],
  },
]);

export default router;
