import React from 'react';
import Navbar from '../Home/Navbar';
import Banner from '../Home/Banner';
import { Outlet } from 'react-router';

const Root = () => {
  return (
    <div className="flex flex-col h-screen bg-[#0a0010]">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden mt-[72px]">
        
        {/* Left Sidebar */}
        <div className="w-[320px] min-w-[320px] h-full overflow-y-auto 
        bg-gradient-to-b from-[#1a0030] via-[#120020] to-[#0a0010]">
          
          <div className="flex justify-center items-center h-full">
            <Banner />
          </div>

        </div>

        {/* Right Content */}
        <div className="flex-1 h-full overflow-y-auto 
        bg-gradient-to-b from-[#1a0030] via-[#120020] to-[#0a0010]">
          
          <Outlet />

        </div>

      </div>
    </div>
  );
};

export default Root;