import React from "react";
import { FaEdit } from "react-icons/fa";

const MyToysCard = ({ toy }) => {
  const {
    image,
    productName,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    availableQuantity,
    detailsDescription,
  } = toy;
  return (
    <tr>
      <th>
        <button className="btn btn-circle btn-outline border-[#F79837] text-[#F79837] hover:bg-[#F79837] hover:border-0 btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="p-4 w-40 h-40 border border-[#F79837] shadow-lg rounded bg-white">
              <img src={image} alt="photo" />
            </div>
          </div>
        </div>
      </td>
      <td className="font-semibold">{productName}</td>
      <td className="font-semibold">{sellerName}</td>
      <td className="font-semibold">{sellerEmail}</td>
      <td className="font-semibold">{subCategory}</td>
      <td className="font-semibold">{price}</td>
      <td className="font-semibold">{rating}</td>
      <td className="font-semibold">{availableQuantity}</td>
      <td className="whitespace-normal">
        {detailsDescription.substring(0, 200)}...
      </td>

      <th>
        <button className="btn btn-outline text-base pb-2 border-[#F79837] text-[#F79837] hover:bg-[#F79837] hover:border-0">
          Edit
          <FaEdit></FaEdit>
        </button>
      </th>
    </tr>
  );
};

export default MyToysCard;
