import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFoundPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import AboutMePage from "./pages/AboutMePage";
import PortfolioPage from "./pages/PortfolioPage";
import Login from "./pages/Login";
import DashboardProjects from "./dashboard/DashboardProjects";
import DashboardHome from "./dashboard/DashboardHome";
import DashboardAnalytics from "./dashboard/DashboardAnalytics";

/*routing through the web app with an array of objects stating their path and what they should load*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/o-mne",
    element: <AboutMePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/sluzby",
    element: <ServicePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/kontakty",
    element: <ContactPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/admin",
    element: <Login />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/admin/dashboard/home",
    element: <DashboardHome />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/admin/dashboard/projects",
    element: <DashboardProjects />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/admin/dashboard/analytics",
    element: <DashboardAnalytics />,
    errorElement: <NotFoundPage />,
  },
]);
const App = () => {
  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
};

export default App;
