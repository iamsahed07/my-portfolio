import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-gray-600">{project.description}</p>
          <p className="text-gray-600">
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            {project.live && (
              <span> | <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a></span>
            )}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
