import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import "../styles/layout.css";

export default function MainLayout() {
  return (
    <div className="app-layout">

      <Sidebar />

      <div className="main-content">

        <Header />

        <main className="page-content">
          <Outlet />
        </main>

        <Footer />

      </div>

    </div>
  );
}
