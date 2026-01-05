import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

const Deshboard = () => {
  return (
   <div className="layout">
  <aside className="sidebar">
    <SideBar />
  </aside>

  <div className="main">
    <Navbar />
    <div className="content">
      <Outlet />
    </div>
  </div>
</div>

  );
};

export default Deshboard;
