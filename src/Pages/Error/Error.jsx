import React from "react";
import error404 from "../../assets/error-404.jpg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <img
        className="w-1/2 mx-auto h-[calc(100vh-70px)]"
        src={error404}
        alt=""
      />
      <Link to="/" className="flex items-center justify-center mb-6">
        <button className="px-5 py-3 text-lg font-bold bg-[#F79837] text-white border-0  hover:bg-transparent hover:text-[#F79837] hover:border-2 hover:border-[#F79837]">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
