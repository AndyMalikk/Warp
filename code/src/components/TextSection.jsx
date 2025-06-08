import React from "react";
import { motion } from "framer-motion";

const TextSection = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.6 }}
      className="flex flex-col items-center justify-center mb-20 lg:mb-60 p-4"
    >
      <h2 className="textSection-heading text-center mb-8">{props.heading}</h2>
      <p className="paragraph text-center text-white max-w-[40rem]">{props.body}</p>
    </motion.div>
  );
};

export default TextSection;
