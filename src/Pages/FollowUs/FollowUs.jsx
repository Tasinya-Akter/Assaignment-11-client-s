import React, { useContext, useState } from "react";
import follow1 from "../../assets/follow us/follow 01.jpg";
import follow2 from "../../assets/follow us/follow 02.jpg";
import follow3 from "../../assets/follow us/follow 03.jpg";
import follow4 from "../../assets/follow us/follow 04.jpg";
import follow5 from "../../assets/follow us/follow 05.jpg";
import follow6 from "../../assets/follow us/follow 06.jpg";
import follow7 from "../../assets/follow us/follow 07.jpg";

import logo from "../../assets/toy-logo.svg";

import { FaInstagram, FaArrowRight } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";

const FollowUs = () => {
  const { user } = useContext(AuthContext);
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

      <div className="stats shadow flex flex-col lg:flex-row items-center justify-between mt-16">
        <div className="stat">
          <div className="stat-figure text-primary">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg> */}
            <img src={logo} alt="" />
          </div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-primary">25.6K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
