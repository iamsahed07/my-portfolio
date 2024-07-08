import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Profile from './components/Profile';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/profile')
      .then((response: { data: React.SetStateAction<null>; }) => {
        setProfile(response.data);
      })
      .catch((error: any) => {
        console.error('There was an error fetching the profile!', error);
      });
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header name={profile.name} title={profile.title} contact={profile.contact} />
      <Profile profile={profile.profile} />
      <Expertise expertise={profile.expertise} />
      <Experience experience={profile.experience} />
      <Education education={profile.education} />
      <Skills skills={profile.skills} />
      <Projects projects={profile.projects} />
    </div>
  );
};

export default App;
