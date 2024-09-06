import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"
          alt="bg-image"
        />
      </div>
      <form className=" absolute w-3/12 bg-black p-12 my-52 mx-auto right-0 left-0 rounded-lg text-white bg-opacity-60">
        <h1 className="font-bold text-3xl m-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="First Name"
            className="m-2 p-4 w-full rounded-md bg-gray-300"
          />
        )}
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Last Name"
            className="m-2 p-4 w-full rounded-md bg-gray-300"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="m-2 p-4 w-full rounded-md bg-gray-300"
        />
        <input
          type="password"
          placeholder="Password"
          className="m-2 p-4 w-full rounded-md bg-gray-300"
        />
        <button className="bg-red-700 p-4 m-2 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2.5 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix. Sign Up now"
            : "Already an User. Sign  In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
