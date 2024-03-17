import React from "react";

const ProjectCard = ({ project }) => {
  if (!project || !project.image) {
    return null;
  }

  return (
    <div className="border border-gray-200 rounded p-4 m-2 shadow-md hover:shadow-lg transition duration-300">
      <div className="relative">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-48 rounded mb-4"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition duration-300">
            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300">
              View Details
            </div>
          </div>
        </a>
      </div>
      <h2 className="text-lg font-semibold">{project.title}</h2>
      <p className="text-gray-600">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
