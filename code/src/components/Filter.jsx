import React from "react";
import { useEffect } from "react";

const Filter = ({
  setActiveType,
  activeType,
  setFiltered,
  portfolioWebsites,
}) => {
  /*if active type is 0 (all) then setFiltered as portfolioWebsites (all websites) */
  useEffect(() => {
    if (activeType === 0) {
      setFiltered(portfolioWebsites);
      return;
    }
    /* else set state to filtered website based on the activeType*/
    const filtered = portfolioWebsites.filter(
      (website) => website.typeId === activeType
    );
    setFiltered(filtered);
  }, [activeType]); /*Refresh everytime activeType changes */
  return (
    <>
      <div className="page-width mb-8">
        <button
          onClick={() => setActiveType(0)}
          className={`button-filter ${
            activeType === 0 ? "button-filter-active" : ""
          }`}
        >
          Vše
        </button>
        <button
          onClick={() => setActiveType(1)}
          className={`button-filter ${
            activeType === 1 ? "button-filter-active" : ""
          }`}
        >
          Business
        </button>
        <button
          onClick={() => setActiveType(2)}
          className={`button-filter ${
            activeType === 2 ? "button-filter-active" : ""
          }`}
        >
          Ubytování/Restaurace
        </button>
        <button
          onClick={() => setActiveType(3)}
          className={`button-filter ${
            activeType === 3 ? "button-filter-active" : ""
          }`}
        >
          Osobní
        </button>
      </div>
    </>
  );
};

export default Filter;
