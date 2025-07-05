import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { easeOut, motion } from "framer-motion";
import devices from "/imgs/Devices-bro.png";

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
    <div className="w-full h-screen mb-16 lg:mb-40 overflow-hidden relative">
      {/* OVERLAY WITH LINEAR GRADIENT USING TAILWIND ARBITRARY VALUES */}
      <div
        className="absolute top-0 left-0 w-full h-full z-10
                   bg-[linear-gradient(145deg,rgba(2,128,76,1)_0%,rgba(20,19,24,1)_50%)]" // <--- Updated gradient here
      ></div>

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-20 page-width flex flex-col lg:flex-row justify-center lg:justify-between items-center h-full text-white mx-4"
      >
        {/* Text Content */}
        <div className="flex flex-col justify-center items-start lg:w-[75%] mb-8 lg:mb-0">
          <motion.p variants={item} className="paragraph text-accent mb-6 mx-5">
            {props.subheading}
          </motion.p>
          <motion.h1
            variants={item}
            className="hero-heading max-w-[800px] mb-8 mx-4 font-semibold"
          >
            {props.heading}
          </motion.h1>
          <motion.div variants={item}>
            <Link to="/kontakty">
              <Button label="Chci web" className="button mx-4" />
            </Link>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          variants={item}
          className="hidden lg:flex lg:w-1/2 justify-end"
        >
          <img src={props.img} className="w-full rounded-lg max-w-xl" />
        </motion.div>
      </motion.div>

      {/* SVG WAVE AT THE BOTTOM */}
      <div
        className="absolute bottom-0 left-0 w-full z-20 overflow-hidden lg:max-h-64 xl:max-h-80"
        style={{ pointerEvents: "none" }}
      >
        <svg
          width="100%"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 L 0,150 C 138.14285714285714,120.60714285714286 276.2857142857143,91.21428571428571 384,96 C 491.7142857142857,100.78571428571429 569,139.75000000000003 691,170 C 813,200.24999999999997 979.7142857142858,221.78571428571428 1112,217 C 1244.2857142857142,212.21428571428572 1342.142857142857,181.10714285714286 1440,150 L 1440,400 L 0,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="#161519"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
      </div>

      {/* VIDEO BACKGROUND */}
      {/* (commented out as before) */}
    </div>
  );
};

export default Hero;
