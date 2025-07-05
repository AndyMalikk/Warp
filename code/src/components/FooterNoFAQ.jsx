import React, { useState } from "react";
import Button from "./Button";
import Select from "react-select";
import FAQ from "./FAQ";
import { Link } from "react-router-dom";

const FooterNoFAQ = () => {
  /* OPTIONS FOR FORM SELECT */
  const options = [
    { value: "ui/ux-design", label: "UI/UX Design" },
    { value: "web-development", label: "Web Development" },
  ];

  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    selectedOptions: [],
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle Select input change
  const handleSelectChange = (selectedOptions) => {
    setFormData({
      ...formData,
      selectedOptions,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log form data to the console
  };

  // Custom styles for Select component
  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      border: "none",
      borderBottom: "1px solid rgba(107, 114, 128, 1)", // Only bottom border in gray
      boxShadow: "none",
      borderRadius: 0,
      paddingTop: "8px",
      paddingLeft: 0, // Remove any left padding
      fontFamily: "karla-regular, sans-serif",
      fontSize: "18px",
      "&:hover": {
        borderBottom: "1px solid rgba(107, 114, 128, 1)", // Slightly thicker border on hover
      },
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "#ffffff",
      fontStyle: "normal",
      fontFamily: "karla-regular, sans-serif",
      fontSize: "18px",
      paddingLeft: 0,
      paddingBottom: 3,
      marginLeft: -6,
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: "#161519",
      marginTop: 0,
      borderRadius: 0,
      border: "none",
      fontFamily: "karla-regular, sans-serif",
      fontSize: "18px",
    }),
    option: (styles, state) => ({
      ...styles,
      backgroundColor: state.isSelected ? "#333" : "#161519",
      color: state.isSelected ? "#fff" : "#ccc",
      fontFamily: "karla-regular, sans-serif",
      fontSize: "18px",
      "&:hover": {
        backgroundColor: "#333",
        color: "#fff",
      },
    }),
  };
  // Získá aktuální rok
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/*Form contacts section*/}
      <div className="flex flex-col p-4 page-width md:flex-row md:justify-around md:gap-24">
        {/*FORM*/}
        <div className="mb-16 md:w-1/3 lg:w-2/3">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="paragraph text-white">
              Jméno
            </label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder=""
              value={formData.name}
              onChange={handleChange}
              className="form-input mb-4"
            />
            <br />
            <label htmlFor="email" className="paragraph text-white">
              Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder=""
              value={formData.email}
              onChange={handleChange}
              className="form-input mb-4"
            />
            <br />
            {/*DROPDOWN SELECT*/}

            <Select
              options={options}
              value={formData.selectedOptions}
              onChange={handleSelectChange}
              isMulti
              styles={colorStyles}
              placeholder="Typ projektu"
            />
            <br />
            <label htmlFor="message" className="paragraph text-white">
              Popište váš projekt
            </label>
            <br />
            <textarea
              cols="60"
              rows="8"
              id="message"
              name="message"
              placeholder=""
              value={formData.message}
              onChange={handleChange}
              wrap="soft"
              className="form-input h-16 resize-none overflow-auto text-start"
            />
            <br />
            <br />
            <Button label="Odeslat" className="button" />
          </form>
        </div>

        {/*Contacts*/}
        <div className="md:w-1/3 lg:w-1/3">
          <h2 className="heading mb-4">Kontakty</h2>
          <div className="flex items-center gap-4">
            <img
              src="./imgs/email.png"
              alt="email icon"
              className="w-[28px] h-[28px]"
            />
            <p className="paragraph text-white">info@warpweb.cz</p>
          </div>
          <p className="heading2 mt-8 md:mt-36 max-w-[300px]">
            Pojďme společně posílit váš byznys
          </p>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-secondary flex justify-center flex-col items-center">
        <img
          src="./imgs/warp-logo.png"
          alt="warp logo"
          className="w-[125px] h-auto py-8"
        />
        <ul className="nav-text text-white flex gap-4 mb-8">
          <li>
            <Link to="/o-mne">O mně</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/sluzby">Služby</Link>
          </li>
          <li>
            <Link to="/kontakty">Kontakty</Link>
          </li>
        </ul>
        {/*}
        <ul className="flex gap-4 mb-4">
          <li>
            <a href="#">
              <img
                src="./imgs/instagram-icon.png"
                alt="instagram icon"
                className="w-[28px] h-[28px]"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="./imgs/facebook-icon.png"
                alt="facebook icon"
                className="w-[28px] h-[28px]"
              />
            </a>
          </li>
        </ul>
        */}
        <p className="paragraph text-white pb-4">© {currentYear} Warp</p>
      </div>
    </>
  );
};

export default FooterNoFAQ;
