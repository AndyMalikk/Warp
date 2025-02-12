import React from "react";

const TextSection = (props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-20 lg:mb-60 p-4">
        <h2 className="textSection-heading text-center mb-8">{props.heading}</h2>
        <p className="paragraph text-center text-white max-w-[40rem]">{props.body}</p>
      </div>
    </>
  );
};

export default TextSection;
