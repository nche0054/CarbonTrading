import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom' // Ensure you have react-router-dom installed
import { IoChevronForward } from 'react-icons/io5'

const BoxCard = ({ title, value, unit, Icon, link, extraColor }) => (
  <div className="group relative border border-gray-300 transform hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white dark:bg-darkbg4">
    <div className="p-5">
      <div className="flex justify-between">
        <Icon className="h-7 w-7 text-blue-400" />
        <div
          className={`bg-${extraColor} rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm`}
        >
          <span className="flex items-center">{unit}</span>
        </div>
      </div>
      <div className="ml-2 w-full flex-1">
        <div>
          <div className="flex justify-between">
            <div className="mt-3 text-3xl font-bold leading-8 dark:text-white">
              {value}
            </div>
            {link && (
              <div className="group relative">
                <NavLink to={link} className="inline-block">
                  <IoChevronForward
                    size={40}
                    className="text-blue-500 dark:text-blue-300 absolute right-0.5 top-1/2 transform -translate-y-1/2 lg:opacity-25 md:opacity-50 sm:opacity-100 opacity-85 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 ease-in-out"
                  />
                </NavLink>
              </div>
            )}
            </div>
            <div className="mt-1 text-base text-wrap text-gray-600 dark:text-gray-400">
              {title}
            </div>
        </div>
      </div>
    </div>
  </div>
)

BoxCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  unit: PropTypes.string,
  Icon: PropTypes.elementType,
  link: PropTypes.string,
  extraColor: PropTypes.string,
}

export default BoxCard
