import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();
  return (
    <div className="flex h-screen bg-gradient-to-r from-black to-blue-900 text-white">
      {/* Left Section */}
      <div className="hidden lg:flex flex-col justify-center items-start w-1/2 px-16">
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
          <h1 className="text-3xl font-bold">MOCKMATE AI</h1>
        </div>
        <h2 className="text-4xl font-bold mt-6">Building the Future...</h2>
        <p className="mt-4 text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center bg-white text-black">
        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl font-semibold text-center">Create an Account</h2>

          {/* Name Input */}
          <div className="mt-6">
            <label className="block text-gray-600 text-sm">Your Name</label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div className="mt-4">
            <label className="block text-gray-600 text-sm">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mt-4 relative">
            <label className="block text-gray-600 text-sm">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="absolute right-3 top-10 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Signup Button */}
          <button onClick={() => navigate('/pussy')} className="w-full mt-6 bg-black text-white py-2 rounded-lg hover:bg-gray-800">
            GET STARTED
          </button>

          {/* OR Separator */}
          <div className="flex items-center my-6">
            <div className="w-full border-t"></div>
            <span className="px-4 text-gray-500">Or</span>
            <div className="w-full border-t"></div>
          </div>

          {/* Social Signup Buttons */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center py-2 border rounded-lg hover:bg-gray-100">
              <FcGoogle className="mr-2" /> Sign up with Google
            </button>
            <button className="w-full flex items-center justify-center py-2 border rounded-lg hover:bg-gray-100">
              <FaFacebook className="text-blue-600 mr-2" /> Sign up with Facebook
            </button>
            <button className="w-full flex items-center justify-center py-2 border rounded-lg hover:bg-gray-100">
              <FaApple className="mr-2" /> Sign up with Apple
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center mt-4 text-sm text-gray-600">
            Already have an account? <button onClick={() => navigate('/')} className="text-blue-500 font-semibold hover:underline">LOG IN HERE</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;