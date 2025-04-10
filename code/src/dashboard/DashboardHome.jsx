import React from "react";
import DashboardNavbar from "../components/adminpage/DashboardNavbar";

const DashboardHome = () => {
  return (
    <>
      <DashboardNavbar />
      <div className="ml-24 mt-28 p-6">
        {/*here username*/}
        <h2 className="heading-white">Vítejte Andy</h2>
        <div className="flex gap-24 mt-8">
          <div className="h-[24rem] w-[36rem] bg-darkAccent rounded-lg p-8 flex flex-col justify-between">
            <h3 className="heading2 ">Nových zákazníků:</h3>
            <p className="hero-heading justify-end">11</p>
          </div>
          <div className="h-[24rem] w-[36rem] bg-darkAccent rounded-lg p-8 flex flex-col justify-between">
            <h3 className="heading2 ">Hotových zakázek:</h3>
            <p className="hero-heading justify-end">4</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
