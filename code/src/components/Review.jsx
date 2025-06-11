import React from "react";

const Review = (props) => {
  return (
    <>
      <div className="bg-secondary mb-20 text-center p-12 lg:p-24 lg:mb-60">
        <p className="text-white paragraph mb-4 lg:mb-8">{props.reviewText}</p>
        <div className="flex justify-center items-center gap-3">
          <img
            src={props.reviewImg}
            alt="Paní Nováková, spokojená klientka"
            className="rounded-full w-[35px] h-[35px] lg:w-[45px] lg:h-[45px]"
          />
          <p className="text-white font-bold paragraph">{props.name}</p>
        </div>
      </div>
    </>
  );
};

export default Review;
