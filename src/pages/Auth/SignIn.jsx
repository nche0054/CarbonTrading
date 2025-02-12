import React, { useState, useEffect, useContext } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import { publicAxios } from '../../api/axios';
import { FaEye, FaEyeSlash} from "react-icons/fa";

const SignIn = () => {
  const { setAuth, persist, setPersist } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/main';

  const handleSignUpPageClick = () => {
    navigate('/sign-up'); // Navigate to the home page
  };

  //The email and password from the user input will be saved in this variable
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  //To show the error message to the user for a invalid email input
  const [error, setError] = useState([]);

  //Variable that will be used to let the user peak the password
  const [show, setShow] = useState(false);

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
  async function handleSubmit(e) {
    e.preventDefault();
    // Reset errors
    setError({});

    try {
      const response = await publicAxios.post('/auth/login', values, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }); // Adjust API endpoint as needed
      const accessToken = response?.data?.accessToken;
      const username = response?.data?.username;
      const companyName = response?.data?.companyName;

      // console.log(response?.data);

      if (accessToken) {
        setAuth({
          username,
          companyName,
          accessToken,
        });

        // Clear input fields after successful login
        setValues({ email: '', password: '' });
        // console.log(from);
        // console.log(accessToken);
        // Navigate to 'from' route or '/main' if no redirect route is provided
        navigate(from, { replace: true }); // Un-comment this line to use dynamic navigation
        // navigate('/main'); // Comment or remove this line if dynamic navigation is preferred
      }
    } catch (error) {
      if (!error.response) {
        // Network error or server is not responding
        setError({ general: 'Network error or server is not responding.' });
      } else {
        // Handle errors based on status code
        switch (error.response.status) {
          case 400:
            setError({
              general: 'Invalid request. Please enter correct details.',
            });
            break;
          case 401:
            setError({ general: 'Invalid credentials.' });
            break;
          case 403:
            setError({
              general: 'Account is not activated. Please verify your email.',
            });
            break;
          case 404:
            setError({ general: 'User not found.' });
            break;
          default:
            setError({
              general: 'An unexpected error occurred. Please try again.',
            });
        }
      }
    }
  }

  const togglePersist = () => {
    setPersist(true);
  };

  useEffect(() => {
    localStorage.setItem('persist', persist);
  }, [persist]);

  return (
    <div className="max-h-screen bg-slate-50 container">
      <div className=" h-screen flex-col flex justify-center items-center pl-32 pr-24 py-32">
        <div className="text-center text-[#000000] text-[36px] font-['Inter'] font-normal leading-[43.57px]">
        Log in to
        <br/>
        ESG Management Portal
        </div>

        <div className="text-center text-[#454545] text-[16px] font-['Inter'] font-light leading-[19.36px] pt-5 pb-4 w-9/12 h-auto">
        Please enter your details below
        </div>

        {/* Special Line */}
        <div className="flex items-center justify-center w-full">
        <div className="border-t border-[#BCBCBC] w-1/5"></div>
        <div className="mx-2 text-[#ffffff] text-[16px]"> </div>
        <div className="border-t border-[#BCBCBC] w-1/5"></div>
        </div>
        <br/>

        <form className="w-10/12 py-3" onSubmit={handleSubmit}>
          {error.general && (
            <div className="mb-4 text-center text-red-500">{error.general}</div>
          )}
          <div className="mb-5">
            {/* <label
              htmlFor="email"
              className="block mb-2 text-base font-extrabold text-black"
            >
              E-mail <span className="text-red-600">*</span>
            </label> */}
            {error.email ? (
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                className="bg-white-50 border-b border-b-[#BCBCBC] text-black text-sm rounded-none focus:ring-0 focus:border-b-[#4C9DD9] block w-full p-2.5 dark:bg-white-700 dark:border-b-white-600 dark:text-white dark:focus:ring-0 dark:focus:border-b-[#4C9DD9] focus:outline-none"
              ></input>
            ) : (
              <input
                type="email"
                name="email"
                value={values.email}
                id="email"
                placeholder="E-mail"
                onChange={handleChange}
                className="bg-white-50 border-b border-b-[#BCBCBC] text-black text-sm rounded-none focus:ring-0 focus:border-b-[#4C9DD9] block w-full p-2.5 dark:bg-white-700 dark:border-b-white-600 dark:text-white dark:focus:ring-0 dark:focus:border-b-[#4C9DD9] focus:outline-none"
              ></input>
            )}
            {error.email && (
              <p className=" text-red-500 font-['Inter] text-xs font-normal">
                {error.email}
              </p>
            )}
          </div>
          <div className="mb-5">
            {/* <label
              htmlor="password"
              className="mb-2 text-base font-extrabold flex text-white-900"
            >
              Password <span className="ml-1 text-red-600 flex">*</span>
            </label> */}
            <div className="flex justify-end items-center relative">
              {error.password ? (
                <input
                  type={`${show ? 'text' : 'password'}`}
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  className="bg-white-50 border-b border-b-[#BCBCBC] text-black text-sm rounded-none focus:ring-0 focus:border-b-[#4C9DD9] block w-full p-2.5 dark:bg-white-700 dark:border-b-white-600 dark:text-white dark:focus:ring-0 dark:focus:border-b-[#4C9DD9] focus:outline-none"
                ></input>
              ) : (
                <input
                  type={`${show ? 'text' : 'password'}`}
                  name="password"
                  value={values.password}
                  id="password"
                  placeholder="Password"
                  onChange={handleChange}
                  className="bg-white-50 border-b border-b-[#BCBCBC] text-black text-sm rounded-none focus:ring-0 focus:border-b-[#4C9DD9] block w-full p-2.5 dark:bg-white-700 dark:border-b-white-600 dark:text-white dark:focus:ring-0 dark:focus:border-b-[#4C9DD9] focus:outline-none"
                ></input>
              )}
              <span
                className="mr-3 mt-1 icon absolute"
                onClick={() => setShow(!show)}
              >
                <button>
                  {show ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
              </span>
            </div>

            {error.password && (
              <p className=" text-red-500 text-xs font-normal flex">
                {error.password}
              </p>
            )}
          </div>
          <div className=" grid grid-cols-3 gap-1">
            <div className="col-span-2 flex items-center justify-start">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-[18px] h-[18px] rounded-[4px] border-[1px] border-[#ECECEC] bg-transparent text-blue-600 focus:ring-blue-500 focus:ring-2"
                required
                onChange={togglePersist}
              ></input>
              <label
                htmlFor="link-checkbox"
                className="ms-2 text-[12px] font-['Inter'] leading-[14.52px] text-[#000000]"
              >
                Remember me
              </label>
            </div>
            <a
              href="./forgot-password"
              className="text-sm text-right items-end text-[#000000] font-['Inter'] font-normal text-[12px] leading-[14.52px] underline hover:text-[#0b9588] hover:scale-105"
            >
              Forgot password
            </a>
          </div>
          <br></br>
          <button
            type="submit"
            className="w-full text-white text-xl font-semibold font-['Inter'] h-12 px-10 py-2.5 bg-loginButton hover:bg-green-700 focus:ring-2 focus:outline-none focus:ring-green-700 rounded-md dark:bg-loginButton dark:hover:bg-green-600 dark:focus:ring-green-700"
          >
            Log in
          </button>
          <div className="mt-4 flex justify-center items-center gap-3">
            <div className="text-[#C4C4C4] text-[12px] font-['Inter'] font-normal leading-[14.52px]">
              Don't have an account?
            </div>
            <a href="/sign-up" className="text-[#000000] text-[12px] font-['Inter'] font-normal leading-[14.52px] hover:text-[#0b9588] hover:scale-105 focus:outline-none"
            onClick={handleSignUpPageClick}>
              Sign up for here!
            </a>
          </div>
          {/* Logo Image */}
          <div className="mt-4 flex justify-center">
            <img
              src="/ESG_Logo.png"
              alt="Logo"
              className="w-[149px] h-[48] absolute bottom-[3%]">
              </img>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
