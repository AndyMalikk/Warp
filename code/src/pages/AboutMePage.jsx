import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import TextSection from "../components/TextSection";
import FAQ from "../components/FAQ";
import { FaPaintBrush, FaCode, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AboutMePage = () => {
  return (
    <>
      <Navbar />
      <Hero heading="Záleží mi na vašem úspěchu" />

      {/* About Me Section */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="page-width mb-40 lg:mb-60  px-4 text-center"
      >
        <div className="max-w-[700px] mx-auto">
          <motion.h2 variants={item} className="textSection-heading mb-8">
            Jsem student, vývojář a designer
          </motion.h2>

          <motion.p variants={item} className="paragraph-white mb-6">
            Webové stránky jsem původně tvořil pouze pro zábavu, jako způsob jak
            vyjádřit své kreativní nápady. Postupem času jsem si uvědomil, že
            svými schopnostmi můžu pomáhat podnikatelům.
          </motion.p>

          <motion.p variants={item} className="paragraph-white mb-6">
            Mým cílem je vytvořit webovou stránku na míru — moderní, přehlednou
            a snadno ovladatelnou pro vaše zákazníky.
          </motion.p>

          <motion.p variants={item} className="paragraph-white">
            Pokud hledáte partnera, který vám pomůže s vaší online prezentací,
            neváhejte mě kontaktovat. Společně najdeme to nejlepší řešení pro
            váš projekt.
          </motion.p>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-40 lg:mb-60 px-4"
      >
        <div className="page-width grid md:grid-cols-3 gap-10">
          <FeatureCard
            icon={<FaPaintBrush size={40} />}
            title="Design na míru"
            description="Moderní a přehledný design přesně podle vašich představ."
          />
          <FeatureCard
            icon={<FaCode size={40} />}
            title="Moderní technologie"
            description="Pro budování používám technologie jako Elementor které zaručí špičkovou kvalitu."
          />
          <FeatureCard
            icon={<FaHandshake size={40} />}
            title="Osobní přístup"
            description="Rád si vyslechnu vaše potřeby a společně najdeme to nejlepší řešení."
          />
        </div>
      </motion.section>

      {/* Call To Action */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="page-width mb-40 lg:mb-60 px-4 text-center"
      >
        <motion.h3 variants={item} className="heading-white mb-8">
          Pojďme začít spolupracovat!
        </motion.h3>
        <motion.p variants={item} className="paragraph-white mb-8">
          Neváhejte mě kontaktovat a pobavit se o vašem projektu.
        </motion.p>

        <motion.div variants={item}>
          <a href="/kontakt" className="button">
            Kontaktovat
          </a>
        </motion.div>
      </motion.section>

      <Footer />
    </>
  );
};

// Feature card component with animation
const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    variants={item}
    className="bg-darkSecondary p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform"
  >
    <div className="text-accent mb-6 flex justify-center">{icon}</div>
    <h4 className="heading2 mb-4">{title}</h4>
    <p className="paragraph-white">{description}</p>
  </motion.div>
);

export default AboutMePage;
