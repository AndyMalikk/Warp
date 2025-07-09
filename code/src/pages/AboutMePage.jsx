import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import TextSection from "../components/TextSection";
import FAQ from "../components/FAQ";
import { FaPaintBrush, FaCode, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import reviewImg from "/public/imgs/EmptyIMG.jpg";
import aboutme from "/public/imgs/aboutme2.png";
import aboutMeVector from "/imgs/About-me-bro.png";
import FeatureCard from "../components/FeatureCard";

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
      <Hero heading="Záleží mi na vašem úspěchu" img={aboutMeVector} />

      {/* About Me Section */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="page-width mb-40 lg:mb-60 px-4 textcenter-"
      >
        <div className="max-w-[700px] mx-auto">
          <motion.img
            variants={item}
            src={aboutme}
            alt="Ondřej Malík, zakladatel agentury"
            className="rounded-full w-32 h-32 lg:w-52 lg:h-52 mx-auto mb-12"
          />
          <motion.p variants={item} className="paragraph-white mb-6">
            Žiju v Děčíně a studuju na střední škole Resslova 5 obor informační
            technologie se zaměřením na programování a datové sítě.
          </motion.p>

          <motion.p variants={item} className="paragraph-white mb-6">
            Webové stránky buduji, protože rád vyjadřuji své kreativní nápady,
            baví mě vytvářet nové věci a chci vidět výsledky své práce v reálném
            čase.
          </motion.p>

          <motion.p variants={item} className="paragraph-white">
            Vyrůstal jsem v Česku, ale jednou bych rád žil v zahraničí. Mám rád
            box, design, robotiku, čtení, stříhání videí a trávení času s
            přáteli.
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
            description="Pro budování používám Wordpress který zaručí špičkovou kvalitu."
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
          Neváhejte mě kontaktovat a říct mi o vašem projektu.
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

export default AboutMePage;
