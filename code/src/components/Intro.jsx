import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <>
        {/*Make reusable ? */}
        {/* container */}
        <div className="flex flex-col-reverse items-center p-4 gap-24 mb-16 page-width md:flex-row md:justify-around lg:my-40">
          {/* text container*/}
          <div className="lg:w-1/2">
            <h3 className="text-white paragraph mb-4">Co dělám?</h3>
            <h2 className="heading mb-8">Webové stránky na zakázku</h2>
            <p className="paragraph text-white max-w-[600px] mb-8">
              Warp je česká digitální agentura, která pomáhá firmám vyniknout online. <br />
              Vytvářím našim klientům webové stránky, které nejen že dobře vypadají, ale také jim dávají na trhu výhodu.
            </p>
            <Link to="/kontakty">
              <Button
                label="Chci web"
                className="button"
              />
            </Link>
          </div>
          {/* img container */}
          <div className="w-[75%] lg:w-1/2">
            <img
              src="./public/imgs/Pairprogramming-bro.png"
              alt=""
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </>
    </>
  );
};

export default Intro;
