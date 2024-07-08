import React from 'react';

const Experience = ({ experience }) => {
  return (
    <section className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold">Professional Experience</h2>
      {experience.map((job, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-bold">{job.title}</h3>
          <p className="text-gray-600">{job.company} - {job.location}</p>
          <ul className="list-disc list-inside">
            {job.responsibilities.map((resp, idx) => (
              <li key={idx} className="text-gray-600">{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
