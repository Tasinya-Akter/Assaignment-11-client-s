import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddToy = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);

    fetch("http://localhost:5000/addToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Bingoo!", "Your toy added successfully!", "success");
        }
      });
  };

  return (
    <div className="my-16 px-7 lg:px-16">
      <h2 className="text-5xl font-bold text-center">
        Add a <span className="text-[#F79837]">Toy</span>
      </h2>

      <div className="mt-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* {errors.exampleRequired && <span>This field is required.</span>} */}
          <div className="grid grid-cols-2 gap-6">
            <label className="flex flex-col gap-2 text-lg">
              Name
              <input
                className="p-4 border rounded"
                {...register("productName", { required: true })}
                placeholder="Name"
              />
            </label>

            <label className="flex flex-col gap-2 text-lg">
              Photo URL
              <input
                className="p-4 border rounded"
                {...register("image", { required: true })}
                placeholder="Photo URL"
                type="url"
              />
            </label>
            <label className="flex flex-col gap-2 text-lg">
              Seller Name
              <input
                className="p-4 border rounded"
                {...register("sellerName", { required: true })}
                placeholder="Seller Name"
              />
            </label>
            <label className="flex flex-col gap-2 text-lg">
              Seller Email
              <input
                className="p-4 border rounded"
                {...register("sellerEmail", { required: true })}
                placeholder="Seller Email"
                type="email"
              />
            </label>
            <label className="flex flex-col gap-2 text-lg">
              Sub Category
              <input
                className="p-4 border rounded"
                {...register("subCategory", { required: true })}
                placeholder="Sub Category"
              />
            </label>
            <label className="flex flex-col gap-2 text-lg">
              Price
              <input
                className="p-4 border rounded"
                {...register("price", { required: true })}
                placeholder="Price"
                defaultValue="$"
              />
            </label>
            <label className="flex flex-col gap-2 text-lg">
              Rating
              <input
                className="p-4 border rounded"
                {...register("rating", { required: true })}
                placeholder="Rating"
              />
            </label>
            <label className="flex flex-col gap-2 text-lg">
              Available Quantity
              <input
                className="p-4 border rounded"
                {...register("availableQuantity", { required: true })}
                placeholder="Available Quantity"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-lg my-6">
            Details Description
            <input
              className="p-4 border rounded"
              {...register("detailsDescription", { required: true })}
              placeholder="Details Description"
            />
          </label>
          <input
            className="btn btn-ghost text-lg font-bold text-white bg-[#F79837] w-full border-0 rounded  hover:bg-transparent hover:text-[#F79837] hover:border-2 hover:border-[#F79837] delay-100"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddToy;
