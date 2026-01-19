import React,{useEffect} from "react";
import model from "../assets/model.png";
import star from "../assets/star.png";
import twiter from "../assets/twiter.png";
import insta from "../assets/insta.png";
import facebook from "../assets/facebook.png";

import Aos from "aos";
import "aos/dist/aos.css"

 function HeroSection() {
     useEffect(()=>{
          Aos.init();
        },[]);
    return (
        <section  className="bg-[#0e4b5b] text-white px-4 sm:px-6 md:px-10 lg:px-14 py-12 flex flex-col md:flex-row justify-between gap-6 rounded-b-2xl relative overflow-hidden pt-30">
            <div className="flex-1 space-y-6 relative z-10" data-aos="fade-right" data-aos-duration="1500">

                <h1 className="text-4xl md:text-6xl font-bold leading-tight hero-font pt-6 w-full ">
                    This Is The Place <br />
                    For All Your <span className="text-[#aac3db]">Styles</span>
                </h1>

                <p className="text-gray-200 text-xl">Updated , latest competitive price</p>
                <button className="bg-[#aac3db] text-[#0e4b5b] px-4 py-2 rounded-full font-medium hover:bg-white lg:ml-10 ">
                   <a href="#"> Shop Details </a>
                </button>
                <div className="flex gap-6 mt-4">
                    <div>
                        <p className="text-3xl font-semibold">920+</p>
                        <p className="text-sm text-gray-300">Stock product</p>
                    </div>
                    <div>
                        <p className="text-3xl font-semibold">10k+</p>
                        <p className="text-sm text-gray-300">Monthly sell</p>
                    </div>
                    <div>
                        <p className="text-3xl font-semibold">1520+</p>
                        <p className="text-sm text-gray-300">Happy customer</p>
                    </div>
                </div>

                <div className="flex gap-6 pt-4 ml-10 ">
                    <button className="bg-[#a5c6d6] h-10 w-20  rounded-md text-black text-xl   cursor-pointer">
                        <span className="material-icons text-white">arrow_forward</span>
                    </button>
                    <button className="bg-white h-10 w-20 rounded-md text-black text-xl cursor-pointer">
                        <span className="material-icons">arrow_back</span>
                    </button>
                </div>
            </div>

            <div className="flex-1 flex items-center justify-center lg:-ml-40" data-aos="fade-left" data-aos-duration="1500">
                <img src={model} alt="Model" />
            </div>

            <div className="hidden lg:absolute lg:right-4 lg:top-1/4 lg:flex lg:flex-col lg:items-center lg:space-y-4 pt-12 ">
                <span className="rotate-90 text-xl font-semibold">Follow Us On</span>
                <img src={twiter} alt="Twitter" className="w-5 pt-15" />
                <img src={insta} alt="Instagram" className="w-5" />
                <img src={facebook} alt="Facebook" className="w-5" />
            </div>

            <img src={star} alt="star" className="absolute top-29 ml-30 w-4 md:w-6" />
            <img src={star} alt="star" className="absolute bottom-47 ml-90 w-4 md:w-8" />
            <img src={star} alt="star" className="absolute top-30 right-1/7 w-4 md:w-8" />
            <img src={star} alt="star" className="absolute top-50  right-1/2 w-4 md:w-8" />

        </section>
    );
}

export default HeroSection
