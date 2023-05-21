import React from "react";
import Logo from "../assets/image 1.png";
import Logo2 from "../assets/image 11.png";
import Logo3 from "../assets/image 3.png";
import Logo4 from "../assets/image 4.png";

const Card = () => {
  return (
    // FIX CONTENT!!
    <>
      <section className="bg-gray-700 mt-12 p-5 px-28 ">
        <hr className="p-1 mt-20 mb-2 bg-[#E74C3C] w-36 " />
        <div className="flex justify-between">
          <h2 className="text-zinc-200 text-3xl font-medium">
            Discover Movies
          </h2>
          <div className="flex gap-4 text-zinc-200 items-center">
            <h2 className="text-lg font-medium">My Movies</h2>
            <h2 className="bg-gray-800 rounded-3xl  px-5 py-2 ">
              <b>2</b> movies
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-full h-screen">
          <div className="w-3/12 rounded-xl p-3 bg-gray-900 mt-12">
            <div className="ml-22 text-white border-b-2 border-navbar ">
              <h1 className="px-6 py-2 text-xl font-semibold">
                Sort Result By
              </h1>
            </div>
            <div className="px-6 py-4 text-white ml-22 content-center border-b-2">
              <select className="py-3 px-6 bg-gray-700 rounded-md">
                <option className="bg-gray-700">Popularity</option>
                <option className="bg-gray-700">Popularity Descending</option>
                <option className="bg-gray-700">Release Date Ascending</option>
                <option className="bg-gray-700">Popularity Ascending</option>
                <option className="bg-gray-700">Rating Ascending</option>
                <option className="bg-gray-700">Rating Descending</option>
              </select>
            </div>
            <div className="bg-slider ml-22 text-white border-b-2 border-navbar">
              <h1 className="px-6 py-2 text-xl font-semibold">Genres</h1>
            </div>
          </div>
          <div className="w-9/12 rounded p-3">
            <div className="flex flex-wrap m-5">
              <div className="p-4 lg:w-1/4">
                <div className="h-full  sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <div className="relative">
                    <div className="bg-[#1E232B] opacity-80 absolute right-0 top-0 p-2">
                      <span className=" opacity-  text-slate-200 px-1 py-1 tracking-widest text-xl font-bold">
                        7.0
                      </span>
                    </div>
                    <img
                      alt="team"
                      className="flex-shrink-0 w-64 h-96 object-cover object-center sm:mb-0 mb-4"
                      src={Logo}
                    />
                  </div>
                  <div className="flex-grow pt-3">
                    <h2 className="text-xl font-semibold text-zinc-200">
                      Wonder Woman 1984
                    </h2>
                    <h3 className="text-zinc-400 font-normal mb-3">2020</h3>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/4">
                <div className="className h-full sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <div className="relative">
                    <div className="bg-[#1E232B] opacity-80 absolute right-0 top-0 p-2">
                      <span className=" opacity-  text-slate-200 px-1 py-1 tracking-widest text-xl font-bold">
                        6.4
                      </span>
                    </div>
                    <img
                      alt="team"
                      className="flex-shrink-0 w-64 h-96 object-cover object-center sm:mb-0 mb-4"
                      src={Logo2}
                    />
                  </div>
                  <div className="flex-grow pt-3">
                    <h2 className="text-xl font-semibold text-zinc-200">
                      Blow Zero
                    </h2>
                    <h3 className="text-zinc-400 font-normal mb-3">2021</h3>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/4">
                <div className="className h-full sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <div className="relative">
                    <div className="bg-[#1E232B] opacity-80 absolute right-0 top-0 p-2">
                      <span className=" opacity-  text-slate-200 px-1 py-1 tracking-widest text-xl font-bold">
                        6.3
                      </span>
                    </div>
                    <img
                      alt="team"
                      className="flex-shrink-0 w-64 h-96 object-cover object-center sm:mb-0 mb-4"
                      src={Logo3}
                    />
                  </div>
                  <div className="flex-grow pt-3">
                    <h2 className="text-xl font-semibold text-zinc-200">
                      The Little Things
                    </h2>
                    <h3 className="text-zinc-400 font-normal mb-3">2021</h3>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/4">
                <div className="h-full  sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <div className="relative">
                    <div className="bg-[#1E232B] opacity-80 absolute right-0 top-0 p-2">
                      <span className=" opacity-  text-slate-200 px-1 py-1 tracking-widest text-xl font-bold">
                        6.5
                      </span>
                    </div>
                    <img
                      alt="team"
                      className="flex-shrink-0 w-64 h-96 object-cover object-center sm:mb-0 mb-4"
                      src={Logo4}
                    />
                  </div>
                  <div className="flex-grow pt-3">
                    <h2 className="text-xl font-semibold text-zinc-200">
                      Outside the Wire
                    </h2>
                    <h3 className="text-zinc-400 font-normal mb-3">2021</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
