import React, { useState, useEffect } from "react";
import shirt1 from "../assets/shirt1.png";
import shirt2 from "../assets/shirt2.png";
import shirt3 from "../assets/shirt3.png";

const shirts = [
  { src: shirt1, alt: "Checked Shirt" },
  { src: shirt2, alt: "Blue Shirt" },
  { src: shirt3, alt: "White Textured Shirt" },
  { src: shirt1, alt: "Grey Casual Shirt" },
  { src: shirt2, alt: "Black Formal Shirt" },
];

const ShirtCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const totalShirts = shirts.length;

  const updateVisibleCards = () => {
    if (window.innerWidth < 768) {
      setVisibleCards(1); 
    } else {
      setVisibleCards(3); 
    }
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const nextImage = () => {
    setStartIndex((prev) => (prev + 1) % totalShirts);
  };

  const getCardClass = (index) => {
    return index === Math.floor(visibleCards / 2)
      ? "scale-110 shadow-2xl z-20"
      : "scale-95 opacity-70 z-10";
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center  bg-white px-4">
   
      <div className="w-full max-w-5xl mb-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-5xl font-bold hero-font">New Arrival</h1>
          <button
            onClick={nextImage}
            className="p-3 flex items-center justify-center"
          >
            <span
              className="material-icons cursor-pointer"
              style={{ fontSize: "60px", lineHeight: "0" }}
            >
              arrow_forward
            </span>
          </button>
        </div>
        <p className="text-gray-700 text-md ">
          The brand value of this fashion company is just for us newbies
        </p>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-center">
        <div className="flex space-x-10 transition-all duration-500 ease-in-out">
          {Array.from({ length: visibleCards }).map((_, i) => {
            const index = (startIndex + i) % totalShirts;
            const shirt = shirts[index];
            return (
              <div
                key={index}
                className={`transition-transform duration-500 ease-in-out transform bg-white border-2 shadow-2xl border-black rounded-lg overflow-hidden ${getCardClass(i)}`}
              >
                <img
                  src={shirt.src}
                  alt={shirt.alt}
                  className="w-64 h-80 object-cover rounded-lg"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShirtCarousel