import React from 'react';

const Education = ({ education }) => {
  return (
    <section className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-bold">{edu.degree}</h3>
          <p className="text-gray-600">{edu.institution}</p>
          <p className="text-gray-600">{edu.period}</p>
          <p className="text-gray-600">{edu.details}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
