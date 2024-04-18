import React from "react";

const Nav = () => {
  return (
    <>
      <nav>
        <ul className="hidden desktop:flex tablet:flex gap-x-10">
          <li className="text-xl text-blue-400 hover:text-red-400 focus:text-red-400">
            <a href="#about">About</a>
          </li>
          <li className="text-xl text-blue-400 hover:text-red-400 focus:text-red-400">
            <a href="#guarantee">Guarantee</a>
          </li>
          <li className="text-xl text-blue-400 hover:text-red-400 focus:text-red-400">
            <a href="#works">Works</a>
          </li>
          <li className="text-xl text-blue-400 hover:text-red-400 focus:text-red-400">
            <a href="#call">Сall us</a>
          </li>
          <li className="text-xl text-blue-400 hover:text-red-400 focus:text-red-400">
            <a href="#services">Services</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
