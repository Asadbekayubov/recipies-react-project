import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import BreadCrupms from "../components/BreadCrupms";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="align-elements">
        <BreadCrupms />
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
