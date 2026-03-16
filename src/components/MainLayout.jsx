
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Scrolling from "./Scrolling/Scrolling";
import Middlebar from "./middlebar/Middlebar";
const MainLayout = () => {
  return (
    <>
      <div className="sticky top-0 z-20">
        <Scrolling />
        <Middlebar />
        <NavBar />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
