import { Navigate } from "react-router-dom";

// Permet de sécuriser l'accés aux routes Admin
export default function AdminRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}
