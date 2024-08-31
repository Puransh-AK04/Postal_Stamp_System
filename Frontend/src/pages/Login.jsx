import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

// Inline CSS styles for the animation
const slideStyles = `
  .slide-enter {
    transform: translateX(100%);
    opacity: 0;
  }
  .slide-enter-active {
    transform: translateX(0);
    opacity: 1;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
  .slide-exit {
    transform: translateX(0);
    opacity: 1;
  }
  .slide-exit-active {
    transform: translateX(-100%);
    opacity: 0;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
`;

// Add styles to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = slideStyles;
document.head.appendChild(styleSheet);

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [capsLock, setCapsLock] = useState(false);

  // Detect Caps Lock state
  useEffect(() => {
    const handleCapsLock = (event) => {
      setCapsLock(event.getModifierState("CapsLock"));
    };

    window.addEventListener("keydown", handleCapsLock);
    window.addEventListener("keyup", handleCapsLock);

    return () => {
      window.removeEventListener("keydown", handleCapsLock);
      window.removeEventListener("keyup", handleCapsLock);
    };
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 font-sans px-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6 md:p-8 max-h-[90vh] overflow-auto">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {isSignUp ? "Create Your Account" : "Welcome Back"}
        </h1>
        <div className="flex flex-col md:flex-row mb-6">
          <button
            onClick={() => setIsSignUp(false)}
            className={`flex-1 py-3 rounded-lg ${
              !isSignUp ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            } hover:${!isSignUp ? "bg-blue-700" : "bg-gray-300"} transition duration-300`}
          >
            Login
          </button>
          <button
            onClick={() => setIsSignUp(true)}
            className={`flex-1 mt-2 md:mt-0 md:ml-2 py-3 rounded-lg ${
              isSignUp ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            } hover:${isSignUp ? "bg-blue-700" : "bg-gray-300"} transition duration-300`}
          >
            Sign Up
          </button>
        </div>

        <TransitionGroup>
          <CSSTransition
            key={isSignUp ? 'signup' : 'login'}
            timeout={300}
            classNames="slide"
          >
            <div>
              {!isSignUp ? (
                <form>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-800 mb-2 text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="password" className="block text-gray-800 mb-2 text-sm font-medium">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    {capsLock && (
                      <p className="text-red-500 text-xs mt-1">
                        Caps Lock is ON
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Login
                  </button>
                </form>
              ) : (
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-800 mb-2 text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-800 mb-2 text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="password" className="block text-gray-800 mb-2 text-sm font-medium">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    {capsLock && (
                      <p className="text-red-500 text-xs mt-1">
                        Caps Lock is ON
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Sign Up
                  </button>
                </form>
              )}
            </div>
          </CSSTransition>
        </TransitionGroup>

        <p className="text-center text-gray-600 mt-6">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-600 font-semibold hover:underline"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
