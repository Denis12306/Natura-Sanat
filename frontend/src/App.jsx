import { RouterProvider } from "react-router-dom";
import router from "./router";

// Composant Racine de l'Application (App) qui permet d'orienter sur toutes les routes
export default function App() {
  return <RouterProvider router={router} />;
}
