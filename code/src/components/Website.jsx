import React from "react";
import { motion } from "framer-motion";

//component for websites in PORTFOLIO
const Website = ({ website }) => {
  return (
    <>
      <motion.div layout>
        <h2 className="paragraph-white">{website.title}</h2>
        <img
          src={website.src}
          alt={website.alt}
          className="w-full h-[30vh] object-cover mb-4 rounded-xl"
        />
      </motion.div>
    </>
  );
};

export default Website;
