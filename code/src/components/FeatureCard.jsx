import React from "react";
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

const FeatureCard = ({ icon, title, description }) => {
  return (
    <>
      <motion.div
        variants={item}
        className=" p-8 rounded-2xl border border-gray-400 text-center transition- cursor-default"
      >
        <div className="text-accent mb-6 flex justify-center">{icon}</div>
        <h4 className="heading2 mb-4">{title}</h4>
        <p className="paragraph-white">{description}</p>
      </motion.div>
    </>
  );
};

export default FeatureCard;
