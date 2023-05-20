import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysCard from "./MyToysCard";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myAllToys, setMyAllToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys?user=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyAllToys(data);
      });
  }, []);

  console.log(myAllToys);

  return (
    <div className="my-16 px-7 lg:px-16">
      <h2 className="text-5xl font-bold text-center">
        My <span className="text-[#F79837]">Toys</span>
      </h2>

      {/* <div className="mt-16">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            head
            <thead>
              <tr>
                <th>Toy Image</th>
                <th>Toy Name</th>
                <th>Seller Name</th>
                <th>Seller Email</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Available Quantity</th>
                <th>Details Description</th>
                <th>Edit Item</th>
              </tr>
            </thead>
            <tbody>
              row 1
              {myAllToys.map((toy) => (
                <MyToysCard key={toy._id} toy={toy}></MyToysCard>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
      <div className="mt-16">
        <div className="w-full">
          <table className="table w-full">
            {/* table head */}
            <thead className="bg-gray-300">
              <tr>
                <th></th>
                <th>Toy Image</th>
                <th>Toy Name</th>
                <th>Seller Name</th>
                <th>Seller Email</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Quantity</th>
                <th>Details Description</th>
                <th></th>
              </tr>
            </thead>

            {/* Table row */}
            <tbody className="w-full">
              {myAllToys.map((toy) => (
                <MyToysCard key={toy._id} toy={toy}></MyToysCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
