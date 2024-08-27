import React, { useState } from "react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100 font-serif">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {isSignUp ? "Sign Up" : "Login"}
        </h1>
        <div className="flex justify-between mb-6">
          <button
            onClick={() => setIsSignUp(false)}
            className={`w-full mr-2 p-3 rounded-lg ${
              !isSignUp ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
            } hover:${
              !isSignUp ? "bg-blue-600" : "bg-gray-400"
            } transition duration-200`}
          >
            Login
          </button>
          <button
            onClick={() => setIsSignUp(true)}
            className={`w-full ml-2 p-3 rounded-lg ${
              isSignUp ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
            } hover:${
              isSignUp ? "bg-blue-600" : "bg-gray-400"
            } transition duration-200`}
          >
            Sign Up
          </button>
        </div>

        <form>
          {isSignUp && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
              />
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* Additional Links */}
        <p className="text-center text-gray-600 mt-4">
          {isSignUp ? "Already have an account? " : "Need an account? "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-500 hover:underline"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;