import React from "react";
import { useState } from "react";
import ModalProjectCards from "../Modals/ModalProjectCards";
import ModalCreate from "../Modals/ModalCreate";
import Button from "../Button";
import { FaTrash } from "react-icons/fa"; // Add this import at the top

const DashboardCards = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which project's modal is open
  const [saved, setSaved] = useState(false); /* check if save was clicked */
  const [open, setOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    name: "",
    email: "",
    type: "",
    description: "",
    status: "New",
    notes: "",
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const handleCreateProject = (e) => {
    e.preventDefault();
    setProjects([...projects, newProject]);
    setNewProject({
      name: "",
      email: "",
      type: "",
      description: "",
      status: "New",
      notes: "",
    });
    setOpen(false);
  };

  const handleNewProjectChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [projects, setProjects] = useState([
    //*pull info from database */
    {
      name: "New Business Website",
      email: "john.doe@email.com",
      type: "Website Development",
      description:
        "A complete website for a new small business, including an about us page, services, and contact form.",
      status: "New",
      notes: "",
    },
    {
      name: "Online Store for Handmade Goods",
      email: "jane.smith@email.com",
      type: "E-commerce Website",
      description:
        "Need an online store to sell handmade crafts with product listings, shopping cart, and payment integration.",
      status: "Working",
      notes: "",
    },
    {
      name: "Landing Page for Product Launch",
      email: "product.team@company.com",
      type: "Landing Page",
      description:
        "A single-page website to promote the launch of our new software product, focusing on key features and call to action.",
      status: "Finished",
      notes: "",
    },
    {
      name: "Blog Redesign",
      email: "blogger123@email.com",
      type: "Website Redesign",
      description:
        "Looking to update the design and improve the user experience of my personal blog.",
      status: "Working",
      notes: "",
    },
  ]);

  const handleStatusChange = (event, index) => {
    const newStatus = event.target.value;
    const updatedProjects = [...projects];
    updatedProjects[index].status = newStatus;
    setProjects(updatedProjects);
    console.log(
      `Project ${projects[index].name} status changed to: ${newStatus}`
    );
  };

  return (
    <div className="ml-24 mt-28 p-6">
      <ModalCreate open={open} onClose={() => setOpen(false)}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-white">
              Vytvorit novy projekt
            </h3>
          </div>

          <form onSubmit={handleCreateProject}>
            <div className="mb-4">
              <label className="block text-white font-medium mb-2">
                Název projektu
              </label>
              <input
                type="text"
                name="name"
                value={newProject.name}
                onChange={handleNewProjectChange}
                className="w-full bg-darkSecondary text-white rounded-lg px-4 py-2 border border-gray-600 focus:outline-none "
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-white font-medium mb-2">Od:</label>
              <input
                type="email"
                name="email"
                value={newProject.email}
                onChange={handleNewProjectChange}
                className="w-full bg-darkSecondary text-white rounded-lg px-4 py-2 border border-gray-600 focus:outline-none "
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-white font-medium mb-2">
                Typ projektu
              </label>
              <select
                name="type"
                value={newProject.type}
                onChange={handleNewProjectChange}
                className="w-full bg-darkSecondary text-white rounded-lg px-4 py-2 border border-gray-600 focus:outline-none "
                required
              >
                <option value="">Vyberte typ projektu</option>
                <option value="Website Development">Website Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-white font-medium mb-2">Popis</label>
              <textarea
                name="description"
                value={newProject.description}
                onChange={handleNewProjectChange}
                rows="4"
                className="w-full bg-darkSecondary text-white rounded-lg px-4 py-2 border border-gray-600 focus:outline-none  resize-none"
                required
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Zrušit
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-accent rounded-lg hover:bg-darkAccent transition-colors"
              >
                Vytvořit
              </button>
            </div>
          </form>
        </div>
      </ModalCreate>

      <div className="flex justify-between">
        <h2 className="heading-white mb-8">Projekty:</h2>
        <button
          onClick={() => setOpen(true)}
          className="bg-accent hover:bg-darkAccent text-white font-karla-regular rounded-full px-12 h-12 text-sm leading-none"
        >
          +
        </button>
      </div>
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
            ${
              project.status === "Finished"
                ? "bg-green-500"
                : project.status === "Working"
                ? "bg-orange-500"
                : "bg-red-500"
            }`}
            ></div>

            <h3 className="text-lg font-semibold text-white mb-2">
              {project.name}
            </h3>
            <p className="text-gray-400 mb-1">
              <span className="font-medium text-white">Od:</span>{" "}
              {project.email}
            </p>
            <p className="text-gray-400 mb-1">
              <span className="font-medium text-white">Typ projektu:</span>{" "}
              {project.type}
            </p>
            <p className="text-gray-400">
              <span className="font-medium text-white">Popis:</span>{" "}
              {project.description}
            </p>

            {/* Modal for this specific project */}
            <ModalProjectCards
              open={openIndex === index}
              onClose={() => setOpenIndex(null)}
            >
              <div className="p-16">
                <h3 className="heading-white font-semibold mb-8">
                  {project.name}
                </h3>
                <p className="text-gray-400 mb-2">
                  <span className="font-medium text-white">Od:</span>{" "}
                  {project.email}
                </p>
                <p className="text-gray-400 mb-2">
                  <span className="font-medium text-white">Typ projektu:</span>{" "}
                  {project.type}
                </p>

                {/* Status Dropdown */}
                <div className="mb-2">
                  <span className="font-medium text-white">Status:</span>
                  <select
                    className="ml-2 bg-darkSecondary text-white rounded px-3 py-1 border"
                    value={project.status}
                    onChange={(event) => handleStatusChange(event, index)}
                  >
                    <option value="New" className="bg-secondary">
                      New
                    </option>
                    <option value="Working" className="bg-secondary">
                      Working
                    </option>
                    <option value="Finished" className="bg-secondary">
                      Finished
                    </option>
                  </select>
                </div>

                <p className="text-gray-400 mb-2">
                  <span className="font-medium text-white">Popis:</span>{" "}
                  {project.description}
                </p>

                {/* Notes Section */}
                <div className="">
                  <label className="block font-medium text-white mb-2">
                    Zápisky:
                  </label>
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

                {/* Action buttons - now in a flex container at bottom right */}
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-700">
                  <button
                    onClick={handleSave}
                    className="bg-accent text-white font-karla-regular rounded-md px-6 py-2 hover:bg-darkAccent transition-colors"
                  >
                    {saved ? "Uloženo!" : "Uložit"}
                  </button>

                  <button
                    onClick={() => {
                      if (
                        window.confirm("Opravdu chcete smazat tento projekt?")
                      ) {
                        const updatedProjects = [...projects];
                        updatedProjects.splice(index, 1);
                        setProjects(updatedProjects);
                        setOpenIndex(null);
                      }
                    }}
                    className="text-red-500 hover:text-red-700 transition-colors flex items-center gap-2 px-4 py-2 rounded-md hover:bg-red-500/10"
                    title="Smazat projekt"
                  >
                    <FaTrash size={18} />
                    <span className="text-sm font-medium">Smazat</span>
                  </button>
                </div>
              </div>
            </ModalProjectCards>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
