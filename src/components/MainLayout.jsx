import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Scrolling from "./Scrolling/Scrolling";
import Middlebar from "./middlebar/Middlebar";

const MainLayout = () => {
  const location = useLocation();

  // 🔥 Handle anchor scroll (#top)
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "instant" }); // change to "smooth" if needed
      }
    }
  }, [location]);

  return (
    <>
      {/* 🔥 TOP ANCHOR */}
      <div id="top"></div>

      {/* Sticky Header Section */}
      <div className="sticky top-0 z-20">
        <Scrolling />
        <Middlebar />
        <NavBar />
      </div>

      {/* Page Content */}
      <Outlet />

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        
        <a
          href="/Submission"
          className="bg-blue-800 hover:bg-blue-700 text-white hover:text-yellow-400 px-4 py-3 rounded-xl shadow-lg text-sm font-semibold transition-all duration-300"
        >
          Submit Paper
        </a>

        <a
          href="/RegistrationFee"
          className="bg-blue-800 hover:bg-blue-700 text-white hover:text-yellow-400 px-4 py-3 rounded-xl shadow-lg text-sm font-semibold transition-all duration-300"
        >
          Register Now
        </a>

      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;