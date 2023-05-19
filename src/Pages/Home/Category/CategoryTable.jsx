import React from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const CategoryTable = ({ toy }) => {
  const { _id, image, productName, price, rating } = toy;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="p-4 w-64 h-64 border shadow-lg rounded bg-white">
              <img src={image} alt="photo" />
            </div>
          </div>
        </div>
      </td>
      <td className="text-lg font-semibold">{productName}</td>
      <td className="text-lg font-semibold">{price}</td>
      <td className="text-lg font-semibold">
        <Rating
          placeholderRating={rating}
          readonly
          emptySymbol={<FaRegStar></FaRegStar>}
          placeholderSymbol={<FaStar className="text-warning"></FaStar>}
          fullSymbol={<FaStar></FaStar>}
        />
        <span className="ml-2">({rating})</span>
      </td>
      <th>
        <button className="px-5 py-3 text-lg font-bold bg-[#F79837] text-white border-0  hover:bg-transparent hover:text-[#F79837] hover:border-2 hover:border-[#F79837] delay-100">
          View Details
        </button>
      </th>
    </tr>
  );
};

export default CategoryTable;
