import React from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryTable = ({ toy, handleViewDetails }) => {
  const { _id, image, productName, price, rating } = toy;

  return (
    <div className="card w-full glass">
      <figure>
        <img
          className="p-6 h-72 w-full rounded bg-white"
          src={image}
          alt="toy"
        />
      </figure>
      <div className="card-body">
        <h2 className=" text-center font-extrabold text-3xl">{productName}</h2>
        <p className="text-xl font-semibold">Price: {price}</p>
        <p className="text-lg font-semibold flex items-center gap-4 justify-center">
          Rating:{" "}
          <Rating
            className="text-2xl"
            placeholderRating={rating}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          />
          <span className="text-xl font-semibold">({rating})</span>
        </p>
        <Link to={`/toy/${_id}`}>
          <button
            onClick={handleViewDetails}
            className="px-5 py-3 text-lg font-bold bg-[#F79837] text-white border-0  hover:bg-transparent hover:text-[#F79837] hover:border-2 hover:border-[#F79837]"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryTable;
