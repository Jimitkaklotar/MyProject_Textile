import React from "react";
import shose1 from "../assets/shose1.png";
import shose2 from "../assets/shose2.png";
import like from "../assets/like.png";

 function TrendingShoes() {
    return (
        <div className="min-h-screen bg-white p-6 lg:px-10">
            <div className="flex flex-col md:flex-row justify-between items-start mb-10">
                <div>
                    <h1 className="text-5xl font-bold text-black">
                        <span className="hero-font">Our Trending Shoes</span>
                    </h1>
                    <p className="text-gray-900 mt-2 text-md">
                        We Provide the latest shoes designs and new styles.
                    </p>
                </div>
                <span
                    className="material-icons cursor-pointer mt-4 md:mt-0"
                    style={{ fontSize: "60px" }}
                >
                    arrow_forward
                </span>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-30"> 
              
                <div className="relative w-full sm:w-70 md:w-96 p-6 bg-white rounded-2xl shadow-lg " data-aos="fade-right" data-aos-duration="1500">
                    <h2 className="text-lg font-semibold text-gray-800 card-font">Ladies White Shoes</h2>
                    <p className="text-xs text-gray-700 mb-2 mt-1 card-font">
                        Our Beautiful White Shoes Are Very <br />Much Ahead Of The Trend
                    </p><br />
                    <h3 className="text-4xl font-bold hero-font mb-4">For Women’s</h3>
                    <div className="flex items-center mt-12 space-x-4">

                        <div className="flex items-center space-x-2">
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm font-medium">4.5</span>
                        </div>

                        <button className="bg-blue-200 text-white px-4 py-2 rounded-lg text-sm">
                            Add to cart
                        </button>

                        <img src={like} alt="like icon" className="w-5 h-5" />
                    </div>

                    <div className="mt-4 flex items-center space-x-4">

                        <p className="text-xs font-semibold text-gray-800">Price<br /> $50</p>

                        <div className="flex items-center gap-2 ml-10 ">
                            <span className="w-3 h-3 rounded-full bg-black"></span>
                            <span className="w-3 h-3 rounded-full bg-red-500"></span>
                            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                        </div>

                        <p className="text-xs text-gray-600 ml-5">Size<br />S M L XL</p>
                    </div>

                    <img
                        src={shose1}
                        alt="Women Shoe Model"
                        className="absolute -right-10 bottom-10 w-32 h-48 object-cover rounded-lg shadow-xl"
                    />
                </div>

                {/* Men's Shoes Card */}
                <div className="relative w-full sm:w-60 md:w-96 p-6 bg-white rounded-2xl shadow-lg" data-aos="fade-left" data-aos-duration="1500">
                    <h2 className="text-lg font-semibold text-gray-800 card-font">Men’s Custom Shoes</h2>
                    <p className="text-xs text-gray-700 mb-2 card-font mt-1">
                        Our Beautiful Custom Shoes Are Very <br /> Much Ahead Of The Trend
                    </p><br />
                    <h3 className="text-4xl font-bold hero-font mb-4">For Men’s</h3>
                    <div className="flex items-center mt-12 space-x-4">

                        <div className="flex items-center space-x-2">
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm font-medium">4.5</span>
                        </div>

                        <button className="bg-blue-200 text-white px-4 py-2 rounded-lg text-sm">
                            Add to cart
                        </button>

                        <img src={like} alt="like icon" className="w-5 h-5" />
                    </div>

                    <div className="mt-4 flex items-center space-x-4">

                        <p className="text-xs font-semibold text-gray-800">Price<br /> $50</p>

                        <div className="flex items-center gap-2 ml-10 ">
                            <span className="w-3 h-3 rounded-full bg-black"></span>
                            <span className="w-3 h-3 rounded-full bg-red-500"></span>
                            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                        </div>

                        <p className="text-xs text-gray-600 ml-5">Size<br />S M L XL</p>
                    </div>

                    <img
                        src={shose2}
                        alt="Men Shoe Model"
                        className="absolute -right-10 bottom-10 w-32 h-48 object-cover rounded-lg shadow-xl"
                    />
                </div>
            </div>
        </div>
    );
}

export default TrendingShoes