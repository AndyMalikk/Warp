import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Button";

const container = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Intro = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="flex flex-col-reverse items-center p-4 gap-24 mb-16 page-width md:flex-row md:justify-around lg:my-40"
    >
      {/* Text container */}
      <motion.div variants={item} className="lg:w-1/2">
        <h3 className="text-white paragraph mb-4">Co dělám?</h3>
        <h2 className="heading mb-8">Webové stránky na zakázku</h2>
        <p className="paragraph text-white max-w-[600px] mb-8">
          Warp je česká digitální agentura, která pomáhá firmám vyniknout
          online. <br />
          Vytvářím klientům webové stránky, které nejen že dobře vypadají, ale
          také jim dávají na trhu výhodu.
        </p>
        <Link to="/kontakty">
          <Button label="Chci web" className="button" />
        </Link>
      </motion.div>

      {/* Image container */}
      <motion.div variants={item} className="w-[75%] lg:w-1/2">
        <img
          src="./imgs/Pairprogramming-bro.png"
          className="w-full rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
};

export default Intro;
