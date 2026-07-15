import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Sécurise l'accès à n'importe quelle route de l'application
export default function ProtectedRoute({ children, role, roles }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const allowedRoles = roles || (role ? [role] : null);

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
