import React from "react";
import Navbar from "../components/Navbar";
import FooterNoFAQ from "../components/FooterNoFAQ";

const ContactPage = () => {
  return (
    <>
      <Navbar />

      <div className="pt-32 lg:pt-48">
        <h2 className="heading-white p-4 mb-12 page-width md:p-4">Řekněte mi o vašem projektu</h2>
        <FooterNoFAQ />
      </div>
    </>
  );
};

export default ContactPage;
