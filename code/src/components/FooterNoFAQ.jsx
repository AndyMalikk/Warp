import React, { useState, useRef } from "react"; // Přidáno useRef
import Button from "./Button";
import emailjs from "@emailjs/browser"; // Import EmailJS
import { Link } from "react-router-dom";

const FooterNoFAQ = () => {
  // /* OPTIONS FOR FORM SELECT */ - Odstraněno, už se nepoužívá
  // const options = [
  //   { value: "ui/ux-design", label: "UI/UX Design" },
  //   { value: "web-development", label: "Web Development" },
  // ];

  // Použij useRef pro referenci k formuláři
  const form = useRef();

  // State to store form data (selectedOptions odstraněno)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Přidány stavy pro odesílání a zpětnou vazbu
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(null); // null: výchozí, true: úspěch, false: chyba

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle Select input change - Odstraněno, už se nepoužívá
  // const handleSelectChange = (selectedOptions) => {
  //   setFormData({
  //     ...formData,
  //     selectedOptions,
  //   });
  // };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validace všech 3 povinných polí
    if (!formData.name || !formData.email || !formData.message) {
      alert("Prosím, vyplňte všechna povinná pole."); // Základní alert
      // Můžeš zde implementovat sofistikovanější zobrazení chyb pro lepší UX
      return; // Zastaví odeslání, pokud nejsou všechna pole vyplněna
    }

    setIsSending(true); // Nastav, že se odesílá
    setSendSuccess(null); // Resetuj stav úspěchu

    // Příprava dat pro EmailJS - už jen 3 pole
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Použití proměnné prostředí
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("EmailJS Success:", result.text);
          setSendSuccess(true); // Nastav úspěch
          setIsSending(false); // Ukonči stav odesílání
          // Vyčistit formulář po úspěšném odeslání
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setSendSuccess(false); // Nastav chybu
          setIsSending(false); // Ukonči stav odesílání
        }
      );
  };

  // Custom styles for Select component - Odstraněno, už se nepoužívá
  // const colorStyles = { ... };

  // Získá aktuální rok
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/*Form contacts section*/}
      <div className="flex flex-col p-4 page-width md:flex-row md:justify-around md:gap-24">
        {/*FORM*/}
        <div className="mb-16 md:w-1/3 lg:w-2/3">
          <form onSubmit={handleSubmit} ref={form}>
            {" "}
            {/* Přidána ref */}
            <label htmlFor="name" className="paragraph text-white">
              Jméno *
            </label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder=""
              value={formData.name}
              onChange={handleChange}
              className="form-input mb-8"
              autoComplete="off" // Přidáno pro zamezení autofill
              required // Přidáno pro povinné pole
            />
            <br />
            <label htmlFor="email" className="paragraph text-white">
              Email *
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder=""
              value={formData.email}
              onChange={handleChange}
              className="form-input mb-8"
              autoComplete="off" // Přidáno pro zamezení autofill
              required // Přidáno pro povinné pole
            />
            <br />
            {/*DROPDOWN SELECT - Odstraněno, už se nepoužívá*/}
            {/* Původní Select komponenta byla zakomentována, nyní je odstraněna z kódu */}
            <label htmlFor="message" className="paragraph text-white">
              Zpráva *
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
              autoComplete="off" // Přidáno pro zamezení autofill
              required // Přidáno pro povinné pole
            />
            <br />
            <br />
            <Button
              label={isSending ? "Odesílám..." : "Odeslat"} // Dynamický text tlačítka
              className="button"
              disabled={isSending} // Zakáže tlačítko během odesílání
            />
            {/* Zprávy o stavu odesílání */}
            {sendSuccess === true && (
              <p className="text-green-500 mt-4">
                Zpráva byla úspěšně odeslána!
              </p>
            )}
            {sendSuccess === false && (
              <p className="text-red-500 mt-4">
                Nastala chyba při odesílání zprávy. Zkuste to prosím znovu.
              </p>
            )}
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
          <p className="heading2 mt-8 md:mt-24 max-w-[300px]">
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
        {/*
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
