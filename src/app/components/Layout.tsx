import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import bgDesktop from "../media/background.png";
import bgMobile from "../media/background-mobile.png";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url(${bgDesktop})`, transform: "translateZ(0)", willChange: "transform" }}
        aria-hidden="true"
      />
      <div
        className="fixed top-0 left-0 w-full h-[100lvh] -z-10 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${bgMobile})`, transform: "translateZ(0)", willChange: "transform" }}
        aria-hidden="true"
      />
      <div
        className="fixed top-0 left-0 w-full h-[100lvh] md:inset-0 md:h-auto -z-10 bg-gradient-to-b from-background/45 via-background/60 to-background/80"
        style={{ transform: "translateZ(0)", willChange: "transform" }}
        aria-hidden="true"
      />

      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
