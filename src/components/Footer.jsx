import React from "react";
import logo from "../assets/logo.png";
import instagram from "../assets/footer-insta.png";
import facebook from "../assets/footer-face.png";
import google from "../assets/footer-google.png";
import twitter from "../assets/footer-twitter.png";
import safari from "../assets/footer-brows.png";

const Footer = () => {
  return (
    <footer className="bg-[#184753] text-white px-4 md:px-10 py-8 text-center rounded-2xl" id="contact">
      <div className="flex flex-wrap justify-center gap-7 md:gap-10 border-b border-white/50 pb-4">
        {["Home", "Company", "About", "Contact", "My Account", "Log in"].map((item, idx) => (
          <a key={idx} href="#" className="lg-text-2xl md:text-lg  hover:underline">
            {item}
          </a>
        ))}
      </div>

      <div className="flex flex-col items-center mt-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
          <img src={logo} alt="Logo" className="h-30 hidden md:block" />

          <div className="flex gap-10">
            <img src={instagram} alt="Instagram" className="h-6 w-6 md:h-8 md:w-8" />
            <img src={facebook} alt="Facebook" className="h-6 w-6 md:h-8 md:w-8" />
            <img src={google} alt="Google" className="h-6 w-6 md:h-8 md:w-8" />
            <img src={twitter} alt="Twitter" className="h-6 w-6 md:h-8 md:w-8" />
            <img src={safari} alt="Other" className="h-6 w-6 md:h-8 md:w-8" />
          </div>

          <img src={logo} alt="Logo" className="h-30 hidden md:block" />
        </div>

        <p className="text-sm md:text-lg text-white/80 mt-4 md:-mt-4">
          All right reserved by strong hearted 2025
        </p>
      </div>

      <div className="max-w-6xl mx-auto ">
    <div className="pt-5 flex justify-center">
      <div className="flex flex-wrap gap-2 lg:gap-45 text-xs md:text-base text-center">
        <a href="#" className="hover:underline lg:-ml-10">Terms & condition</a>
        <a href="#" className="hover:underline">Privacy & Policy</a>
        <a href="#" className="hover:underline lg:ml-20">Legal</a>
      </div>
    </div>
  </div>
    </footer>
  );
};

export default Footer;
