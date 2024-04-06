import React from "react";
import { Imenu } from "../../types/types";

interface MenuProps {
  menus: Imenu[];
}
const Menu: React.FC<MenuProps> = ({ menus }) => {
  return (
    <>
      <ul className="desktop:flex tablet:flex gap-x-10 hidden">
        {menus.map((men) => (
          <li
            className="text-blue-400 hover:text-red-400 focus:text-red-400 text-xl"
            key={men.id}
          >
            <a href="#">{men.link}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
