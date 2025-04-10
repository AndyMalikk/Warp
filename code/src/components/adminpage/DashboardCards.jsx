import React from "react";
import { useState } from "react";
const DashboardCards = () => {
  const [projects, setProjects] = useState([
    //*pull info from database */
    {
      name: "New Business Website",
      email: "john.doe@email.com",
      type: "Website Development",
      description: "A complete website for a new small business, including an about us page, services, and contact form.",
      status: "New",
    },
    {
      name: "Online Store for Handmade Goods",
      email: "jane.smith@email.com",
      type: "E-commerce Website",
      description: "Need an online store to sell handmade crafts with product listings, shopping cart, and payment integration.",
      status: "Working",
    },
    {
      name: "Landing Page for Product Launch",
      email: "product.team@company.com",
      type: "Landing Page",
      description: "A single-page website to promote the launch of our new software product, focusing on key features and call to action.",
      status: "Finished",
    },
    {
      name: "Blog Redesign",
      email: "blogger123@email.com",
      type: "Website Redesign",
      description: "Looking to update the design and improve the user experience of my personal blog.",
      status: "Working",
    },
  ]);

  // Function to handle status changes
  const handleStatusChange = (event, index) => {
    const newStatus = event.target.value;
    // Create a copy of the projects array
    const updatedProjects = [...projects];
    // Update the status of the specific project
    updatedProjects[index].status = newStatus;
    // Set the new projects array in the state
    setProjects(updatedProjects);
    // In a real application, you would also call an API here to update the backend
    console.log(`Project ${projects[index].name} status changed to: ${newStatus}`);
  };

  return (
    <div className="ml-24 mt-28 p-6">
      <h2 className="heading-white mb-8">Projekty:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          // Individual project card
          <div
            key={index}
            className="bg-secondary rounded-lg shadow-md p-8 mb-4 relative" // Added relative here
          >
            {/* Status dropdown */}
            <select
              className="absolute top-4 right-4 text-xs font-semibold text-white bg-gray-500 rounded-full px-2 py-1 cursor-pointer appearance-none"
              value={project.status}
              onChange={(event) => handleStatusChange(event, index)}
            >
              <option value="New">New</option>
              <option value="Working">Working</option>
              <option value="Finished">Finished</option>
            </select>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
