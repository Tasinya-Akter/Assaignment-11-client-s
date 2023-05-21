import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/toy-logo.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-16 justify-between bg-[#F5F5F5] text-base-content">
      <div>
        <Link to="/" className="flex items-center gap-1">
          <img className="h-10 w-10" src={logo} alt="logo" />
        </Link>
        <div className="space-y-2">
          <Link to="/" className="font-extrabold text-base lg:text-xl">
            Baby's <span className="text-[#F79837]">Toy Out</span>
          </Link>

          <p className="flex gap-3 text-lg">
            <FaGoogle></FaGoogle>
            <FaFacebookF></FaFacebookF>
            <FaTwitter></FaTwitter>
            <FaInstagram></FaInstagram>
            <FaGithub></FaGithub>
          </p>

          <p>
            <small>Copyright © 2023 - All right reserved</small>
          </p>
        </div>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <Link to="/" className="link link-hover">
          Home
        </Link>
        <Link to="/allToys" className="link link-hover">
          All Toys
        </Link>
        <Link to="/" className="link link-hover">
          About Us
        </Link>
        <Link to="/blogs" className="link link-hover">
          Blogs
        </Link>
      </div>

      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div>
        <span className="footer-title">Contact Us</span>
        <a className="link link-hover">
          Phone: <span>+880 1839 00 6867</span>
        </a>
        <a className="link link-hover">
          Email: <span>contact@babystoyout.com</span>
        </a>
        <a className="link link-hover">
          Address:{" "}
          <span>
            4312, Chittagong
            <br /> Bangladesh
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
