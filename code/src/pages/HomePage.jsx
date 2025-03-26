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

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero
        subheading="Buďte vidět. Buďte online."
        heading="Buďte tam kde vás zákazníci hledají"
      />
      <Intro />
      <PortfolioShowcase images={["./imgs/PenzionKytlice.png", "./imgs/VOblacich.png", "./imgs/Valhalla.png", "./imgs/Abstract.png"]} />
      <TextSection
        heading="Webové stránky nemusí stát statisíce."
        body="Nabízím webové stránky za dostupné ceny, ideální pro malé byznysy a začínající podnikatele."
      />
      <h3 className="text-white paragraph mb-4 text-center">Moje Role</h3>
      <h2 className="heading text-center mb-16">Služby</h2>

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
