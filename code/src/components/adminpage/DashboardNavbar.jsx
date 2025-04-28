import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChartBar, FaSignOutAlt, FaUser, FaClipboardList } from "react-icons/fa";

const DashboardNavbar = () => {
  const SideBarIcon = ({ icon }) => <div className="dashboard-sidebar-icon">{icon}</div>;

  return (
    <>
      <nav className="bg-primary fixed top-0 w-full border-b border-darkSecondary shadow-md z-40">
        <ul className="w-full top-0 h-[75px] list-none flex items-center my-2">
          <li className="mr-auto mx-4 z-50">
            <img
              src="../imgs/warp-logo.png"
              alt=""
              className="logo"
            />
          </li>
          <li className="mx-4">
            <SideBarIcon icon={<FaUser size="28" />} />
          </li>
        </ul>
      </nav>
      <div className="fixed top-[90px] left-0 h-[calc(100vh-90px)] w-20 flex flex-col bg-darkSecondary justify-between">
        {/* Top icons */}
        <div className="flex flex-col">
          <Link to="/admin/dashboard/home">
            <SideBarIcon icon={<FaHome size="28" />} />
          </Link>
          <Link to="/admin/dashboard/projects">
            <SideBarIcon icon={<FaClipboardList size="28" />} />
          </Link>
          <Link to="/admin/dashboard/analytics">
            <SideBarIcon icon={<FaChartBar size="28" />} />
          </Link>
        </div>

        {/* Bottom (Logout) icon */}
        <div className="mb-4">
          <SideBarIcon icon={<FaSignOutAlt size="28" />} />
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;
