import React, { useContext, useEffect, useState } from "react";
import AllToysCard from "./AllToysCard";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/allToys?limit=20")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/getToyBySearch?name=${searchItem}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  };

  return (
    <div className="my-16 px-7 lg:px-16">
      <h2 className="text-5xl font-bold text-center">
        All <span className="text-[#F79837]">Toys</span>
      </h2>
      <div className="flex items-center w-1/2 mx-auto space-x-4 mt-16">
        <input
          onChange={(e) => setSearchItem(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-warning w-full "
        />
        <button
          onClick={handleSearch}
          className="px-5 py-3 text-lg font-bold bg-[#F79837] text-white border-0 rounded-lg hover:bg-transparent hover:text-[#F79837] hover:border-2 hover:border-[#F79837]"
        >
          Search
        </button>
      </div>
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
