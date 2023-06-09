import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Logo from "../assets/image 12.png";

const Carousel = () => {
  return (
    <div className="mt-24">
      <OwlCarousel
        className="owl-theme bg-slider"
        items="3"
        autoPlay
        nav
        dots
        loop
      >
        <div className="item flex justify-center flex-row flex-nowrap">
          <div className="w-96">
            <img src={Logo} alt="image1" className="h-80" />
          </div>
          <div className="bg-black mt-8 pt-4 mb-8 w-11/12 mr-5 pr-4">
            <div className="pl-2 mr-2 mt-2 inline-block">
              {/* content untuk rating  */}
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 text-yellow-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <p className="font-bold inline-block text-base text-white">7.3</p>
            <div className="pl-3 text-white h-50">
              <h1 className="font-bold text-2xl">Space Sweepers</h1>
              <h5 className="inline-block">2021</h5>
              <h1 className="inline-block">Sci-fi</h1>
              <p className="text-sm font-light my-2 line-clamp-4">
                When the crew of a space junk collector ship called The Victory
                discovers a humanoid robot named Dorothy that's known to be a
                weapon of mass destruction, they get involved in a risky
                business deal which puts their lives at stake.
              </p>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Carousel;
