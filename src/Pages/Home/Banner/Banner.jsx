import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero place-items-start min-h-[700px]"
      style={{
        backgroundImage: `url("https://thumbs.dreamstime.com/b/baby-kid-toys-banner-background-wooden-blocks-train-car-plane-pop-fidget-toy-yellow-background-top-view-222995646.jpg")`,
      }}
    >
      <div className="hero-content text-left text-white bg-gradient-to-r h-full from-[#151515] to-[rgba(21, 21, 21, 0)] px-7 lg:px-16">
        <div>
          <h1 className="mb-5 text-3xl lg:text-7xl font-extrabold w-full lg:w-1/2">
            Baby's <span className="text-[#F79837]">Toy Out,</span> Makes a
            Sweet Memory
          </h1>
          <p className="mb-5 text-xl w-full lg:w-1/2">
            Dream of a world where children can laugh and play and not be blown
            up by a mine they thought was a toy. Toys are intriguing, and I want
            to see what I can do with them. On a deeper level, they represent
            one way that society socializes its young.
          </p>
          <a href="#footer">
            <button className="px-5 py-3 text-lg font-bold bg-[#F79837] text-white border-0  hover:bg-transparent hover:text-[#F79837] hover:border-2 hover:border-[#F79837] delay-100">
              Watch Toys
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
