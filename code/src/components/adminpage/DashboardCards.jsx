import React from "react";
import { useState } from "react";
import ModalProjectCards from "../Modals/ModalProjectCards";
import Button from "../Button";

const DashboardCards = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which project's modal is open
  const [saved, setSaved] = useState(false); /* check if save was clicked */

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };
  const [projects, setProjects] = useState([
    //*pull info from database */
    {
      name: "New Business Website",
      email: "john.doe@email.com",
      type: "Website Development",
      description: "A complete website for a new small business, including an about us page, services, and contact form.",
      status: "New",
      notes: "",
    },
    {
      name: "Online Store for Handmade Goods",
      email: "jane.smith@email.com",
      type: "E-commerce Website",
      description: "Need an online store to sell handmade crafts with product listings, shopping cart, and payment integration.",
      status: "Working",
      notes: "",
    },
    {
      name: "Landing Page for Product Launch",
      email: "product.team@company.com",
      type: "Landing Page",
      description: "A single-page website to promote the launch of our new software product, focusing on key features and call to action.",
      status: "Finished",
      notes: "",
    },
    {
      name: "Blog Redesign",
      email: "blogger123@email.com",
      type: "Website Redesign",
      description: "Looking to update the design and improve the user experience of my personal blog.",
      status: "Working",
      notes: "",
    },
  ]);

  const handleStatusChange = (event, index) => {
    const newStatus = event.target.value;
    const updatedProjects = [...projects];
    updatedProjects[index].status = newStatus;
    setProjects(updatedProjects);
    console.log(`Project ${projects[index].name} status changed to: ${newStatus}`);
  };

  return (
    <div className="ml-24 mt-28 p-6">
      <h2 className="heading-white mb-8">Projekty:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-secondary rounded-lg shadow-md p-8 mb-4 cursor-pointer relative" // Added cursor-pointer
            onClick={() => setOpenIndex(index)} // Set the index of the clicked project
          >
            {/* Status indicator dot */}
            <div
              className={`absolute top-4 right-4 w-3 h-3 rounded-full 
            ${project.status === "Finished" ? "bg-green-500" : project.status === "Working" ? "bg-orange-500" : "bg-red-500"}`}
            ></div>

            <h3 className="text-lg font-semibold text-white mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-1">
              <span className="font-medium text-white">Od:</span> {project.email}
            </p>
            <p className="text-gray-400 mb-1">
              <span className="font-medium text-white">Typ projektu:</span> {project.type}
            </p>
            <p className="text-gray-400">
              <span className="font-medium text-white">Popis:</span> {project.description}
            </p>

            {/* Modal for this specific project */}
            <ModalProjectCards
              open={openIndex === index}
              onClose={() => setOpenIndex(null)}
            >
              <div className="p-16">
                <h3 className="heading-white font-semibold mb-8">{project.name}</h3>
                <p className="text-gray-400 mb-2">
                  <span className="font-medium text-white">Od:</span> {project.email}
                </p>
                <p className="text-gray-400 mb-2">
                  <span className="font-medium text-white">Typ projektu:</span> {project.type}
                </p>

                {/* Status Dropdown */}
                <div className="mb-2">
                  <span className="font-medium text-white">Status:</span>
                  <select
                    className="ml-2 bg-darkSecondary text-white rounded px-3 py-1 border"
                    value={project.status}
                    onChange={(event) => handleStatusChange(event, index)}
                  >
                    <option
                      value="New"
                      className="bg-secondary"
                    >
                      New
                    </option>
                    <option
                      value="Working"
                      className="bg-secondary"
                    >
                      Working
                    </option>
                    <option
                      value="Finished"
                      className="bg-secondary"
                    >
                      Finished
                    </option>
                  </select>
                </div>

                <p className="text-gray-400 mb-2">
                  <span className="font-medium text-white">Popis:</span> {project.description}
                </p>

                {/* Notes Section */}
                <div className="">
                  <label className="block font-medium text-white mb-2">Zápisky:</label>
                  <textarea
                    className="w-full h-48 bg-darkSecondary text-white rounded-lg p-4 border border-gray-600 focus:outline-none resize-none"
                    placeholder="Poznámky k projektu..."
                    value={project.notes || ""}
                    onChange={(e) => {
                      const updatedProjects = [...projects];
                      updatedProjects[index].notes = e.target.value;
                      setProjects(updatedProjects);
                    }}
                  />
                </div>

                <button
                  onClick={handleSave}
                  className="bg-accent text-white font-karla-regular rounded-md px-4 py-2 hover:bg-darkAccent mt-4"
                >
                  {saved ? "Uloženo!" : "Uložit"}
                </button>
              </div>
            </ModalProjectCards>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
