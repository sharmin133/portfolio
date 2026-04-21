import React from 'react';
import AboutMe from './AboutMe';
import SkillsSection from './SkilsCollection';
import Education from './Education';
import Contact from './Contact';
import Projects from './Projects';
import Experience from './Experience';
import Publications from './publications';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <AboutMe />
       <Education />
      <SkillsSection />
      <Experience/>
      <Projects />
      <Publications/>
      <Contact />
      <Footer/>
    </div>
  );
};

export default Home;