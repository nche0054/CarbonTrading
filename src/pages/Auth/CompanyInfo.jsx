import { useState, useEffect } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { FaRegEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import StepProgress from '../../components/Form/StepProgress';
import StepProgress from './component/Form/StepProgress';

export default function CompanyInfo() {
  useEffect(() => {
    window.addEventListener('beforeunload', alertUser);
    return () => {
      window.removeEventListener('beforeunload', alertUser);
    };
  }, []);
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = '';
  };

  const [disabledinputs, setDisabledInputs] = useState({
    companyname: true,
    regnumber: true,
    address: true,
    contact: true,
    standard: true,
  });

  //The variables from the user input will be saved in this variable
  const [values, setValues] = useState({
    name: '',
    regnumber: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    postal: '',
    country: '',
    fulladdress: '',
    category: '',
    contact: '',
    ssm: '',
  });

  useEffect(() => {
    setValues({
      ...values,
      fulladdress: `${values.address1}, ${values.address2}, ${values.city}, ${values.state}, ${values.postal}, ${values.country}`,
    });
  }, [
    values.address1,
    values.address2,
    values.city,
    values.state,
    values.postal,
    values.country,
  ]);

  const [pageNumber, setPageNumber] = useState(1);

  //To show the error message to the user for a invalid email input
  const [error, setError] = useState([]);

  // const navigate = useNavigate()  //To navigate to other page

  /**
   * To store the user input to variable values
   * @param {*} e
   */
  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  /**
   * To store the error message and show to the user when the user click the button
   * @param {*} e
   */
  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleClick(name) {
    setDisabledInputs((prevState) => ({
      ...prevState,
      [name]: !disabledinputs[name],
    }));
  }

  return (
    <div>
      <div className="lg:px-60 md:px-12 pt-7 flex flex-col justify-center items-center gap-6 overflow-y-auto overflow-x-hidden">
        <StepProgress pageNumber={pageNumber} />
        {(() => {
          if (pageNumber === 1) {
            return (
              <>
                <div className="text-zinc-800 text-4xl font-bold font-['Inter'] leading-snug">
                  Company Details
                </div>
                <div className="text-zinc-800 text-xl font-normal font-['Inter']">
                  Please fill in your company details
                </div>
                <form className="w-10/12" onSubmit={handleSubmit}>
                  <div className="mb-10">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-base font-extrabold font-['Inter'] text-white-900 dark:text-white"
                    >
                      Company Name<span className="text-red-600"> *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      id="name"
                      className="font-['Inter'] bg-white-50 border border-zinc-300 text-white-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    ></input>
                    {error.name && (
                      <p className=" text-red-500 font-['Inter] text-xs font-normal flex">
                        {error.name}
                      </p>
                    )}
                  </div>
                  <div className="mb-10">
                    <label
                      htmlFor="regnumber"
                      className="block mb-2 text-base font-extrabold font-['Inter'] text-white-900 dark:text-white"
                    >
                      Company Registration Number
                      <span className="text-red-600"> *</span>
                    </label>
                    <input
                      type="text"
                      name="regnumber"
                      id="regnumber"
                      value={values.regnumber}
                      onChange={handleChange}
                      className="font-['Inter'] bg-white-50 border border-zinc-300 text-white-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    ></input>
                    {error.regnumber && (
                      <p className=" text-red-500 font-['Inter] text-xs font-normal flex">
                        {error.regnumber}
                      </p>
                    )}
                  </div>
                  <div className="mb-10">
                    <label
                      htmlFor="address"
                      className="block mb-2 text-base font-extrabold font-['Inter'] text-white-900 dark:text-white"
                    >
                      Company Address<span className="text-red-600"> *</span>
                    </label>
                    <div className="grid grid-rows-4 grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="address1"
                        id="address1"
                        value={values.address1}
                        onChange={handleChange}
                        placeholder="Address Line 1"
                        className="row-span-1 col-span-2 font-['Inter'] bg-white-50 border border-zinc-300 text-white-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ></input>
                      <input
                        type="text"
                        name="address2"
                        id="address2"
                        value={values.address2}
                        onChange={handleChange}
                        placeholder="Address Line 2 (Optional)"
                        className="row-span-1 col-span-2 font-['Inter'] bg-white-50 border border-zinc-300 text-white-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ></input>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        value={values.city}
                        onChange={handleChange}
                        placeholder="City/District"
                        className="font-['Inter'] bg-white-50 border border-zinc-300 text-white-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ></input>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        value={values.state}
                        onChange={handleChange}
                        placeholder="State/Province"
                        className="font-['Inter'] bg-white-50 border border-zinc-300 text-white-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ></input>
                      <input
                        type="text"
                        name="postal"
                        id="postal"
                        value={values.postal}
                        onChange={handleChange}
                        placeholder="Postal Code"
                        className="font-['Inter'] bg-white-50 border border-zinc-300 text-white-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ></input>
                      <input
                        type="text"
                        name="country"
                        id="country"
                        value={values.country}
                        onChange={handleChange}
                        placeholder="Country"
                        className="font-['Inter'] bg-white-50 border border-zinc-300 text-white-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ></input>
                    </div>
                    {error.address && (
                      <p className=" text-red-500 font-['Inter] text-xs font-normal flex">
                        {error.address}
                      </p>
                    )}
                  </div>
                  <div className="mb-10">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-base font-extrabold font-['Inter'] text-white-900 dark:text-white"
                    >
                      Company Category<span className="text-red-600"> *</span>
                    </label>
                    {/* <input type="name" name = "name"  id = "name"  className="font-['Inter'] bg-white-50 border border-zinc-300 text-white-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></input> */}
                    <select
                      name="category"
                      id="category"
                      value={values.category}
                      onChange={handleChange}
                      className="font-['Inter'] invalid:text-gray-500 border border-zinc-300 rounded-md focus:ring-teal-600 focus:border-teal-600 block w-full p-3 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    >
                      <option value=" " hidden>
                        Select Company Category Here
                      </option>
                      <option value="education">Education</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="retail">Retail</option>
                      <option value="oil">Oil & Gas</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="technology">Technology</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="food">Food and Beverage</option>
                      <option value="realestate">Real Estate</option>
                      <option value="automotive">Automotive</option>
                      <option value="travel">Travel and Tourism</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="agriculture">Agriculture</option>
                      <option value="nonprofit">
                        Non-Profit Organizations
                      </option>
                      <option value="sports">Sports and Recreation</option>
                      <option value="fashion">Fashion and Apparel</option>
                      <option value="telecommunications">
                        Telecommunications
                      </option>
                      <option value="energy">Energy and Utilities</option>
                      <option value="pharmaceuticals">Pharmaceuticals</option>
                      <option value="construction">Construction</option>
                      <option value="transportation">Transportation</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="media">Media and Publishing</option>
                      <option value="government">
                        Government and Public Services
                      </option>
                      <option value="environmental">
                        Environmental Services
                      </option>
                    </select>
                    {error.category && (
                      <p className=" text-red-500 font-['Inter] text-xs font-normal flex">
                        {error.category}
                      </p>
                    )}
                  </div>
                  <div className="mb-12">
                    <label
                      htmlFor="contact"
                      className="mb-2 text-base font-extrabold flex font-['Inter'] text-white-900 dark:text-white"
                    >
                      Contact Number
                      <span className="ml-1 text-red-600 flex"> *</span>
                    </label>
                    <div className="flex justify-end items-center relative">
                      <input
                        type="text"
                        name="contact"
                        value={values.contact}
                        onChange={handleChange}
                        id="contact"
                        className="bg-white-50 border border-zinc-300 text-white-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ></input>
                    </div>
                    {error.contact && (
                      <p className=" text-red-500 font-['Inter] text-xs font-normal flex">
                        {error.contact}
                      </p>
                    )}
                  </div>
                  {/* <div className="inline-flex flex-row mb-12"> */}
                  <div className="font-['Inter'] grid grid-cols-3 gap-1 mb-12">
                    <div className="col-span-2 flex items-center justify-start">
                      {/* <button className="justify-center items-center h-12 px-10 py-2.5 rounded-md border border-teal-600 text-center text-teal-600 text-sm font-semibold font-['Inter'] hover:border-teal-800 hover:text-teal-800 focus:ring-2 focus:outline-none focus:ring-teal-500 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
                Back
              </button> */}
                    </div>
                    <div className="justify-end flex items-end">
                      <button
                        type="button"
                        className=" text-white text-sm font-semibold font-['Inter'] h-12 px-10 py-2.5 bg-teal-600 hover:bg-teal-800 focus:ring-2 focus:outline-none focus:ring-teal-500 rounded-md dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                        onClick={() => setPageNumber(pageNumber + 1)}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </form>
              </>
            );
          } else if (pageNumber === 2) {
            return (
              <>
                <div className="text-zinc-800 text-4xl font-bold font-['Inter'] leading-snug">
                  Certifications & Data
                </div>
                <div className="text-zinc-800 text-xl font-normal font-['Inter']">
                  Please fill in your company details
                </div>
                <form className="w-10/12">
                  <div className="mb-10">
                    <p className="block mb-6 text-lg font-extrabold font-['Inter'] text-white-900 dark:text-white">
                      SSM Certificate<span className="text-red-600"> *</span>
                    </p>
                    <label
                      htmlFor="cert"
                      className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p class="font-['Inter'] mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Click to upload</span> or
                          drag and drop
                        </p>
                      </div>
                      <input id="cert" type="file" class="hidden" />
                    </label>
                  </div>

                  <div className="font-['Inter'] grid grid-cols-3 gap-1 mb-12">
                    <div className="col-span-2 flex items-center justify-start">
                      <button
                        type="button"
                        onClick={() => setPageNumber(pageNumber - 1)}
                        className=" justify-center items-center h-12 px-10 py-2.5 rounded-md border border-teal-600 text-center text-teal-600 text-sm font-semibold font-['Inter'] hover:border-teal-800 hover:text-teal-800 focus:ring-2 focus:outline-none focus:ring-teal-500 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                      >
                        Back
                      </button>
                    </div>
                    <div className="justify-end flex items-end">
                      <button
                        type="button"
                        onClick={() => setPageNumber(pageNumber + 1)}
                        className=" text-white text-sm font-semibold font-['Inter'] h-12 px-10 py-2.5 bg-teal-600 hover:bg-teal-800 focus:ring-2 focus:outline-none focus:ring-teal-500 rounded-md dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </form>
              </>
            );
          } else if (pageNumber === 3) {
            return (
              <>
                <div className="text-zinc-800 text-4xl font-bold font-['Inter'] leading-snug">
                  Market Registration
                </div>
                <div className="text-zinc-800 text-xl font-normal font-['Inter'] text-center">
                  Here's a summary of the information you've entered
                </div>
                <div className="font-['Inter'] grid grid-cols-3 gap-1 mb-12">
                  <div className="col-span-2 flex items-center justify-start">
                    <button
                      type="button"
                      onClick={() => setPageNumber(pageNumber - 1)}
                      className=" justify-center items-center h-12 px-10 py-2.5 rounded-md border border-teal-600 text-center text-teal-600 text-sm font-semibold font-['Inter'] hover:border-teal-800 hover:text-teal-800 focus:ring-2 focus:outline-none focus:ring-teal-500 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                    >
                      Back
                    </button>
                  </div>
                  <div className="justify-end flex items-end">
                    <button
                      type="button"
                      onClick={() => setPageNumber(pageNumber + 1)}
                      className=" text-white text-sm font-semibold font-['Inter'] h-12 px-10 py-2.5 bg-teal-600 hover:bg-teal-800 focus:ring-2 focus:outline-none focus:ring-teal-500 rounded-md dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            );
          } else {
            return (
              <>
                <div className="text-zinc-800 text-4xl font-bold font-['Inter'] leading-snug">
                  Summary
                </div>
                <div className="text-zinc-800 text-xl font-normal font-['Inter'] text-center">
                  Here's a summary of the information you've entered
                </div>
                <form className="w-10/12">
                  <div className="mb-10">
                    <div className="grid grid-cols-3 gap-1 ">
                      <label
                        htmlFor="companyname"
                        className=" col-span-2 block mb-2 text-base font-extrabold font-['Inter'] text-white-900 dark:text-white"
                      >
                        Company Name
                      </label>

                      <span className="justify-end flex items-end mb-2">
                        <button
                          type="button"
                          onClick={() => handleClick('companyname')}
                          className="text-teal-600"
                        >
                          <FaRegEdit size={20} />
                        </button>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="companyname"
                      onChange={handleChange}
                      disabled={disabledinputs.companyname ? true : null}
                      value={values.name}
                      id="companyname"
                      className="font-['Inter'] bg-white-50 border border-zinc-300 text-white-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    ></input>
                  </div>
                  <div className="mb-10">
                    <div className="grid grid-cols-3 gap-1 ">
                      <label
                        htmlFor="regnumber"
                        className="col-span-2 block mb-2 text-base font-extrabold font-['Inter'] text-white-900 dark:text-white"
                      >
                        Company Registration Number
                      </label>
                      <span className="justify-end flex items-end mb-2">
                        <button
                          type="button"
                          onClick={() => handleClick('regnumber')}
                          className="text-teal-600"
                        >
                          <FaRegEdit size={20} />
                        </button>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="regnumber"
                      onChange={handleChange}
                      disabled={disabledinputs.regnumber ? true : null}
                      value={values.regnumber}
                      id="regnumber"
                      className="font-['Inter'] bg-white-50 border border-zinc-300 text-white-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    ></input>
                  </div>

                  <div className="mb-10">
                    <div className="grid grid-cols-3 gap-1 ">
                      <label
                        htmlFor="address"
                        className="col-span-2 block mb-2 text-base font-extrabold font-['Inter'] text-white-900 dark:text-white"
                      >
                        Company Address
                      </label>
                      <span className="justify-end flex items-end mb-2">
                        <button
                          type="button"
                          onClick={() => handleClick('address')}
                          className="text-teal-600"
                        >
                          <FaRegEdit size={20} />
                        </button>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="fulladdress"
                      onChange={handleChange}
                      disabled={disabledinputs.address ? true : null}
                      value={values.fulladdress}
                      id="fulladdress"
                      className="font-['Inter'] bg-white-50 border border-zinc-300 text-white-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    ></input>
                  </div>

                  <div className="mb-10">
                    <div className="grid grid-cols-3 gap-1 ">
                      <label
                        htmlFor="contact"
                        className="col-span-2 block mb-2 text-base font-extrabold font-['Inter'] text-white-900 dark:text-white"
                      >
                        Company PIC Contact
                      </label>
                      <span className="justify-end flex items-end mb-2">
                        <button
                          type="button"
                          onClick={() => handleClick('contact')}
                          className="text-teal-600"
                        >
                          <FaRegEdit size={20} />
                        </button>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="contact"
                      onChange={handleChange}
                      disabled={disabledinputs.contact ? true : null}
                      value={values.contact}
                      id="contact"
                      className="font-['Inter'] bg-white-50 border border-zinc-300 text-white-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    ></input>
                  </div>

                  <div className="mb-12">
                    <div className="grid grid-cols-3 gap-1 ">
                      <label
                        htmlFor="standard"
                        className="col-span-2 block mb-2 text-base font-extrabold font-['Inter'] text-white-900 dark:text-white"
                      >
                        SSM Certificate
                      </label>
                      <span className="justify-end flex items-end mb-2">
                        <button type="button" className="text-teal-600">
                          <FaRegEdit size={20} />
                        </button>
                      </span>
                    </div>
                  </div>

                  <div className="mb-12">
                    <div className="grid grid-cols-3 gap-1 ">
                      <label
                        htmlFor="standard"
                        className="col-span-2 mb-2 text-base font-extrabold flex font-['Inter'] text-white-900 dark:text-white"
                      >
                        ESG Standard
                      </label>

                      <span className="justify-end flex items-end mb-2">
                        <button
                          type="button"
                          onClick={() => handleClick('standard')}
                          className="text-teal-600"
                        >
                          <FaRegEdit size={20} />
                        </button>
                      </span>
                    </div>
                    <div className="flex justify-end items-center relative">
                      <input
                        type="text"
                        name="standard"
                        onChange={handleChange}
                        disabled={disabledinputs.standard ? true : null}
                        value={values.standard}
                        id="standard"
                        className="bg-white-50 border border-zinc-300 text-white-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ></input>
                    </div>
                  </div>

                  {/* <div className="inline-flex flex-row mb-12"> */}
                  <div className="font-['Inter'] grid grid-cols-3 gap-1 mb-12">
                    <div className="col-span-2 flex items-center justify-start">
                      <button className="text-sm justify-center items-center h-12 px-10 py-2.5 rounded-md border border-teal-600 text-center text-teal-600 font-semibold font-['Inter'] hover:border-teal-800 hover:text-teal-800 focus:ring-2 focus:outline-none focus:ring-teal-500 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
                        Back
                      </button>
                    </div>
                    <div className="justify-end flex items-end">
                      <button
                        type="submit"
                        className=" text-white text-sm font-semibold font-['Inter'] h-12 px-10 py-2.5 bg-teal-600 hover:bg-teal-800 focus:ring-2 focus:outline-none focus:ring-teal-500 rounded-md dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </>
            );
          }
        })()}
      </div>
    </div>
  );
}
