import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import PortfolioShowcase from "../components/PortfolioShowcase";
import Review from "../components/Review";
import Footer from "../components/Footer";
import TextSection from "../components/TextSection";
import Card from "../components/Card";
import FAQ from "../components/FAQ";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero
        subheading="Buďte vidět. Buďte online."
        heading="Buďte tam kde vás zákazníci hledají"
      />
      <Intro />
      <PortfolioShowcase
        items={[
          { src: "./imgs/PenzionKytlice.png", alt: "Web penzionu Kytlice" },
          { src: "./imgs/VOblacich.png", alt: "Webová stránka restaurace V Oblacích" },
          { src: "./imgs/Valhalla.png", alt: "Web tělocvičny Valhalla" },
          { src: "./imgs/Abstract.png", alt: "Kopie webu Abstract" },
        ]}
      />
      <TextSection
        heading="Webové stránky nemusí stát statisíce."
        body="Nabízím webové stránky za dostupné ceny, ideální pro malé byznysy a začínající podnikatele."
      />
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.8 }}
        className="text-white paragraph mb-4 text-center"
      >
        Moje Role
      </motion.h3>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.8 }}
        className="heading text-center mb-16"
      >
        Služby
      </motion.h2>

      <Card
        subheading="1."
        heading="UI/UX Design"
        body="Navrhuji rozhraní, která zaujmou vzhledem a usnádní práci vašim zákazníkům. Kladu důraz na jednoduchost, přhlednost a pohodlí při používání."
        img="./imgs/MobileUI-UX-amico.png"
        linkShown={true}
      />
      <Card
        subheading="2."
        heading="WEB DEVELOPMENT"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sit amet lorem nec viverra. Etiam libero nisi."
        img="./imgs/Open source-amico.png"
        linkShown={true}
        reverse={true}
      />
      <Review
        reviewText="'Práce proběhla výborně. Byli jsme nadšeni z rychlosti vývoje i z
        celkového výsledku.'"
        name="Jana Nováková"
        reviewImg="./imgs/EmptyIMG.jpg"
      />
      <Footer />
    </>
  );
};

export default HomePage;
