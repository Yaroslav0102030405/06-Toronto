import { useState } from "react";
// import { Imenu } from "../../types/types";

// interface MenuProps {
//   menus: Imenu[];
// }

const Menu = ({ active, setActive }: any) => {
  // const [mobileActive, setMebilelActive] = useState<boolean>(false);
  return (
    <>
      {/* <ul className="hidden desktop:flex tablet:flex gap-x-10">
        {menus.map((men) => (
          <li
            className="text-xl text-blue-400 hover:text-red-400 focus:text-red-400"
            key={men.id}
          >
            <a href="#">{men.link}</a>
          </li>
        ))}
      </ul> */}

      {/* <nav className="nav"> */}
      <div
        className={active ? "mobile active" : "mobile"}
        onClick={() => setActive(false)}
      >
        <div
          className={active ? "mobile-content active" : "mobile-content"}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="mobile-close tablet:hidden"
            onClick={() => setActive(false)}
          >
            {/* <span /> */}
          </button>
          <ul className="flex flex-col text-center gap-[15px]">
            <li className="text-xl text-blue-400 hover:text-red-400 focus:text-red-400">
              <a href="#about" onClick={() => setActive(false)}>
                About
              </a>
            </li>
            <li className="text-xl text-blue-400 hover:text-red-400 focus:text-red-400">
              <a href="#guarantee" onClick={() => setActive(false)}>
                Guarantee
              </a>
            </li>
            <li className="text-xl text-blue-400 hover:text-red-400 focus:text-red-400">
              <a href="#works" onClick={() => setActive(false)}>
                Works
              </a>
            </li>
            <li className="text-xl text-blue-400 hover:text-red-400 focus:text-red-400">
              <a href="#call" onClick={() => setActive(false)}>
                Сall us
              </a>
            </li>
            <li className="text-xl text-blue-400 hover:text-red-400 focus:text-red-400">
              <a href="#services" onClick={() => setActive(false)}>
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* </nav> */}
    </>
  );
};

export default Menu;
