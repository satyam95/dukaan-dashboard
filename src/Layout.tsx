import { Outlet } from "react-router-dom";
import SidebarNavbar from "./components/SidebarNavbar";

function Layout() {
  return (
    <div className="flex max-h-screen">
      <SidebarNavbar />
      <Outlet />
    </div>
  );
}

export default Layout;
