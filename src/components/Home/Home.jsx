import React from 'react';
import AboutMe from './AboutMe';
import SkillsSection from './SkilsCollection';
import Education from './Education';
import Contact from './Contact';
import Projects from './Projects';

const Home = () => {
  return (
    <div>
      <AboutMe />
       <Education />
      <SkillsSection />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;