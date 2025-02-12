import React from 'react'
import PropTypes from 'prop-types'

const TableBox = ({ data }) => {
  return (
    <div className="bg-white flex shadow-lg dark:bg-darkbg4 border border-gray-300 rounded-md overflow-y-auto h-auto max-h-96">
      <table className="min-w-full h-full table-fixed  divide-y divide-gray-200 table-fixed">
        <thead className="sticky top-0 z-0">
          <tr>
            <th className="dark:bg-gray-800 dark:text-gray-400 px-6 py-3 bg-gray-100 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex cursor-pointer">
                <span className="mr-2">Scope</span>
              </div>
            </th>
            <th className="dark:bg-gray-800 dark:text-gray-400 px-6 py-3 bg-gray-100 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex cursor-pointer">
                <span className="mr-2">Category</span>
              </div>
            </th>
            <th className="dark:bg-gray-800 dark:text-gray-400 px-6 py-3 bg-gray-100 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex cursor-pointer">
                <span className="mr-2">Tonnes CO2e</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        {/* {data.map((row, index) => (
            <tr
              key={index}
              className="border-t border-gray-300 dark:border-gray-600 min-h-12"
            >
              <td className="px-4 py-2">{row.username}</td>
              <td className="px-4 py-2">{row.kgCO2e}</td>
              <td className="px-4 py-2">{row.scope}</td>
            </tr>
          ))} */}
          <tr className="dark:bg-darkbg4 hover:bg-gray-50 dark:hover:bg-gray-600 dark:text-white">
            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 ">
              <p>Apple MacBook Pro 13</p>
              <p className="text-xs text-gray-400">PC & Laptop</p>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
              <p>77</p>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
              <div className="flex text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>Active</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

TableBox.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      kgCO2e: PropTypes.number.isRequired,
      scope: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default TableBox
