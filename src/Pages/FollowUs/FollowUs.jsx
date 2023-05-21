import React, { useState } from "react";
import follow1 from "../../assets/follow us/follow 01.jpg";
import follow2 from "../../assets/follow us/follow 02.jpg";
import follow3 from "../../assets/follow us/follow 03.jpg";
import follow4 from "../../assets/follow us/follow 04.jpg";
import follow5 from "../../assets/follow us/follow 05.jpg";
import follow6 from "../../assets/follow us/follow 06.jpg";
import follow7 from "../../assets/follow us/follow 07.jpg";

import { FaInstagram, FaArrowRight } from "react-icons/fa";

const FollowUs = () => {
  return (
    <div className="my-36 px-7 lg:px-16 ">
      <div className="space-y-6 mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-center">
          Follow Us <span className="text-[#F79837]">Instagram</span>
        </h2>
        <p className="text-center text-xl">
          Follow us on instagram to get every new toy and others update.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        {/* Img 01 */}

        <div className="card w-full h-full border border-[#F79837] p-4">
          <img className="w-full h-56 lg:h-32 rounded" src={follow1} alt="" />
          <div className="flex items-center justify-end mt-6 gap-2">
            <FaInstagram className="h-5 w-5"></FaInstagram>
            <p className="text-lg">Follow Us</p>
            <FaArrowRight className="h-4 w-4"></FaArrowRight>
          </div>
        </div>

        {/* Img 02 */}
        <div className="card w-full h-full border border-[#F79837] p-4">
          <img className="w-full h-56 lg:h-32 rounded" src={follow2} alt="" />
          <div className="flex items-center justify-end mt-6 gap-2">
            <FaInstagram className="h-5 w-5"></FaInstagram>
            <p className="text-lg">Follow Us</p>
            <FaArrowRight className="h-4 w-4"></FaArrowRight>
          </div>
        </div>

        {/* Img 03 */}
        <div className="card w-full h-full border border-[#F79837] p-4">
          <img className="w-full h-56 lg:h-32 rounded" src={follow3} alt="" />
          <div className="flex items-center justify-end mt-6 gap-2">
            <FaInstagram className="h-5 w-5"></FaInstagram>
            <p className="text-lg">Follow Us</p>
            <FaArrowRight className="h-4 w-4"></FaArrowRight>
          </div>
        </div>

        {/* Img 04 */}
        <div className="card w-full h-full border border-[#F79837] p-4">
          <img className="w-full h-56 lg:h-32 rounded" src={follow4} alt="" />
          <div className="flex items-center justify-end mt-6 gap-2">
            <FaInstagram className="h-5 w-5"></FaInstagram>
            <p className="text-lg">Follow Us</p>
            <FaArrowRight className="h-4 w-4"></FaArrowRight>
          </div>
        </div>

        {/* Img 05 */}
        <div className="card w-full h-full border border-[#F79837] p-4">
          <img className="w-full h-56 lg:h-32 rounded" src={follow5} alt="" />
          <div className="flex items-center justify-end mt-6 gap-2">
            <FaInstagram className="h-5 w-5"></FaInstagram>
            <p className="text-lg">Follow Us</p>
            <FaArrowRight className="h-4 w-4"></FaArrowRight>
          </div>
        </div>

        {/* Img 06 */}
        <div className="card w-full h-full border border-[#F79837] p-4">
          <img className="w-full h-56 lg:h-32 rounded" src={follow6} alt="" />
          <div className="flex items-center justify-end mt-6 gap-2">
            <FaInstagram className="h-5 w-5"></FaInstagram>
            <p className="text-lg">Follow Us</p>
            <FaArrowRight className="h-4 w-4"></FaArrowRight>
          </div>
        </div>

        {/* Img 07 */}
        <div className="card w-full h-full border border-[#F79837] p-4">
          <img className="w-full h-56 lg:h-32 rounded" src={follow7} alt="" />
          <div className="flex items-center justify-end mt-6 gap-2">
            <FaInstagram className="h-5 w-5"></FaInstagram>
            <p className="text-lg">Follow Us</p>
            <FaArrowRight className="h-4 w-4"></FaArrowRight>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end mt-6 gap-2">
        <FaInstagram className="h-5 w-5"></FaInstagram>
        <p className="text-lg">Follow Us</p>
        <FaArrowRight className="h-4 w-4"></FaArrowRight>
      </div>
    </div>
  );
};

export default FollowUs;
