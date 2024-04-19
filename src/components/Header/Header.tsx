import { useState } from "react";
import Logo from "../../reusable-components/Logo/Logo";
import Menu from "../../reusable-components/Menu/Menu";
// import { Imenu } from "../../types/types";
import Nav from "../Nav/Nav";

const Header = () => {
  const [mobileActive, setMobilelActive] = useState<boolean>(false);
  // const menus: Imenu[] = [
  //   { id: 1, link: "About" },
  //   { id: 2, link: "Guarantee" },
  //   { id: 3, link: "Works" },
  //   { id: 4, link: "Сall us" },
  //   { id: 5, link: "Services" },
  // ];
  return (
    <>
      <header className="py-2 bg-black header">
        <div className="container desktop mx-auto px-3.5">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              className="mobile-open tablet:hidden"
              onClick={() => setMobilelActive(true)}
            >
              <span />
            </button>
            <Nav />
            <Menu active={mobileActive} setActive={setMobilelActive} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
