import React from 'react';

const Header = ({ name, title, contact }) => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <h2 className="text-xl text-gray-600">{title}</h2>
          </div>
          <div className="text-right">
            <p><a href={`tel:${contact.mobile}`}>{contact.mobile}</a></p>
            <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            <p><a href={contact.github} target="_blank" rel="noopener noreferrer">{contact.github}</a></p>
            <p><a href={contact.website} target="_blank" rel="noopener noreferrer">{contact.website}</a></p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
