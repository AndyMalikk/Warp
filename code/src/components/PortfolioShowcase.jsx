import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Portfolio = (props) => {
  return (
    <div className="bg-secondary mb-20 py-20 lg:mb-60 overflow-hidden">
      {/* Text container */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="text-center mb-8 pt-8"
      >
        <p className="paragraph text-white mb-4">Moje projekty</p>
        <h2 className="heading mb-8">Portfolio</h2>
      </motion.div>

      {/* Static image container */}
      <div className="flex flex-col md:flex-row md:justify-center md:flex-wrap lg:justify-center mb-4 md:mb-8">
        {props.items.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="w-full md:w-1/2 lg:w-1/4"
          />
        ))}
      </div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.6 }}
        className="flex justify-center items-center mt-12"
      >
        <Link to="/portfolio">
          <Button
            label="Zobrazit portfolio"
            className="button"
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default Portfolio;
