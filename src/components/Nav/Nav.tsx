import React from "react";

const Nav = () => {
  return (
    <>
      <nav>
        <ul className="hidden desktop:flex tablet:flex gap-x-10">
          <li className="text-xl text-blue-400 nav-link hover:text-white focus:text-white">
            <a href="#about">About</a>
          </li>
          <li className="text-xl text-blue-400 nav-link hover:text-white focus:text-white">
            <a href="#guarantee">Guarantee</a>
          </li>
          <li className="text-xl text-blue-400 nav-link hover:text-white focus:text-white">
            <a href="#works">Works</a>
          </li>
          <li className="text-xl text-blue-400 nav-link hover:text-white focus:text-white">
            <a href="#call">Сall us</a>
          </li>
          <li className="text-xl text-blue-400 nav-link hover:text-white focus:text-white">
            <a href="#services">Services</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
