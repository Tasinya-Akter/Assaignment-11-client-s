import React from "react";

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
      <td>{productName}</td>
      <td>{price}</td>
      <td>{rating}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default CategoryTable;
