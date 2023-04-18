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
        <h2 className="text-5xl md:text-2xl xl:text-2xl font-bold tracking-tight mb-12">
          How does this work?
        </h2>
        <p className=" tracking-tight mb-12">
          - We are following Bloom's taxonomy. Bloom's Taxonomy is a framework
          used for organizing educational goals and objectives into a
          hierarchical model of cognitive domains.
        </p>
        <p className="tracking-tight mb-12">
          - There are six different levels or categories in Bloom's Taxonomy,
          each denoted by a verb that indicates the type of thinking or
          cognitive activity involved.
        </p>
        {/* Knowledge - recalling previously learned information or facts
Comprehension - understanding or interpreting the meaning of information */}
        <p className="font-bold tracking-tight mb-5">
          We are implementing the first two that are:{" "}
        </p>
        <ul className="p-5">
          <li className="text-blue-600">Knowledge - recalling previously learned information or facts</li>
          <li className="text-blue-600">
            Comprehension - understanding or interpreting the meaning of
            information
          </li>
        </ul>
        <a
          className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="/dashboard"
          role="button"
        >
          Get started
        </a>
        <a
          className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="#!"
          role="button"
        >
          Learn more
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
