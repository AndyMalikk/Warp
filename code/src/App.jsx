// App.jsx
import React, { useLayoutEffect } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
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

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sluzby" element={<ServicePage />} />
          <Route path="/kontakty" element={<ContactPage />} />
          <Route path="/o-mne" element={<AboutMePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </Wrapper>
    </Router>
  );
};

export default App;
