import React from "react";
import img1 from "../../../assets/gallery/01-lego city.png";
import img2 from "../../../assets/gallery/02-lego city.png";
import img3 from "../../../assets/gallery/03-lego city.png";
import img4 from "../../../assets/gallery/04-lego star war.png";
import img5 from "../../../assets/gallery/05-lego star war.png";
import img6 from "../../../assets/gallery/06-lego star war.jpg";
import img7 from "../../../assets/gallery/07-lego architechture.png";
import img8 from "../../../assets/gallery/08-lego architechture.jpg";
import img9 from "../../../assets/gallery/09-lego architechture.jpg";
import img10 from "../../../assets/gallery/10-lego car.png";
import img11 from "../../../assets/gallery/11-lego car.jpg";
import img12 from "../../../assets/gallery/12-lego car.png";

const Gallery = () => {
  return (
    <div className="my-16 px-7 lg:px-16 ">
      <div className="space-y-6">
        <h2 className="text-5xl font-bold text-center">
          Hot <span className="text-[#F79837]">Gallery</span>
        </h2>
        <p className="text-center text-xl">
          The toys your lovely kids going to love and wish to have for life
          time.
        </p>
      </div>
      <div className="mt-16 card grid grid-cols-1 lg:grid-cols-3 gap-6">
        <img
          className="border border-[#F79837] p-6 h-96 w-full rounded-xl"
          src={img1}
          alt=""
        />
        <img
          className="border border-[#F79837] p-6 h-96 w-full rounded-xl"
          src={img2}
          alt=""
        />
        <img
          className="border border-[#F79837] p-6 h-96 w-full rounded-xl"
          src={img3}
          alt=""
        />
        <img
          className="border border-[#F79837] p-6 h-96 w-full rounded-xl"
          src={img4}
          alt=""
        />
        <img
          className="border border-[#F79837] p-6 h-96 w-full rounded-xl"
          src={img5}
          alt=""
        />
        <img
          className="border border-[#F79837] p-6 h-96 w-full rounded-xl"
          src={img6}
          alt=""
        />
        <img
          className="border border-[#F79837] p-6 h-96 w-full rounded-xl"
          src={img7}
          alt=""
        />
        <img
          className="border border-[#F79837] p-6 h-96 w-full rounded-xl"
          src={img8}
          alt=""
        />
        <img
          className="border border-[#F79837] p-6 h-96 w-full rounded-xl"
          src={img9}
          alt=""
        />
        <img
          className="border border-[#F79837] p-6 h-96 w-full rounded-xl"
          src={img10}
          alt=""
        />
        <img
          className="border border-[#F79837] p-6 h-96 w-full rounded-xl"
          src={img11}
          alt=""
        />
        <img
          className="border border-[#F79837] p-6 h-96 w-full rounded-xl"
          src={img12}
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;
