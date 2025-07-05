import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import portfolioVector from "/imgs/Resume-folder-bro.png";

const PortfolioPage = () => {
  return (
    <>
      <Navbar />
      <Hero heading="Tvořím weby které fungují" img={portfolioVector} />
      <Portfolio />
      <Footer />
    </>
  );
};

export default PortfolioPage;
