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
        src: "./public/imgs/PenzionKytlice.png",
        alt: "webová stránka Penzion Kytlice",
        typeId: 2,
        id: "2",
      },
      {
        title: "V Oblacích",
        src: "./public/imgs/VOblacich.png",
        alt: "webová stránka V Oblacích",
        typeId: 2,
        id: "3",
      },
      {
        title: "Valhalla",
        src: "./public/imgs/Valhalla.png",
        alt: "webová stránka Valhalla",
        typeId: 1,
        id: "1",
      },

      {
        title: "Abstract",
        src: "./public/imgs/abstract.png",
        alt: "webová stránka Abstract",
        typeId: 1,
        id: "4",
      },
      {
        title: "Alpen Tesitin",
        src: "./public/imgs/AlpenTesitin.png",
        alt: "webová stránka Alpen Tesitin",
        typeId: 2,
        id: "5",
      },
      {
        title: "Leeroy",
        src: "./public/imgs/Leeroy.png",
        alt: "webová stránka Leeroy",
        typeId: 1,
        id: "6",
      },
      {
        title: "Michael Aust",
        src: "./public/imgs/MichaelAust.png",
        alt: "webová stránka Michaela Austa",
        typeId: 3,
        id: "7",
      },
      {
        title: "Weglot",
        src: "./public/imgs/Weglot.png",
        alt: "webová stránka Weglot",
        typeId: 1,
        id: "8",
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
        layout //motion animation method
        className="grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-x-4 gap-y-8 page-width px-4 mb-16 lg:mb-40"
      >
        {/* displays all websites from the filtered state */}
        {filtered.map((website) => {
          return (
            <Website
              key={website.id}
              website={website}
            />
          );
        })}
      </motion.div>
    </>
  );
};

export default Portfolio;
