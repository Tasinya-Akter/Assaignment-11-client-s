import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const singleToyData = useLoaderData();
  const {
    _id,
    image,
    productName,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    detailsDescription,
  } = singleToyData[0];
  return (
    <div className="my-16 px-7 lg:px-16">
      <h2 className="text-5xl font-bold text-center">
        LEGO <span className="text-[#F79837]">Toy</span> Details
      </h2>
      <div className="hero min-h-screen  mt-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} className="max-w-md p-4 rounded-lg shadow-2xl" />
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold">{productName}</h1>
            <p className="text-xl">
              <span className="font-bold">Details Description: </span>
              {detailsDescription}
            </p>
            <p className="text-xl">
              <span className="font-bold">Available Quantity:</span>{" "}
              {availableQuantity}
            </p>
            <div className="inline-flex gap-6 items-center">
              <p className="text-xl">
                <span className="font-bold">Price: </span>
                {price}
              </p>
              <p className="text-xl inline-flex items-center gap-4">
                <span className="font-bold">Ratings: </span>
                <Rating
                  className="text-2xl"
                  placeholderRating={rating}
                  readonly
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                />
                ({rating})
              </p>
            </div>
            <div className="divider"></div>
            <div className="flex gap-6 items-center">
              <p className="text-xl">
                <span className="font-bold">Seller: </span>
                {sellerName}
              </p>
              <p className="text-xl">
                <span className="font-bold">Contact: </span>
                {sellerEmail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
