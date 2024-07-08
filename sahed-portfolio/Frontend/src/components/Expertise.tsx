import React from 'react';

const Expertise = ({ expertise }) => {
  return (
    <section className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold">Areas of Expertise</h2>
      <ul className="list-disc list-inside">
        {expertise.map((item, index) => (
          <li key={index} className="text-gray-600">{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Expertise;
