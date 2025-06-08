import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import TextSection from "../components/TextSection";
import Card from "../components/Card";
import Tabs from "../components/Tabs";
import Mag from "../../public/icons/mag.svg";
import Pencil from "../../public/icons/pencil-solid.svg";
import Content from "../../public/icons/copy-solid.svg";
import Network from "../../public/icons/network-wired-solid.svg";
import Code from "../../public/icons/code-solid.svg";
import Bolt from "../../public/icons/bolt-solid.svg";
import { motion } from "framer-motion";
const ServicePage = () => {
  return (
    <>
      <Navbar />
      <Hero heading="Služby které nabízím" />

      <Card
        subheading="1."
        heading="UI/UX Design"
        body=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam risus, eu cursus velit scelerisque eget. Sed quis maximus purus, sed lacinia leo. Sed ultrices consequat massa, eget congue metus posuere quis. "
        img="./imgs/MobileUI-UX-amico.png"
      />
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.8 }}
        className="heading-white page-width mb-16 p-4"
      >
        Můj postup práce při <span className="text-accent">UI/UX Designu</span>
      </motion.h3>
      <Tabs
        number="1."
        title="Rešerše"
        svg={Mag}
        items={["Analýza konkurence", "Výzkum uživatelů", "Inspirace"]}
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Tabs
        number="2."
        title="Návrh"
        svg={Network}
        items={["Návrh struktury", "Domluva s klientem"]}
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Tabs
        number="3."
        title="Design"
        svg={Pencil}
        items={["Viuzální design", "Uživatelského rozhraní", "Uživatelská zkušenost", "Responzivita"]}
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Tabs
        number="4."
        title="Doplnění obsahu"
        svg={Content}
        items={["Vložení textu", "Vložení obrázků"]}
      />
      <div className="mb-16 lg:mb-40"></div>

      <Card
        subheading="2."
        heading="WEB DEVELOPMENT"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sit amet lorem nec viverra. Etiam libero nisi. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam risus, eu cursus velit scelerisque eget. Sed quis maximus purus, sed lacinia leo. Sed ultrices consequat massa, eget congue metus posuere quis. "
        img="./imgs/Open source-amico.png"
        reverse={true}
      />
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.8 }}
        className="heading-white page-width mb-16 p-4"
      >
        Můj postup práce při <span className="text-accent">Web Developmentu</span>
      </motion.h3>
      <Tabs
        number="1."
        title="Rešerše"
        svg={Mag}
        items={["Analýza konkurence", "Výzkum uživatelů", "Inspirace"]}
      />

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Tabs
        number="2."
        title="Vývoj"
        svg={Code}
        items={["Kódování", "Testování", "Opravy"]}
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Tabs
        number="3."
        title="Doplnění obsahu"
        svg={Content}
        items={["Vložení textu", "Vložení obrázků"]}
      />

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Tabs
        number="4."
        title="Optimalizace"
        svg={Bolt}
        items={["Zrychlení načítání", "Search Engine Optimalization", "Zlepšení přístupnosti"]}
      />

      <div className="mb-20 lg:mb-40"></div>
      <Footer />
    </>
  );
};

export default ServicePage;
