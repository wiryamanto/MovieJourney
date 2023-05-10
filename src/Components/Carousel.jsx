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
        <div className="flex justify-center flex-row flex-nowrap mt-2 mx-2">
          <div className="section bg-image overflow-hidden text-white lg:bg-black bg-opacity-90 md:bg-transparent sm:bg-white rounded-lg mx-2 lg:shadow-2xl md:shadow-none sm:shadow-none">
            {/* <Link to=""> */}
            <div className="grid md:grid-cols-2 w-3/4">
              <img src={Logo} alt="" />
              <div className="pt-4 pl-4">
                <div className="text px-2">
                  <div className="text-2xl font-semibold">Space Sweepers</div>
                  <p className="text-grey-darker text-base">Marius Oelsching</p>
                </div>
              </div>
            </div>
            {/* </Link> */}
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Carousel;
