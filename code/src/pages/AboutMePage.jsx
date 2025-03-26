import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import TextSection from "../components/TextSection";
import FAQ from "../components/FAQ";

const AboutMePage = () => {
  return (
    <>
      <Navbar />
      <Hero heading="Záleží mi na vašem úspěchu" />
      <TextSection
        heading="Jsem student, vývojář a designer"
        body="Webové stránky jsem původně tvořil pouze pro zábavu, ale pak jsem si uvědomil, že svými schopnostmi můžu pomáhat živnostníkům a malým společnostem."
      />
      <Footer />
    </>
  );
};

export default AboutMePage;
