import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";
import { FiChevronDown } from "react-icons/fi";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-center group">
            <h1
              className="cursor-pointer hover:bg-mainbg h-12 px-3 pb-1 rounded-t-md dark:text-gray-300 dark:hover:bg-maindarkbg flex justify-between items-center text-center text-base md:pr-0 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:ml-2 md:mr-2 group-hover:rotate-180">
                <FiChevronDown/>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-15 right-8 hidden shadow-lg group-hover:md:block hover:md:block">
                  <div className="py-3 mt-2 bg-white rounded-md p-3 grid grid-cols-2">
                    {link.sublinks.map((mysublinks) => (
                      <div className = {mysublinks.RowSpan}> 
                        <Link className="text-lg font-semibold uppercase hover:underline" to={mysublinks.HeadLink} state ={{category: ""}}>
                          {mysublinks.Head}
                        </Link>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-gray-600 my-2.5">
                        {slink.category ? 
                          <Link className="hover:text-primary hover:underline hover:text-lightHoverNavbar" to={slink.link} state={{category: slink.category}}>{slink.name}</Link> :
                          <Link className="hover:text-primary hover:underline hover:text-lightHoverNavbar" to={slink.link}>{slink.name}</Link>
                        }
                        
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        {slink.category ? 
                          <Link to={slink.link} state={{category: slink.category}}>{slink.name}</Link> :
                          <Link to={slink.link}>{slink.name}</Link>
                        }
                        
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;