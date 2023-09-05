import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <nav className="navbar w-screen h-[6rem] grid grid-cols-[1fr_auto_1fr] items-center px-16">
      <div className="nav-links text-white">
          <a className="links text-sm font-semibold p-4" href="">Home</a>
          <a className="links text-sm font-semibold p-4" href="">About</a>
          <a className="links text-sm font-semibold p-4" href="">Books</a>
          <a className="links text-sm font-semibold p-4" href="">What | Offer</a>
          <a className="links text-sm font-semibold p-4" href=""> Blog</a>
          <a className="links text-sm font-semibold p-4" href="">Contact</a>
      </div>

      <div className="nav-logo">
        <img src={logo} className="h-8"/>
      </div>

      <div className="nav-social-media text-white flex justify-end gap-x-6">
        <BsFacebook size={20} className=""/>
        <BsTwitter size={20} />
        <BsInstagram size={20} />
        <BsLinkedin size={20} />
      </div>
    </nav>
  );
};

export default Nav;
