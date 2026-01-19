import React from 'react';
import girl from '../assets/girl.png';
import applestore from '../assets/applestore.png';
import googleplay from '../assets/googleplay.png';
import ReebokLogo from '../assets/reebok.png';
import NikeLogo from '../assets/nike.png';
import PoloLogo from '../assets/polo.png';
import AdidasLogo from '../assets/adidas.png';

const VoucherSection = () => {
  return (
    <div className="flex flex-col items-center  px-4 py-10">

      <div className="bg-[#17414C]  rounded-xl flex flex-col md:flex-row items-center md:items-stretch text-white w-full max-w-6xl overflow-hidden">

        <div className="flex flex-1 justify-center items-center  ">
          <div className="flex flex-col justify-center items-center text-center gap-4 p-4 md:p-0 lg:p-0 lg:ml-35 md:ml-10" data-aos="fade-right" data-aos-duration="1500">
            <h2 className="text-2xl lg:text-3xl font-semibold">
              Get Voucher Discount Up To 20%
            </h2>
            <p className="text-sm md:text-base max-w-md lg:mt-8">
              We Welcome Anyone Who Buys A Product From Us For The First Time Through Mobile Apps
            </p>
            <div className="flex gap-4 mt-2 lg:mt-7">
              <img src={applestore} alt="App Store" className="h-12 rounded-xl" />
              <img src={googleplay} alt="Google Play" className="h-12" />
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 md:mt-20 -mb-6" data-aos="fade-left" data-aos-duration="1500">
          <img src={girl} alt="Shopping Girl" className="h-full max-h-[300px] object-contain" />
        </div>
      </div>
      <div className="flex justify-center items-center md:gap-25 gap-5 flex-wrap w-full cursor-pointer " data-aos="fade-up" data-aos-duration="1500">
        <img src={ReebokLogo} alt="Reebok" className="lg:h-40 h-25  " />
        <img src={NikeLogo} alt="Nike" className="lg:h-40 h-25 " />
        <img src={PoloLogo} alt="Polo Ralph Lauren" className="lg:h-50 h-40" />
        <img src={AdidasLogo} alt="Adidas" className="lg:h-40  h-25" />
      </div>
    </div>
  );
};

export default VoucherSection;
