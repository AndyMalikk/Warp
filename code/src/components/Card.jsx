import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      {/*Make reusable ? */}
      {/* container */}
      <div className={`flex flex-col-reverse items-center p-4 gap-24 mb-20 page-width !!!!md:flex-row md:justify-around lg:mb-60 ${props.reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
        {/* text container*/}

        <div className="lg:w-1/2">
          <div className="border-l-[1px] border-accent p-8">
            <p className="text-white paragraph mb-4">{props.subheading}</p>
            <h2 className="heading-white mb-8">{props.heading}</h2>
            <p className="paragraph text-white max-w-[40rem] mb-8">{props.body}</p>
            {props.linkShown ? (
              <Link
                to="/sluzby"
                className="text-white underline hover:text-accent"
              >
                Číst více
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* img container */}
        <div className="w-[75%] lg:w-1/2">
          <img
            src={props.img}
            alt=""
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
