import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaEnvelope, FaSignOutAlt, FaUser, FaClipboardList } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext2";
import ModalLogout from "../Modals/ModalLogout";

const DashboardNavbar = () => {
  const SideBarIcon = ({ icon }) => <div className="dashboard-sidebar-icon">{icon}</div>;
  const [open, setOpen] = useState(false);
  const { logout } = useAuth();

  return (
    <>
      <nav className="bg-primary fixed top-0 w-full border-b border-darkSecondary shadow-md z-1">
        <ul className="w-full top-0 h-[75px] list-none flex items-center my-2">
          <li className="mr-auto mx-4 z-50">
            <img
              src="/imgs/warp-logo.png"
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
          <Link to="/admin/dashboard/clipboard">
            <SideBarIcon icon={<FaEnvelope size="28" />} />
          </Link>
        </div>

        {/* Bottom (Logout) icon */}
        <div
          className="mb-4"
          onClick={() => setOpen(true)}
        >
          <SideBarIcon icon={<FaSignOutAlt size="28" />} />

          {/*MODAL LOGOUT*/}
          <ModalLogout
            open={open}
            onClose={() => setOpen(false)}
          >
            <h4 className="heading2 text-center mt-16">Odhlásit se?</h4>
            <p className="paragraph text-gray-200 text-center mt-4">Opravdu si přejete se odhlásit?</p>
            <div className="flex flex-row justify-center mt-20 gap-4">
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-700 text-white font-karla-regular rounded-full px-4 py-2"
              >
                Odhlásit se
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                }}
                className=" text-white font-karla-regular rounded-full px-4 py-2"
              >
                Zrušit
              </button>
            </div>
          </ModalLogout>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;
