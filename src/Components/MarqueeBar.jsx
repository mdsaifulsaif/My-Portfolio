// components/MarqueeBar.jsx
import React from "react";
import Marquee from "react-fast-marquee";
import { FaPlus } from "react-icons/fa";

const words = ["Design", "Develop", "Discover"];

const MarqueeBar = () => {
  return (
    <div className=" bg-gray-800 -rotate-2 py-7 shadow-2xs">
      <Marquee gradient={false} speed={60}>
        {Array.from({ length: 15 }, (_, i) => (
          <span
            key={i}
            className="flex items-center text-white text-lg md:text-base font-semibold mx-4"
          >
            {words[i % 3]} <FaPlus className="mx-2 text-blue-500" />
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeBar;
