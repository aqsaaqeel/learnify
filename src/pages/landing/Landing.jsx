import React from "react";
import { Footer } from "../../component";
export const Landing = () => {
  return (
    <div>
      <div className="text-center bg-gray-50 text-gray-800 py-24 px-6">
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
          One stop to learning <br />
          <span className="text-blue-600">core programming concepts.</span>
        </h1>
        <h4 className="text-5xl md:text-2xl xl:text-2xl font-bold tracking-tight mb-12">
          Gamifies learning concepts to make programming easier
        </h4>
        <a
          className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="/dashboard"
          role="button"
        >
          Get started
        </a>
      </div>
      <div className="flex justify-center pb-10">
        <img
          src="https://i.ibb.co/Lp0Qptn/hero-image.jpg"
          className="max-w-full h-auto"
          alt="..."
        />
      </div>
      <Footer />
    </div>
  );
};
