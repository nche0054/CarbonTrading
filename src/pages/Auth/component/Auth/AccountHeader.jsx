import React from 'react';
import { Outlet } from 'react-router-dom';

const AccountHeader = () => {
  return (
    <div className="max-w-screen h-screen flex flex-col md:flex-row">
      {/* Left Section for Nested Content */}
      <div className="w-1/2 h-screen">
        <Outlet />
      </div>
      
      {/* Right Section with Image Background */}
      <div
        className="hidden md:flex flex-col md:w-1/2 w-[45%] h-screen justify-end items-start bg-cover bg-center"
        style={{ backgroundImage: 
          'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0)), url("/Sign_In.jpg")' }}
        >
        
        {/* Text positioned at specified coordinates */}
        <div className={"absolute bottom-1/4 text-white px-5 text-[40px] font-['Inter'] font-[400] leading-[47.4px]"}>
          Go green and reduce your carbon footprint.
        </div>
      </div>
    </div>
  );
};

export default AccountHeader;
