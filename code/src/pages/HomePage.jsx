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
        heading="Moderní webové stránky na míru."
      />
      <Intro />
      <PortfolioShowcase
        items={[
          { src: "./imgs/PenzionKytlice.png", alt: "Web penzionu Kytlice" },
          {
            src: "./imgs/VOblacich.png",
            alt: "Webová stránka restaurace V Oblacích",
          },
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
        Co nabízím?
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
        body="Navrhuji, jak bude váš web vypadat a jak se na něm budou lidé pohybovat. Zaměřuji se na moderní, přehledný a uživatelsky přívětivý design, který dává smysl a vypadá skvěle na všech zařízeních."
        img="./imgs/MobileUI-UX-amico.png"
        linkShown={true}
      />
      <Card
        subheading="2."
        heading="WEB DEVELOPMENT"
        body="Váš web nejen navrhnu, ale také postavím. Od jednoduchých prezentací až po složitější funkce (např. rezervační systémy) – postarám se o to, aby vše fungovalo rychle, bezpečně a spolehlivě."
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
