import React from "react";
import Logo from '../assets/MoovieTime-Logo.png'

const Navbar = () => {
  return (
    <div className="bg-gray-700">
    <header className="text-gray-600 body-font flex justify-evenly">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={Logo} className="w-32" alt="Logo-Home" />
          </a>
                <div className="bg-white ml-20 w-1/2 flex items-center rounded-full border border-gray-700">
                  <input
                    className="bg-gray-500 rounded-md w-full py-3 px-6 text-zinc-500 text-xl font-normal leading-tight focus:outline-none"
                    id="search"
                    type="text"
                    placeholder="Find movie"
                  />
                </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="text-slate-200 font-semibold text-xl mr-5 hover:text-gray-900">Categories</a>
            <a className="text-slate-200 font-semibold text-xl mr-5 hover:text-gray-900">Movies</a>
            <a className="text-slate-200 font-semibold text-xl mr-5 hover:text-gray-900">Tv Shows</a>
            <a className="text-slate-200 font-semibold text-xl mr-5 hover:text-gray-900">Login</a>
          </nav>
        </div>
      </header>
    </div>
      
  );
};

export default Navbar;
