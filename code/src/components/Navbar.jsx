import { React, useState, useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  /*Function handling onClick events */
  function toggleSideBar() {
    setSidebarVisible(() => !sidebarVisible);
  }

  return (
    <nav className="bg-transparent fixed top-0 w-full z-50">
      {/*SIDEBAR*/}
      <ul
        id="sidebar"
        className={`fixed top-0 right-0 h-[100vh] w-full sm:w-[350px] z-50 bg-black-blur shadow-sm nav-text flex-col items-end justify-start backdrop-blur-md
        ${
          /*IF sidebarVisible = true the sidebar becomes visible*/
          sidebarVisible ? "flex" : "hidden"
        }`}
      >
        <li onClick={toggleSideBar} className="h-[75px]">
          <div className="nav-a">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 -960 960 960"
              width="28px"
              fill="#e8eaed"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
        </li>
        <li className="h-[75px]">
          <Link to="/o-mne" className="nav-a">
            O mně
          </Link>
        </li>
        <li className="h-[75px] w-full">
          <Link to="/portfolio" className="nav-a">
            Portfolio
          </Link>
        </li>
        <li className="h-[75px] w-full">
          <Link to="/sluzby" className="nav-a">
            Služby
          </Link>
        </li>
        <li className="h-[75px]">
          <Link to="/kontakty" className="nav-a">
            <Button label="Kontaktovat" className="button" />
          </Link>
        </li>
      </ul>
      {/*DESKTOP*/}
      <ul className="nav-text w-full sticky top-0 h-[75px] list-none flex justify-end items-center page-width mt-2">
        <li className=" mr-auto">
          <Link to="/" className="nav-a">
            <img src="./imgs/warp-logo.png" alt="Warp logo" className="logo" />
          </Link>
        </li>
        <li className=" nav-li">
          <Link to="/o-mne" className="nav-a">
            O mně
          </Link>
        </li>
        <li className="nav-li">
          <Link to="/portfolio" className="nav-a">
            Portfolio
          </Link>
        </li>
        <li className=" nav-li">
          <Link to="/sluzby" className="nav-a">
            Služby
          </Link>
        </li>
        <li className=" nav-li">
          <Link to="/kontakty" className="nav-a">
            <Button label="Kontaktovat" className="button" />
          </Link>
        </li>
        <li onClick={toggleSideBar}>
          <div className="nav-a lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 -960 960 960"
              width="28px"
              fill="#e8eaed"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
