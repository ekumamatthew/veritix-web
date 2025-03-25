// import React from 'react';

import React from "react";
import TrendingEvent from "../components/TrendingEvent";

// import SignUpForm from '../components/forms/SignUpForm';
// import SignInForm from '../components/forms/SignInForm';
function Home() {
  return (
    <div className="flex flex-col w-full bg-transparent ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Our Website
        </h1>

        {/* <SignInForm /> */}
        {/* <SignUpForm /> */}
      </div>
      <TrendingEvent />
    </div>
  );
}

export default Home;