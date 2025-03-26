import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFoundPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import AboutMePage from "./pages/AboutMePage";
import PortfolioPage from "./pages/PortfolioPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

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
    path: "/admin/dashboard",
    element: <Dashboard />,
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
