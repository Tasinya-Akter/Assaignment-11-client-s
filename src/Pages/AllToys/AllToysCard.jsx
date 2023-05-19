import React from "react";

const AllToysCard = ({ toy }) => {
  const {
    _id,
    sellerName,
    productName,
    subCategory,
    price,
    availableQuantity,
  } = toy;
  return (
    <tr>
      <td className="text-lg font-semibold">{sellerName}</td>
      <td className="text-lg font-semibold">{productName}</td>
      <td className="text-lg font-semibold">{subCategory}</td>
      <td className="text-lg font-semibold">{price}</td>
      <td className="text-lg font-semibold">{availableQuantity}</td>
      <th>
        <button className="px-5 py-3 text-lg font-bold bg-[#F79837] text-white border-0  hover:bg-transparent hover:text-[#F79837] hover:border-2 hover:border-[#F79837] delay-100">
          View Details
        </button>
      </th>
    </tr>
  );
};

export default AllToysCard;
