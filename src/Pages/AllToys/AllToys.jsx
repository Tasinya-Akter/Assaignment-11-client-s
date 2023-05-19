import React, { useEffect, useState } from "react";
import AllToysCard from "./AllToysCard";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allToys?limit=20")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, []);

  return (
    <div className="my-16 px-7 lg:px-16">
      <h2 className="text-5xl font-bold text-center">
        All <span className="text-[#F79837]">Toys</span>
      </h2>
      <div className="mt-16">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Seller Name</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allToys.map((toy) => (
                <AllToysCard key={toy._id} toy={toy}></AllToysCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
