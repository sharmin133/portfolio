import React from 'react';
import Navbar from '../Home/Navbar';
import Banner from '../Home/Banner';
import { Outlet } from 'react-router';

const Root = () => {
  return (
    <div className="flex justify-center bg-[linear-gradient(180deg,#142A43_0%,#0B1624_15%,#000000_100%)]">

      {/* 🔥 1920px centered wrapper */}
      <div className="w-full max-w-[1920px] flex flex-col min-h-screen">

        {/* Navbar */}
        <Navbar />

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row flex-1 mt-[72px]">

          {/* Left Sidebar */}
          <div className="
            w-full md:w-[320px] md:min-w-[320px]
            md:h-[calc(100vh-72px)] md:sticky md:top-[72px]
            md:overflow-y-auto">

            <div className="flex justify-center items-center h-full py-8 md:py-0">
              <Banner />
            </div>

          </div>

          {/* Right Content */}
          <div className="flex-1 min-h-screen overflow-y-auto no-scrollbar">
            <Outlet />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Root;