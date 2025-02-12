import React from 'react';
import { Outlet } from 'react-router-dom';

const SignUpHeader = () => {
  return (
    <div className="max-w-screen h-screen flex flex-col md:flex-row">
      {/* Left Section with Image Background */}
      <div
        className="flex md:w-1/2 w-[45%] h-screen justify-start items-start bg-cover bg-center relative"
        style={{ backgroundImage: 
          'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)), url("/Sign_Up.png")' }}
      >
        {/* Text positioned at specified coordinates */}
        <div className="absolute bottom-[13%] left-[7%] text-white px-15 text-[40px] font-['Inter'] font-[400] leading-[47.4px]">
          Empower ESG Success with
          <br />
          tranXenergy's cutting edge
          <br />
          management portal.
        </div>
      </div>

      {/* Right Section for Nested Content */}
      <div className="w-1/2 h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default SignUpHeader;
