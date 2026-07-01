import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function MainLayout() {

  return (

    <div className="layout">

      <Sidebar />

      <div className="content">

        <Topbar />

        <main>

          <Outlet />

        </main>

      </div>

    </div>

  );

}
