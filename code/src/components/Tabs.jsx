import React from "react";

const Tabs = (props) => {
  const listElements = props.items.map((item, index) => (
    <li
      key={index}
      className="bullet-list"
    >
      <span className="bullet-list-item"></span>
      <p className="paragraph-white">{item}</p>
    </li>
  ));
  return (
    <>
      {/*tabs section*/}
      <div className="flex-col">
        {/*tab*/}
        <div className="page-width flex flex-col md:flex-row gap-8 p-4">
          {/* Left */}
          <div className="md:w-1/2 flex items-center gap-8">
            {/* Image */}

            <img
              src={props.svg}
              alt=""
              className="h-[50px] w-[50px] "
            />
            {/* Text */}
            <div className="flex flex-col">
              <p className="paragraph-accent">{props.number}</p>
              <h3 className="heading2">{props.title}</h3>
            </div>
          </div>

          {/* Right */}
          <div className="md:w-1/2">
            <ul className="columns-2 space-y-2">{listElements}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
