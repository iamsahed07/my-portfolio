import React from 'react';

const Profile = ({ profile }) => {
  return (
    <section className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold">Profile</h2>
      <p className="text-gray-600">{profile}</p>
    </section>
  );
};

export default Profile;
