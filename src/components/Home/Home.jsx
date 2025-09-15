import React from 'react';
import Banner from './Banner';
import AboutMe from './AboutMe';
import SkillsSection from './SkilsCollection';
import Education from './Education';
import Contact from './Contact';
import Projects from './Projects';

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-white to-yellow-200'>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <SkillsSection></SkillsSection>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;