import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";

export default function AdminLayout() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "40px",
          background: "#F8F7F2",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
