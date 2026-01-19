import React, { useState } from "react";
import fashion1 from "../assets/fashion1.png";
import fashion2 from "../assets/fashion2.png";
import fashion3 from "../assets/fashion3.png";
import fashion4 from "../assets/fashion4.png";

const FashionShow = () => {
  const initialCards = [
    {
      image: fashion2,
      title:
        'The strong hearted Takeover Issue Is About Forgetting Every Style "Rule" You Know',
    },
    {
      image: fashion3,
      title:
        'The Zoe Report\'s Fashion 2022 Takeover Issue Is Forgetting Every Style "Rule" You Know',
    },
    {
      image: fashion4,
      title:
        'Couture mania! Fashion Takeover Issue Is About Forgetting Every Style "Rule" You Know',
    },
  ];

  const [cards, setCards] = useState(initialCards);

  const rotateCards = () => {
    const rotated = [...cards.slice(1), cards[0]];
    setCards(rotated);
  };

  return (
    <div className="min-h-screen bg-white px-6 md:px-10 font-sans" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between">
          <div className="px-2 md:px-10">
            <h1 className="text-4xl md:text-6xl font-extrabold hero-font leading-tight">
              Fashion Show
            </h1>
            <p className="text-gray-700 max-w-md text-md">
              The show that organize by our brand and also
              <br />
              participate celebrity to produce our brand
            </p>
          </div>
          <div>
            <span
              className="material-icons cursor-pointer mt-4 md:mt-0"
              style={{ fontSize: "60px" }}
              onClick={rotateCards}
            >
              arrow_forward
            </span>
          </div>
        </div>

        <div className="mt-10 flex justify-center lg:ml-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full max-w-6xl">
     
            <div className="rounded-3xl overflow-hidden shadow-xl w-full max-w-md">
              <img
                src={fashion1}
                alt="Main Model"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-2 flex flex-col gap-5 lg:gap-10 w-full max-w-3xl">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row bg-white rounded-2xl gap-4 items-start"
                >
                  <img
                    src={card.image}
                    alt="Fashion Card"
                    className="w-28 md:w-36 h-full rounded-xl object-cover shadow-md"
                  />
                  <div className="w-full md:max-w-sm">
                    <h3 className="text-xl leading-snug card-font">{card.title}</h3>
                    <p className="text-xs text-gray-600 mt-2 leading-snug">
                      A fashion show is an event where designers showcase their
                      latest clothing and accessory
                      <br />
                      collections on a runway, worn by models. It serves as a
                      <br />
                      platform for brands to present trends,
                      creativity, and craftsmanship to buyers, media, and fashion
                      enthusiasts. Fashion shows range
                      <br />
                      from high-end couture presentations to commercial and
                      streetwear exhibitions worldwide.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionShow;
