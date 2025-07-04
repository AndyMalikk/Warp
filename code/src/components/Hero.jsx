import React from "react";
import videoBg from "../../public/imgs/bg-video-timelapse-final.mp4";
import Button from "./Button";
import { Link } from "react-router-dom";
import { easeOut, motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Hero = (props) => {
  return (
    <div className="relative w-full h-screen mb-16 lg:mb-40 overflow-hidden">
      {/* OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10"></div>
      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-20 page-width flex flex-col justify-center h-full text-white mx-4"
      >
        <motion.p variants={item} className="paragraph text-accent mb-6 mx-5">
          {props.subheading}
        </motion.p>

        <motion.h1
          variants={item}
          className="hero-heading max-w-[800px] mb-8 mx-4"
        >
          {props.heading}
        </motion.h1>

        <motion.div variants={item}>
          <Link to="/kontakty">
            <Button label="Chci web" className="button mx-4" />
          </Link>
        </motion.div>
      </motion.div>

      {/* VIDEO BACKGROUND */}
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
    </div>
  );
};

export default Hero;
