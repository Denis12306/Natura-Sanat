import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/Home/HomePage";

import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";

import CoursesPage from "../pages/Courses/CoursesPage";
import CourseDetailPage from "../pages/Courses/CourseDetailPage";

import ArticlesPage from "../pages/Articles/ArticlesPage";
import ArticleDetailPage from "../pages/Articles/ArticleDetailPage";
import CreateArticlePage from "../pages/Articles/CreateArticlePage";
import EditArticlePage from "../pages/Articles/EditArticlePage";
import MyArticles from "../pages/Articles/MyArticles";

import ProfessionalsPage from "../pages/Professionals/ProfessionalsPage";
import ProfessionalDetailPage from "../pages/Professionals/ProfessionalDetailPage";

import AdminDashboard from "../pages/Admin/AdminDashboard";
import UsersManagement from "../pages/Admin/UsersManagement";
import CoursesManagement from "../pages/Admin/CoursesManagement";
import ArticlesManagement from "../pages/Admin/ArticlesManagement";
import ProfessionalsManagement from "../pages/Admin/ProfessionalsManagement";

import ProfessionalDashboard from "../pages/Dashboard/ProfessionalDashboard";

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
        path: "dashboard/professional/articles",
        element: (
          <ProtectedRoute role="professional">
            <MyArticles />
          </ProtectedRoute>
        ),
      },

      {
        path: "articles/create",
        element: (
          <ProtectedRoute role="professional">
            <CreateArticlePage />
          </ProtectedRoute>
        ),
      },

      {
        path: "articles/edit/:id",
        element: (
          <ProtectedRoute role="professional">
            <EditArticlePage />
          </ProtectedRoute>
        ),
      },

      /* ================= ADMIN ================= */

      {
        path: "admin",
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ),
      },

      {
        path: "admin/users",
        element: (
          <AdminRoute>
            <UsersManagement />
          </AdminRoute>
        ),
      },

      {
        path: "admin/courses",
        element: (
          <AdminRoute>
            <CoursesManagement />
          </AdminRoute>
        ),
      },

      {
        path: "admin/articles",
        element: (
          <AdminRoute>
            <ArticlesManagement />
          </AdminRoute>
        ),
      },

      {
        path: "admin/professionals",
        element: (
          <AdminRoute>
            <ProfessionalsManagement />
          </AdminRoute>
        ),
      },

    ],
  },
]);

export default router;