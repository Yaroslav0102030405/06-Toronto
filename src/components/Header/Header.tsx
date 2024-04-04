import React from "react";
import Logo from "../../reusable-components/Logo/Logo";
import Menu from "../../reusable-components/Menu/Menu";
import { Imenu } from "../../types/types";

const Header = () => {
  const menus: Imenu[] = [
    { id: 1, link: "About" },
    { id: 2, link: "Guarantee" },
    { id: 3, link: "Works" },
    { id: 4, link: "Сall us" },
    { id: 5, link: "Services" },
  ];
  return (
    <>
      <header className="header bg-black py-2">
        <div className="container desktop mx-auto px-3.5">
          <div className="flex items-center justify-between">
            <Logo />
            <Menu menus={menus} />
            {/* <h1 className="text-blue-400">Hello world!</h1> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
