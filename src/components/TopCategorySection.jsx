import React, { useState } from "react";
import all from "../assets/all.png";
import men from "../assets/men.png";
import women from "../assets/women.png";
import bag from "../assets/bag.png";
import cap from "../assets/cap.png";
import shose from "../assets/shose.png";
import dress1 from "../assets/dress1.png";
import dress2 from "../assets/dress2.png";
import dress3 from "../assets/dress3.png";
import dress4 from "../assets/dress4.png";
import dress5 from "../assets/dress5.png";
import dress6 from "../assets/dress6.png";

const categories = [
  { name: "All", image: all },
  { name: "Men's", image: men },
  { name: "Women's", image: women },
  { name: "Bag", image: bag },
  { name: "Hat", image: cap },
  { name: "Shoes", image: shose },
];

const products = [
  {
    id: 1,
    name: "Meta Slives dress",
    image: dress1,
    rating: 4.5,
    price: "$19",
    size: "S M L XL",
  },
  {
    id: 2,
    name: "Floral Dress",
    image: dress2,
    rating: 4.2,
    price: "$25",
    size: "S M L",
  },
  {
    id: 3,
    name: "Elegant Dress",
    image:dress3,
    rating: 4.8,
    price: "$32",
    size: "M L XL",
  },
  {
    id: 4,
    name: "Fancy Dress",
    image: dress4,
    rating: 4.3,
    price: "$22",
    size: "S M",
  },
  {
    id: 5,
    name: "Modern Dress",
    image: dress5,
    rating: 4.6,
    price: "$29",
    size: "S M L XL",
  },
    
  {
    id: 6,
    name: "Modern Dress",
    image: dress6,
    rating: 4.6,
    price: "$29",
    size: "S M L XL",
  },
];

const TopCategorySection = () => {
  const [activeProductId, setActiveProductId] = useState(null);

  const handleMouseEnter = (id) => setActiveProductId(id);
  const handleMouseLeave = () => setActiveProductId(null);

  return (
    <div className="p-6 lg:px-[60px] md:p-12" id="Categories">
  <h2 className="text-5xl font-bold hero-font">Top Category</h2>
  <p className="text-sm mt-2 text-gray-900 max-w-xl">
    Hollywood stars are most loyal customers of this brand. We are the
    largest<br/> brand in the country and our super collection is trending.
  </p>

  <div className="flex flex-wrap justify-between gap-6 mt-6 w-full " data-aos="zoom-in" data-aos-duration="1500">
    {categories.map((cat, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center space-y-1 flex-1 min-w-[80px] max-w-[120px]"
      >
        <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden cursor-pointer" >
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-bold text-xl text-center">{cat.name}</span>
      </div>
    ))}
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 cursor-pointer"> 
    {products.map((product) => (
      <div
        key={product.id}
                  className="relative border-2 border-black rounded-xl  overflow-hidden hover:shadow-xl transition group"
      >
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl w-full h-110 object-cover"
        />

        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out pointer-events-none ">

          <div className="absolute top-4 left-0 rotate-[-90deg] text-sm font-medium text-black mt-10">
            {product.name}
          </div>

          <div className="flex items-center gap-2 text-yellow-600 mt-8">
            <span className="text-lg">★</span>
            <span className="text-white font-medium">
              {product.rating}
            </span>
          </div>

          <button
            type="button"
            className="bg-[#a5c6d6] text-white py-1 px-4 rounded-full text-sm mt-4"
          >
            Add to cart
          </button>

          <div className="text-sm text-white mt-4">
            price <span className="font-bold">{product.price}</span>
          </div>

          <div className="text-xs text-white mt-1">
            Size {product.size}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default TopCategorySection