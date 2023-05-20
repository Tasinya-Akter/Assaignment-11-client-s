import React, { useContext } from "react";
import loginImg from "../../../assets/Login/login.jpg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../../Providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log(data);

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;

        // calling function to update profile
        updateCurrentUser(user, data);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Updating user displayName and photoURL
  const updateCurrentUser = (user, data) => {
    updateProfile(user, {
      displayName: data.name,
      photoURL: data.image,
    })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="my-16 px-7 lg:px-16 flex items-center gap-10">
      <img className="w-1/2" src={loginImg} alt="" />
      <div className="w-1/2 card border p-20">
        <h2 className="text-5xl font-bold text-center mb-16">
          Please Register
        </h2>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="space-y-6">
            <label className="flex flex-col gap-2 text-lg">
              Name
              <input
                className="p-4 border rounded"
                {...register("name", { required: true })}
                placeholder="Your Name"
                type="text"
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
              Email
              <input
                className="p-4 border rounded"
                {...register("email", { required: true })}
                placeholder="Your Email"
                type="email"
              />
            </label>

            <label className="flex flex-col gap-2 text-lg">
              Password
              <input
                className="p-4 border rounded"
                {...register("password", { required: true })}
                placeholder="Your password"
                type="password"
              />
            </label>

            <input
              className="btn btn-ghost text-lg font-bold text-white bg-[#F79837] w-full border-0 rounded  hover:bg-transparent hover:text-[#F79837] hover:border-2 hover:border-[#F79837]"
              type="submit"
              value="Register"
            />
          </div>
        </form>
        <p className="text-lg mt-6 text-center">
          Already have an account? Please{" "}
          <Link to="/login" className="underline text-[#F79837]">
            Login
          </Link>
        </p>

        <div className="flex items-center justify-center mt-6 gap-6">
          <button className="btn btn-outline inline-flex items-center gap-2 text-lg font-semibold border-2 border-[#F79837] hover:bg-[#F79837] hover:text-black hover:border-0 rounded-full">
            <FcGoogle className="h-6 w-6"></FcGoogle> Sign In with Google
          </button>
          {/* Or
          <button className="btn btn-outline inline-flex items-center gap-2 text-lg font-semibold border-2 border-[#F79837] rounded-full">
            <FaGithub className="h-6 w-6"></FaGithub> GitHub
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
