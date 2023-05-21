import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myAllToys, setMyAllToys] = useState([]);
  const [singleToy, setSingleToy] = useState([]);

  useTitle("My Toys");

  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-side-orpin.vercel.app/myToys?user=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyAllToys(data);
      });
  }, []);

  // Edit data
  const handleEditBtn = (id) => {
    fetch(
      `https://toy-marketplace-server-side-orpin.vercel.app/singleToy/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSingleToy(data[0]);
      });
  };

  // Update toy data
  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
    const _id = form._id.value;
    const price = form.price.value;
    const availableQuantity = form.availableQuantity.value;
    const detailsDescription = form.detailsDescription.value;
    const updateData = {
      price,
      availableQuantity,
      detailsDescription,
    };
    console.log(updateData);

    fetch(
      `https://toy-marketplace-server-side-orpin.vercel.app/updateToy/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire(
            "Congrats!",
            "Your toy info Updated successfully! Please reload",
            "success"
          );
          const remaining = myAllToys.filter((toy) => toy._id !== _id);
          const updatedToy = myAllToys.filter((toy) => toy._id === _id);
          const newToyData = [...remaining, ...updatedToy];
          setMyAllToys(newToyData);
        }
      });
    form.reset();
  };

  // Delete toy from database and table
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Want to delete the Toy?",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      icon: "warning",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://toy-marketplace-server-side-orpin.vercel.app/deleteToy/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Congrats!",
                "Toy has been deleted! Please reload",
                "success"
              );
            }
          });
      } else Swal.fire(" Cancelled", "", "error");
    });
  };

  const handleSortByPrice = (event) => {
    const sort = event.target.value;

    fetch(
      `https://toy-marketplace-server-side-orpin.vercel.app/sortBy?user=${user.email}&&sort=${sort}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyAllToys(data);
      });
  };

  return (
    <div className="my-16 px-7 lg:px-16">
      <h2 className="text-5xl font-bold text-center">
        My <span className="text-[#F79837]">Toys</span>
      </h2>

      {/* Sorting option */}
      <label className="flex flex-col items-center my-16">
        <span className="text-lg mb-2">Sort By Price</span>
        <select onChange={handleSortByPrice} className="border p-2" name="sort">
          <option value="1">Up</option>
          <option value="-1">Down</option>
        </select>
      </label>

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
                <tr key={toy._id}>
                  <th>
                    <button
                      onClick={() => handleDelete(toy._id)}
                      className="btn btn-circle btn-outline border-[#F79837] text-[#F79837] hover:bg-[#F79837] hover:border-0 btn-sm"
                    >
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
                          <img src={toy.image} alt="photo" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold">{toy.productName}</td>
                  <td className="font-semibold">{toy.sellerName}</td>
                  <td className="font-semibold">{toy.sellerEmail}</td>
                  <td className="font-semibold">{toy.subCategory}</td>
                  <td className="font-semibold">{toy.price}</td>
                  <td className="font-semibold">{toy.rating}</td>
                  <td className="font-semibold">{toy.availableQuantity}</td>
                  <td className="whitespace-normal">
                    {toy.detailsDescription.substring(0, 200)}...
                  </td>

                  <th>
                    <label
                      onClick={() => handleEditBtn(toy._id)}
                      htmlFor="my-modal"
                      className="btn btn-outline py-2 rounded border-[#F79837] text-[#F79837] hover:bg-[#F79837] hover:border-0"
                    >
                      Edit
                      <FaEdit></FaEdit>
                    </label>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box p-10">
              <label
                htmlFor="my-modal"
                className="btn btn-sm btn-circle absolute right-2 top-2  btn-outline border-[#F79837] text-[#F79837] hover:bg-[#F79837] hover:border-0"
              >
                ✕
              </label>
              <form onSubmit={handleUpdate}>
                <div className="grid grid-cols-2 gap-6">
                  <label className="flex flex-col gap-2 text-lg">
                    Price
                    <input
                      className="p-4 border rounded"
                      type="text"
                      name="price"
                      placeholder="Price"
                      defaultValue={singleToy?.price}
                    />
                  </label>
                  <label className="hidden">
                    Id
                    <input
                      className="p-4 border rounded"
                      type="text"
                      name="_id"
                      defaultValue={singleToy?._id}
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-lg">
                    Quantity
                    <input
                      className="p-4 border rounded"
                      type="text"
                      name="availableQuantity"
                      defaultValue={singleToy?.availableQuantity}
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-lg my-6">
                  Description
                  <input
                    className="p-4 border rounded"
                    type="text"
                    name="detailsDescription"
                    defaultValue={singleToy?.detailsDescription}
                  />
                </label>

                <input
                  className="btn btn-ghost text-lg font-bold text-white bg-[#F79837] w-full border-0 rounded  hover:bg-transparent hover:text-[#F79837] hover:border-2 hover:border-[#F79837]"
                  type="submit"
                  value="Update"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
