import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/toy-logo.svg";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center bg-[#F5F5F5] px-7 lg:px-16 py-6 lg:py-10">
      <div className="flex items-center justify-end">
        <Link className="flex items-center gap-1" to="/">
          <img className="h-10 w-10" src={logo} alt="logo" />
          <p className="font-extrabold text-base lg:text-xl">
            Baby's <span className="text-[#F79837]">Toy Out</span>
          </p>
        </Link>
        <div className="dropdown relative">
          <label
            tabIndex={0}
            className="btn btn-ghost absolute left-28 -top-6 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-6 p-2 shadow bg-base-100 rounded-box w-40"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">All Toys</Link>
            </li>
            <li>
              <Link to="/">My Toys</Link>
            </li>
            <li>
              <Link to="/addToys">Add Toys</Link>
            </li>
            <li>
              <Link to="/">Blogs</Link>
            </li>
            <li className="text-white">
              <Link>
                <button className="px-3 py-2 font-bold bg-[#F79837] text-white border-0  hover:bg-transparent hover:text-[#F79837] hover:border-2 hover:border-[#F79837]">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal font-semibold px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allToys">All Toys</Link>
          </li>
          <li>
            <Link to="/myToys">My Toys</Link>
          </li>
          <li>
            <Link to="/addToys">Add Toys</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
      <Link to="/login" className="hidden lg:flex">
        <button className="px-3 py-2 text-lg font-bold bg-[#F79837] text-white border-0  hover:bg-transparent hover:text-[#F79837] hover:border-2 hover:border-[#F79837] delay-100">
          Login
        </button>
      </Link>
      {/* <div>
        <img src="" alt="" />
        <Link className="hidden lg:flex">
          <button className="px-3 py-2 font-bold bg-[#F79837] text-white border-0 rounded hover:bg-white hover:text-[#F79837] hover:border-2 hover:border-[#F79837] delay-100">
            Logout
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default NavBar;
