import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Events } from "./pages/Events";
// import { Updates } from "./pages/Updates";
import { Projects } from "./pages/Projects";
import { Gallery } from "./pages/Gallery";
import { Schedule } from "./pages/Schedule";
import { Teams } from "./pages/Teams";
import { Register } from "./pages/Register";
import { Guests } from "./pages/Guest";
// import { Admin } from "./pages/Admin";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "events", Component: Events },
      { path: "guests", Component: Guests },
      { path: "projects", Component: Projects },
      { path: "gallery", Component: Gallery },
      { path: "schedule", Component: Schedule },
      { path: "teams", Component: Teams },
      { path: "register", Component: Register },
    ],
  },
  // {
  //   path: "/admin",
  //   Component: Admin,
  // },
]);
