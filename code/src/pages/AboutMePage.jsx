import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import TextSection from "../components/TextSection";
import FAQ from "../components/FAQ";

const AboutMePage = () => {
  return (
    <>
      Webové stránky jsem původně tvořil pouze pro zábavu, jako způsob jak vyjádřit své kreativní nápady. Postupem času jsem si uvědomil, že svými schopnostmi můžu pomáhat podnikatelům. Mým cílem je
      vytvořit pro vás webovou stránku, která bude plně odpovídat vašim potřebám a představám. Stránku, která bude moderní, přehledná a snadno ovladatelná pro vaše zákazníky. Pokud hledáte partnera,
      který vám pomůže s vaší online prezentací, neváhejte mě kontaktovat. Rád si s vámi popovídám o vašich projektech a představách a společně najdeme to nejlepší řešení pro vás. Těším se na naši
      spolupráci!
      <Navbar />
      <Hero heading="Záleží mi na vašem úspěchu" />
      <TextSection
        heading="Jsem student, vývojář a designer"
        body={
          <>
            <p>Webové stránky jsem původně tvořil pouze pro zábavu, jako způsob jak vyjádřit své kreativní nápady. Postupem času jsem si uvědomil, že svými schopnostmi můžu pomáhat podnikatelům.</p>
            <br />
            <p>Mým cílem je vytvořit pro vás webovou stránku, která bude plně odpovídat vašim potřebám a představám. Stránku, která bude moderní, přehledná a snadno ovladatelná pro vaše zákazníky.</p>
            <br />
            <p>
              Pokud hledáte partnera, který vám pomůže s vaší online prezentací, neváhejte mě kontaktovat. Rád si s vámi popovídám o vašich projektech a představách a společně najdeme to nejlepší
              řešení pro vás. Těším se na naši spolupráci!
            </p>
          </>
        }
      />
      <Footer />
    </>
  );
};

export default AboutMePage;
