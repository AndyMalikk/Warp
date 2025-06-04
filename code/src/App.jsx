// App.jsx
import React from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext2"; // Import AuthProvider
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import AboutMePage from "./pages/AboutMePage";
import PortfolioPage from "./pages/PortfolioPage";
import Login from "./pages/Login";
import DashboardProjects from "./dashboard/DashboardProjects";
import DashboardHome from "./dashboard/DashboardHome";
import DashboardClipboard from "./dashboard/DashboardClipboard";
import PrivateRoute2 from "./context/PrivateRoute2"; // Import PrivateRoute

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
  // Protected Routes
  {
    path: "/admin/dashboard",
    element: <PrivateRoute2 />, // Protect this route
    children: [
      {
        path: "home",
        element: <DashboardHome />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "projects",
        element: <DashboardProjects />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "clipboard",
        element: <DashboardClipboard />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
