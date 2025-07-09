import React from "react";
import { useState, useEffect } from "react";
import Website from "./Website";
import Filter from "./Filter";
import { motion } from "framer-motion";
const Portfolio = () => {
  const [portfolioWebsites, setPortfolioWebsites] = useState([]);
  const [filtered, setFiltered] = useState([]);
  {
    /*active type of filter */
  }
  const [activeType, setActiveType] = useState(0);
  useEffect(() => {
    //typeIds: 0 - vse, 1 - business, 2 - ubytovani/restaurace, 3 - osobni

    //websites array of objects
    const websites = [
      {
        title: "Medová oáza Kytlice",
        src: "./imgs/PenzionKytlice.png",
        alt: "Webová stránka Penzion Kytlice",
        typeId: 2,
        id: "2",
        link: "https://medovaoazakytlice.cz/",
      },
      {
        title: "V Oblacích",
        src: "./imgs/VOblacich.png",
        alt: "W/ebová stránka V Oblacích",
        typeId: 2,
        id: "3",
        link: "https://voblacich.infinityfreeapp.com/?i=1",
      },
      {
        title: "Valhalla",
        src: "./imgs/Valhalla.png",
        alt: "Webová stránka Valhalla",
        typeId: 1,
        id: "1",
        link: "https://andymalikk.github.io/Valhalla/",
      },
    ];

    /*Settign array of objects in states*/

    setPortfolioWebsites(websites);
    setFiltered(websites);
  }, []);

  return (
    <>
      {/* Setting attributes for Filter.jsx for changing  */}
      <Filter
        portfolioWebsites={portfolioWebsites}
        setFiltered={setFiltered}
        activeType={activeType}
        setActiveType={setActiveType}
      />
      {/*portfolio cards */}
      <motion.div
        layout
        className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-x-4 gap-y-8 page-width px-4 mb-16 lg:mb-40"
      >
        {/* displays all websites from the filtered state */}
        {filtered.map((website) => {
          return <Website key={website.id} website={website} />;
        })}
      </motion.div>
    </>
  );
};

export default Portfolio;
