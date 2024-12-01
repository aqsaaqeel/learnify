import { useState } from "react";
import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Link } from "react-router-dom";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const {loginWithRedirect} = useAuth0();
  return (
    <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
      <div className="px-6 w-full flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <button
            className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 
                76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 
                0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 
                16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <a className="navbar-brand text-blue-600" href="/">
            Learnify
          </a>
        </div>
        
        <div className="flex items-center lg:ml-auto">
          {/* <button
            type="button"
            className="inline-block px-6 py-2.5 mr-2 bg-transparent text-blue-600 
          font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 
          focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            onClick={() =>
              loginWithRedirect({
                authorizationParams: {
                  redirect_uri: `${window.location.origin}/`
                }
              })
            }
          >
            Login
          </button> */}

          {/* <Link to="/scoreboard"><button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white 
          font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg
           focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg 
           transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            ScoreBoard
          </button></Link> */}
        </div>
      </div>
    </nav>
  );
};
