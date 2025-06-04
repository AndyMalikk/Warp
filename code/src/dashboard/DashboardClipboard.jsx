import React from "react";
import { useState } from "react";
import DashboardNavbar from "../components/adminpage/DashboardNavbar";

const DashboardClipboard = () => {
  const [copied, setCopied] = useState(false);
  const plainText = `
Dobrý den [Jméno],

vidím, že se snažíte posouvat svůj podnikání vpřed, a proto bych vám rád nabídl řešení, které vám ušetří čas i peníze – profesionální webové stránky na míru za skutečně dostupnou cenu.

V dnešní době je kvalitní webová prezentace nezbytná pro úspěch každého podnikání. Ať už potřebujete jednoduchý firemní web, e-shop, nebo propracovanou vizitku své značky, vytvořím pro vás moderní, rychlý a funkční web, který osloví vaše zákazníky.

Proč zvolit moje služby?
✅ Špičkový design – web, který zaujme na první pohled
✅ Responzivní provedení – perfektní zobrazení na všech zařízeních
✅ Optimalizace pro vyhledávače (SEO) – větší viditelnost ve vyhledávačích
✅ Rychlost a spolehlivost – žádné zbytečné čekání na načtení
✅ Přátelský přístup a podpora – vždy vám pomůžu s čímkoliv budete potřebovat

A co je nejlepší? Nabízím to vše za cenu, která vás příjemně překvapí. Mým cílem je pomáhat malým podnikatelům, jako jste vy, růst bez zbytečně velkých investic.

Více informací naleznete na webu: Warp

Máte zájem o nezávaznou konzultaci nebo ukázku možností? Odpovězte na tento email a domluvíme si termín.

Budu se těšit na případnou spolupráci,

Ondřej Malík  
Warp
`;
  const handleCopy = () => {
    navigator.clipboard.writeText(plainText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };
  return (
    <>
      <DashboardNavbar />
      <div className="flex justify-center mt-28">
        <div className="bg-secondary w-[35rem] max-h-[50rem] rounded-md overflow-y-auto p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h6 className="heading2">Email:</h6>
          </div>

          {/* Formátovaný obsah */}
          <div className="text-sm font-karla-regular leading-2 space-y-4">
            <p>Dobrý den [Jméno],</p>

            <p>
              vidím, že se snažíte posouvat svůj podnikání vpřed, a proto bych vám rád nabídl řešení, které vám ušetří čas i peníze – profesionální webové stránky na míru za skutečně dostupnou cenu.
            </p>

            <p>
              V dnešní době je kvalitní webová prezentace nezbytná pro úspěch každého podnikání. Ať už potřebujete jednoduchý firemní web, e-shop, nebo propracovanou vizitku své značky, vytvořím pro
              vás moderní, rychlý a funkční web, který osloví vaše zákazníky.
            </p>

            <p>
              <strong>Proč zvolit moje služby?</strong>
            </p>
            <ul className="list-disc list-inside">
              <li>✅ Špičkový design – web, který zaujme na první pohled</li>
              <li>✅ Responzivní provedení – perfektní zobrazení na všech zařízeních</li>
              <li>✅ Optimalizace pro vyhledávače (SEO) – větší viditelnost ve vyhledávačích</li>
              <li>✅ Rychlost a spolehlivost – žádné zbytečné čekání na načtení</li>
              <li>✅ Přátelský přístup a podpora – vždy vám pomůžu s čímkoliv budete potřebovat</li>
            </ul>

            <p>A co je nejlepší? Nabízím to vše za cenu, která vás příjemně překvapí. Mým cílem je pomáhat malým podnikatelům, jako jste vy, růst bez zbytečně velkých investic.</p>

            <p>
              Více informací naleznete na webu: <b>Warp</b>
            </p>

            <p>Máte zájem o nezávaznou konzultaci nebo ukázku možností? Odpovězte na tento email a domluvíme si termín.</p>

            <p>Budu se těšit na případnou spolupráci,</p>

            <p>
              Ondřej Malík <br />
              Warp
            </p>
            <button
              onClick={handleCopy}
              className="bg-accent hover:bg-darkAccent text-white text-sm py-1 px-3 rounded-md transition"
            >
              {copied ? "Zkopírováno!" : "Zkopírovat"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardClipboard;
