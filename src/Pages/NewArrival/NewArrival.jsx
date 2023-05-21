import React, { useEffect } from "react";
import img1 from "../../assets/new arrival/A-Frame Cabin.png";
import img2 from "../../assets/new arrival/Land Rover Classic.png";
import img3 from "../../assets/new arrival/Table Football.png";
import img4 from "../../assets/new arrival/THE LORD OF THE RINGS.png";
import img5 from "../../assets/new arrival/Colosseum.png";
import img6 from "../../assets/new arrival/The Little Mermaid.png";
import AOS from "aos";
import "aos/dist/aos.css";

const NewArrival = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="my-16 px-7 lg:px-16 "
    >
      <div className="space-y-6 mb-16">
        <h2 className="text-5xl font-bold text-center">
          New Arrival <span className="text-[#F79837]">Toy</span>
        </h2>
        <p className="text-center text-xl">
          The very recent and New updated item only for your kids
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center rounded-box bg-white">
        <img
          className="w-full border shadow-lg p-5 h-96"
          src={img1}
          alt="toy"
        />
        <div className="grid grid-cols-2 gap-4 w-full">
          {" "}
          <img
            className="w-60 h-52 border shadow-lg p-5"
            src={img2}
            alt="toy"
          />
          <img
            className="w-60 h-52 border shadow-lg p-5"
            src={img3}
            alt="toy"
          />
          <img
            className="w-60 h-52 border shadow-lg p-5"
            src={img4}
            alt="toy"
          />
          <img
            className="w-60 h-52 border shadow-lg p-5"
            src={img5}
            alt="toy"
          />
        </div>
        <img
          className="w-full border shadow-lg p-5 h-96"
          src={img6}
          alt="toy"
        />
      </div>
    </div>
  );
};

export default NewArrival;
