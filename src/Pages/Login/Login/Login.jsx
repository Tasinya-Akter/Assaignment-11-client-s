import React, { useContext } from "react";
import loginImg from "../../../assets/Login/login.jpg";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";

const Login = () => {
  const { logInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);

    logInUser(data.email, data.password)
      .then((result) => {
        const user = result.user;

        // Navigate to last page
        navigate(location.state?.from?.pathname || "/", { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="my-16 px-7 lg:px-16 flex items-center gap-10">
      <img className="w-1/2" src={loginImg} alt="" />
      <div className="w-1/2 card border p-20">
        <h2 className="text-5xl font-bold text-center mb-16">Please Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="space-y-6">
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
              value="Login"
            />
          </div>
        </form>
        <p className="text-lg mt-6 text-center">
          No account yet? Please{" "}
          <Link to="/register" className="underline text-[#F79837]">
            Register
          </Link>
        </p>

        <div className="flex items-center justify-center mt-6 gap-6">
          <button className="btn btn-outline inline-flex items-center gap-2 text-lg font-semibold border-2 border-[#F79837] hover:bg-[#F79837] hover:text-black hover:border-0 rounded-full">
            <FcGoogle className="h-6 w-6"></FcGoogle> Login with Google
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

export default Login;
