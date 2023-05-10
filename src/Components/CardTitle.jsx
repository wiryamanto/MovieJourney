import React from "react";
import Logo from "../assets/image 1.png";

const CardTitle = () => {
  return (
    // <section class="text-gray-600 body-font">
    //   <div class="container px-5 py-24 mx-auto">
    //     <div class="flex flex-wrap -m-4">
    //       <div class="p-4 md:w-1/3">
    //         <div class="h-full border-opacity-60 rounded-lg overflow-hidden">
    //           <img
    //             class="lg:h-96 md:h-36 w-80 object-cover object-center"
    //             src={Logo}
    //             alt="blog"
    //           />
    //           <div class="p-6">
    //             <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
    //               CATEGORY
    //             </h2>
    //             <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
    //               The Catalyzer
    //             </h1>
    //             <p class="leading-relaxed mb-3">
    //               Photo booth fam kinfolk cold-pressed sriracha leggings
    //               jianbing microdosing tousled waistcoat.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="bg-gray-700 mt-12 p-5 px-28 ">
      <hr className="p-1 mt-20 mb-2 bg-[#E74C3C] w-36 " />
      <div className="flex justify-between">
        <h2 className="text-zinc-200 text-3xl font-medium">Discover Movies</h2>
        <div className="flex gap-4 text-zinc-200 items-center">
          <h2 className="text-lg font-medium">My Movies</h2>
          <h2 className="bg-gray-800 rounded-3xl  px-5 py-2 ">
            <b>2</b> movies
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap justify-between w-full h-screen">
        <div className="w-3/12 rounded-xl p-3 bg-gray-900 mt-12">
          <span className="inline-block font-semibold text-xl text-zinc-200 mt-6 ml-5 lg:ml-4 md:ml-2 sm:ml-0 pb-4">
            Sort Result By
          </span>
          <ul className="space-y-2 text-lg text-zinc-200">
            <li>
              {/* <Link to="/Kategori" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium focus:shadow-outline"> */}
              <span>
                <i className="fas fa-tachometer-alt" />
              </span>
              <span>Technology</span>
              {/* </Link> */}
            </li>
            <li>
              {/* <Link to="/Kategori" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium focus:shadow-outline"> */}
              <span>
                <i className="fas fa-history" />
              </span>
              <span>History</span>
              {/* </Link> */}
            </li>
          </ul>
        </div>
        <div className="w-9/12 rounded p-3">
          <div className="flex flex-wrap m-5">
            <div className="p-4 lg:w-1/3">
              <div className="className h-full sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                {/* <Link to="/Desc"> */}
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-64 h-96 object-cover object-center sm:mb-0 mb-4"
                  src={Logo}
                />
                {/* </Link> */}
                <div className="flex-grow pt-3">
                  <h2 className="text-xl font-semibold text-zinc-200">
                    Wonder Woman 1984
                  </h2>
                  <h3 className="text-zinc-400 font-normal mb-3">2020</h3>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="className h-full sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                {/* <Link to="/Desc"> */}
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-64 h-96 object-cover object-center sm:mb-0 mb-4"
                  src={Logo}
                />
                {/* </Link> */}
                <div className="flex-grow pt-3">
                  <h2 className="text-xl font-semibold text-zinc-200">
                    Wonder Woman 1984
                  </h2>
                  <h3 className="text-zinc-400 font-normal mb-3">2020</h3>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="className h-full sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                {/* <Link to="/Desc"> */}
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-64 h-96 object-cover object-center sm:mb-0 mb-4"
                  src={Logo}
                />
                {/* </Link> */}
                <div className="flex-grow pt-3">
                  <h2 className="text-xl font-semibold text-zinc-200">
                    Wonder Woman 1984
                  </h2>
                  <h3 className="text-zinc-400 font-normal mb-3">2020</h3>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardTitle;
