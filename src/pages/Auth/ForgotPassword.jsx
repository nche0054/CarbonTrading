import React, { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { publicAxios } from '../../api/axios'; // Ensure this path matches your project structure

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [serverError, setServerError] = useState('');

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i
    );
  };

  const handleSignUpPageClick = () => {
    navigate('/sign-up'); // Navigate to the home page
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setServerError('');

    if (!email || !validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      await publicAxios.post(
        '/auth/request-password-reset',
        JSON.stringify({ email: email })
      );
      navigate('/info-success', { replace: true });
    } catch (err) {
      if (err.response) {
        let errorMessage =
          'An unexpected error occurred. Please try again later.';
        if (err.response.status === 404) {
          errorMessage =
            'If an account with that email exists, we have sent a reset password link.';
        } else if (err.response.status === 400) {
          errorMessage = 'Invalid request. Please check your input.';
        }
        setServerError(errorMessage);
      } else if (err.request) {
        setServerError('The request was made but no response was received.');
      } else {
        setServerError('Error setting up the request.');
      }
    }
  };

  return (
    <div className="max-h-screen bg-[#ffffff] flex flex-col justify-center items-center px-4 lg:px-32 py-32">
      <a href="/sign-in" className="self-start mb-16">
        <button className="flex items-center text-black-300">
          <FaAngleLeft />
          <span className="ml-3">Back to Login</span>
        </button>
      </a>
      <div className="w-full max-w-md">
        <h1 className="text-zinc-800 text-4xl font-bold mb-4">
          Forgot your password?
        </h1>
        <p className="mb-8">
          Enter your email address below, and we'll email instructions for
          setting a new one.
        </p>
        {serverError && (
          <div className="text-red-500 text-sm mb-2">{serverError}</div>
        )}
        {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2.5 text-sm rounded-md border border-zinc-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-loginButton hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700"
          >
            Send Verification Email
          </button>
        </form>
      </div>
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
    </div>
  );
}
