import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CompanyLogo } from "../../visuals";
import {FaUser, FaSearch} from 'react-icons/fa';

const Navbar = () => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: '0px 0px 8px rgb(255, 255, 255)',
      boxShadow: '0px 0px 8px rgb(255, 255, 255)',
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <header>
      <motion.div
      className="fixed top-0 w-full bg-white z-50 shadow-md"
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      >
      <div className="flex justify-between items-center p-4">
        <NavLink
          to="/"
          className="block text-xl text-blue-900 dark:text-white font-semibold"
        >
          <img 
            src= {CompanyLogo}
            alt = "Company logo"
            width = "100"
            height = "60"
          />
        </NavLink>
        <div className="hidden space-x-10 md:flex">

        {/* Dashboard, Portfolio, Emission, Analytics, Trading
        */}

          {/* <NavLink
            to = "/dashboard"
            className="text-black hover:text-blue-500 transition duration-300"
            activeClassName="text-blue-500"
          >
            Dashboard
          </NavLink> */}
          <a
            href="#dashboard"
            className="text-black hover:text-blue-500 transition duration-300"
          >
            Dashboard
          </a>
          <NavLink
            to="/portfolio"
            className="text-black hover:text-blue-500 transition duration-300"
          >
            Portfolio
          </NavLink>
          <a
            href="#emission"
            className="text-black hover:text-blue-500 transition duration-300"
          >
            Emission
          </a>
          <a
            href="#analytics"
            className="text-black hover:text-blue-500 transition duration-300"
          >
            Analytics
          </a>
          <NavLink 
            to="/trading"
            className="text-black hover:text-blue-500 transition duration-300"
            activeClassName="text-blue-500"
          >
            Trading
          </NavLink>
        </div>
        <div className="flex space-x-5">
          <motion.div variants={buttonVariants} whileHover="hover">
          <div className="flex justify-center items-center">
            <div className="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaSearch style = {{color: 'gray', fontSize: '16px'}}/>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="w-30 pl-10 pr-50 py-2 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-gray-700 bg-[#F5F5F5]"
              />
            </div>
          </div>

          </motion.div>
          
          <motion.div variants={buttonVariants} whileHover="hover">
            <div className="icon">
              <FaUser style = {{color: 'gray', fontSize: '20px'}}/>
              </div>
          </motion.div>
          
         </div>
        </div>
      </motion.div>
    </header>
    
  );
};

export default Navbar;
