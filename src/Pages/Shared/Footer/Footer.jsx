import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/toy-logo.svg";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#F5F5F5] text-base-content">
      <div>
        <Link className="flex items-center gap-1" to="/">
          <img className="h-10 w-10" src={logo} alt="logo" />
        </Link>
        <div>
          <p className="font-extrabold mb-2 text-base lg:text-xl">
            Baby's <span className="text-[#F79837]">Toy Out</span>
          </p>

          <p>
            <small>Copyright © 2023 - All right reserved</small>
          </p>
        </div>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">All Toys</a>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Blogs</a>
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
