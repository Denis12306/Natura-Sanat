import { createHashRouter } from "react-router-dom";

// ==========================================
// 1. IMPORTS DES LAYOUTS ET PAGES COMMUNES
// ==========================================
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home/HomePage";
import AboutPage from "../pages/About/AboutPage";
import SearchPage from "../pages/SearchPage";

// ==========================================
// 2. IMPORTS DU MODULE AUTHENTIFICATION
// ==========================================
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import ProfilePage from "../pages/Profile/ProfilePage";

// ==========================================
// 3. IMPORTS DU MODULE COURS (COURSES)
// ==========================================
import CoursesPage from "../pages/Courses/CoursesPage";
import CourseDetailPage from "../pages/Courses/CourseDetailPage";
import CreateCoursePage from "../pages/Courses/CreateCoursePage";
import EditCoursePage from "../pages/Courses/EditCoursePage";

// ==========================================
// 4. IMPORTS DU MODULE ARTICLES
// ==========================================
import ArticlesPage from "../pages/Articles/ArticlesPage";
import ArticleDetailPage from "../pages/Articles/ArticleDetailPage";
import CreateArticlePage from "../pages/Articles/CreateArticlePage";
import EditArticlePage from "../pages/Articles/EditArticlePage";

// ==========================================
// 5. IMPORTS DU MODULE PROFESSIONNELS
// ==========================================
import ProfessionalsPage from "../pages/Professionals/ProfessionalsPage";
import ProfessionalDetailPage from "../pages/Professionals/ProfessionalDetailPage";
import CreateProfessionalPage from "../pages/Professionals/CreateProfessionalPage";
import EditProfessionalPage from "../pages/Professionals/EditProfessionalPage";

// ==========================================
// 6. IMPORTS DES DASHBOARDS (PRO & ADMIN)
// ==========================================
// Espace Professionnel :
import ProfessionalDashboard from "../pages/Dashboard/Professional/Dashboard";
import MyCourses from "../pages/Dashboard/Professional/MyCourses";
import MyArticles from "../pages/Articles/MyArticles";
import Profile from "../pages/Dashboard/Professional/Profile";

// Espace Administrateur :
import AdDashboard from "../pages/Dashboard/Admin/AdDashboard";
import AdUsersPage from "../pages/Dashboard/Admin/AdUsersPage";
import AdCoursesPage from "../pages/Dashboard/Admin/AdCoursesPage";
import AdArticlesPage from "../pages/Dashboard/Admin/AdArticlesPage";
import AdProfessionalsPage from "../pages/Dashboard/Admin/AdProfessionalsPage";

// ==========================================
// 7. IMPORTS DES GUARDS / ROUTES SÉCURISÉES
// ==========================================
import ProtectedRoute from "../components/ProtectedRoute";
import AdminRoute from "../components/AdminRoute";

// ==========================================
// CONFIGURATION DES ROUTES DE L'APPLICATION
// ==========================================
const router = createHashRouter([
  {
    // Layout principal contenant le Header, le Footer et l'Outlet de navigation
    path: "/",
    element: <MainLayout />,
    children: [

      /* ------------------------------------------
         ROUTES PUBLIQUES ET GENERALES
         ------------------------------------------ */
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },

      /* ------------------------------------------
         AUTHENTIFICATION & COMPTE UTILISATEUR
         ------------------------------------------ */
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },

      /* ------------------------------------------
         MODULE COURS (ACCÈS PUBLIC)
         ------------------------------------------ */
      {
        path: "courses",
        element: <CoursesPage />,
      },
      {
        path: "courses/:id",
        element: <CourseDetailPage />,
      },

      /* ------------------------------------------
         MODULE ARTICLES (ACCÈS PUBLIC)
         ------------------------------------------ */
      {
        path: "articles",
        element: <ArticlesPage />,
      },
      {
        path: "articles/:id",
        element: <ArticleDetailPage />,
      },

      /* ------------------------------------------
         MODULE PROFESSIONNELS (ACCÈS PUBLIC)
         ------------------------------------------ */
      {
        path: "professionals",
        element: <ProfessionalsPage />,
      },
      {
        path: "professionals/:id",
        element: <ProfessionalDetailPage />,
      },

      /* ------------------------------------------
         ESPACE PROFESSIONNEL (SÉCURISÉ - RÔLE : "professional")
         ------------------------------------------ */
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

      /* ------------------------------------------
         ACTIONS DE CRÉATION & MODIFICATION
         (SÉCURISÉES - RÔLES : "professional" OU "admin")
         ------------------------------------------ */
      // Professionnels :
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
      // Articles :
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
      // Cours :
      {
        path: "courses/create",
        element: (
          <ProtectedRoute roles={["professional", "admin"]}>
            <CreateCoursePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "courses/edit/:id",
        element: (
          <ProtectedRoute roles={["professional", "admin"]}>
            <EditCoursePage />
          </ProtectedRoute>
        ),
      },

      /* ------------------------------------------
         ESPACE ADMINISTRATION (SÉCURISÉ - RÔLE : "admin")
         ------------------------------------------ */
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

    ],
  },
]);

export default router;
