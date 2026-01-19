import React from "react";
import trend1 from "../assets/trend1.png";
import trend2 from "../assets/trend2.png";
import trend3 from "../assets/trend3.png";
import trend4 from "../assets/trend4.png";

const TrendingThisWeek = () => {
  return (
    <div className="p-5 md:p-10 bg-white">

      <div className="flex justify-between items-start flex-wrap">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 hero-font">Trending This Week</h1>
          <p className="text-gray-600">
            Armani providing impeccable tailoring glamour <br />
            and amazing trending dressing
          </p>
        </div>
        <span
          className="material-icons cursor-pointer mt-4 md:mt-0"
          style={{ fontSize: "60px" }}
        >
          arrow_forward
        </span>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 ">
        <div className="md:row-span-2 relative overflow-hidden" data-aos="fade-right" data-aos-duration="1500">
          <img
            src={trend1}
            alt="Western Style"
            className="w-full h-full object-cover "
          />
          <div className="absolute top-4 right-2 text-black">
            <p className="text-sm text-yellow-600 ml-7">
              upto <span className="font-bold">52%</span>
            </p>
            <h2 className="text-3xl font-normal font-serif">Western <br /> <span className="ml-8 "> Style</span></h2>
          </div>
        </div>

        <div className="md:col-span-2 relative overflow-hidden " data-aos="fade-down" data-aos-duration="1500">
          <img
            src={trend2}
            alt="Enjoy Summer"
            className="w-full h-48 md:h-full object-cover "
          />
          <div className="absolute bottom-4 right-4 text-black text-right">
            <p className="text-sm text-yellow-600">
              upto <span className="font-bold">30%</span>
            </p>
            <h2 className="text-3xl font-normal font-serif">Enjoy<br /> Summer</h2>
          </div>
        </div>

        <div className="relative overflow-hidden" data-aos="fade-left" data-aos-duration="1500">
          <img
            src={trend3}
            alt="Fill The Winter"
            className="w-full h-48 md:h-full object-cover "
          />
          <div className="absolute top-10 left-7 text-black">
            <p className="text-sm text-yellow-600">
              upto <span className="font-bold">48%</span>
            </p>
            <h2 className="text-3xl font-normal font-serif">Fill The <br /> Winter</h2>
          </div>
        </div>

        <div className="md:col-span-3 relative overflow-hidden"data-aos="fade-up" data-aos-duration="1500">
          <img
            src={trend4}
            alt="Men’s Fashion"
            className="w-full h-52 md:h-full object-cover"
          />
          <div className="absolute top-4 right-4 text-black text-right">
            <p className="text-md text-yellow-600">
              upto <span className="font-bold">48%</span>
            </p>
            <h2 className="text-3xl pt-2 font-normal font-serif">Men’s <br />  Fashion</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingThisWeek;
