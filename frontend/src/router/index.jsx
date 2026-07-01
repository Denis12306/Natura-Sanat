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
import MyArticles from "../pages/Articles/MyArticles";
import EditArticlePage from "../pages/Articles/EditArticlePage";

import ProfessionalsPage from "../pages/Professionals/ProfessionalsPage";
import ProfessionalDetailPage from "../pages/Professionals/ProfessionalDetailPage";

import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import ProfessionalDashboard from "../pages/Dashboard/ProfessionalDashboard";

import AdminRoute from "../components/AdminRoute";
import ProtectedRoute from "../components/ProtectedRoute";

import UsersManagement from "../pages/Admin/UsersManagement";
import ProfessionalsManagement from "../pages/Admin/ProfessionalsManagement";
import CoursesManagement from "../pages/Admin/CoursesManagement";
import ArticlesManagement from "../pages/Admin/ArticlesManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "register",
        element: <RegisterPage />
      },
      {
        path: "courses",
        element: <CoursesPage />
      },
      {
        path: "courses/:id",
        element: <CourseDetailPage />
      },
      {
        path: "articles",
        element: <ArticlesPage />
      },
      {
        path: "articles/:id",
        element: <ArticleDetailPage />
      },
      {
        path: "professionals",
        element: <ProfessionalsPage />
      },
      {
        path: "professionals/:id",
        element: <ProfessionalDetailPage />
      },
      {
        path: "dashboard/admin",
        element: (
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        )
      },
      {
        path: "admin/users",
        element: (
          <AdminRoute>
            <UsersManagement />
          </AdminRoute>
        )
      },
      {
        path: "admin/professionals",
        element: (
          <AdminRoute>
            <ProfessionalsManagement />
          </AdminRoute>
        )
      },
      {
        path: "admin/courses",
        element: (
          <AdminRoute>
            <CoursesManagement />
          </AdminRoute>
        )
      },
      {
        path: "admin/articles",
        element: (
          <AdminRoute>
            <ArticlesManagement />
          </AdminRoute>
        )
      },
      {
        path: "dashboard/professional",
        element: (
          <ProtectedRoute role="professional">
            <ProfessionalDashboard />
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
        path: "dashboard/professional/articles/edit/:id",
        element: (
          <ProtectedRoute role="professional">
            <EditArticlePage />
          </ProtectedRoute>
        )
      },
      {
        path: "dashboard/professional/articles/create",
        element: (
          <ProtectedRoute role="professional">
            <CreateArticlePage />
          </ProtectedRoute>
        )
      },
    ]
  }
]);

export default router;
