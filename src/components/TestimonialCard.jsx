import React from "react";
import card from "../assets/card.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const TestimonialCard = () => {
  return (
    <div className="w-full py-10 px-6 lg:px-25">
      <h2 className="text-5xl font-bold mb-10 text-center hero-font">Our Customer Says</h2>

      <div className="w-full flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-10 rounded-xl ">

        <div className="">
          <div className="w-70 h-70 md:w-80 md:h-80 bg-[#1A4758] rounded-xl p-4 ">
            <img
              src={card}
              alt="Customer"
              className="rounded-md w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-left mt-6  md:mt-0 md:ml-10 w-full">
          <p className="lg:text-2xl card-font w-full max-w-6xl ">
            I am glad I can buy anything from the idyllic brand.<br />
            Very good quality clothes for people’s test and<br />
            Provide impeccable tailoring, glamor and<br />
            amazing dressing.
          </p>

          <div className="mt-6 flex gap-8">
            <p className="text-2xl font-semibold card-font">Jhon smith</p>
            <p className="text-gray-500 text-sm font-medium mt-5">Co – founder</p>
          </div><br />
          <div className="mt-4 flex space-x-4 gap-5 text-2xl">
            <a href="#" className="hover:scale-110 transition"><img src={icon1} /></a>
            <a href="#" className="hover:scale-110 transition"><img src={icon2} /></a>
            <a href="#" className="hover:scale-110 transition"><img src={icon3} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
