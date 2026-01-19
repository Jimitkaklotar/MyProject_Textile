import React, { useState } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import insta from "../assets/card-insta.png";

const images = [img1, img2, img3, img4, img5];

const InstagramSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(2);

  return (
    <div className="bg-white py-12 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 hero-font">
        STRONGHEARTED FOLLOW US ON @ INSTAGRAM
      </h2>
      <p className="text-gray-700 mb-10 text-lg">
        The famous company brand is all over the world and <br className="hidden md:block" />
        has some instagram followers.
      </p>

      <div className="flex flex-wrap justify-center gap-6 px-6" data-aos="zoom-out" data-aos-duration="1500">
        {images.map((img, index) => {
          const isHovered = index === hoveredIndex;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(2)}
              className={`relative cursor-pointer w-[200px] h-[250px] md:w-[200px] md:h-[320px] rounded-xl overflow-hidden border-2 transform transition-transform duration-300 
                ${isHovered ? "scale-105" : "scale-95"}`}
            >
              <img
                src={img}
                alt={`Insta ${index}`}
                className="w-full h-full object-cover rounded-xl"
              />

              <div
                className={`absolute inset-0 bg-black flex items-center justify-center transition-opacity duration-300 
                  ${isHovered ? "bg-opacity-50 opacity-50" : "bg-opacity-0 opacity-0"}`}
              >
                <span>
                  <img src={insta} alt="Instagram icon" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InstagramSection;
