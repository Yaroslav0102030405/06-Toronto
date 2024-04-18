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

      <nav>
        <ul className="hidden desktop:flex tablet:flex gap-x-10">
          <li className="text-xl text-blue-400 hover:text-red-400 focus:text-red-400">
            <a href="#">About</a>
          </li>
          <li className="text-xl text-blue-400 hover:text-red-400 focus:text-red-400">
            <a href="#">Guarantee</a>
          </li>
          <li className="text-xl text-blue-400 hover:text-red-400 focus:text-red-400">
            <a href="#">Works</a>
          </li>
          <li className="text-xl text-blue-400 hover:text-red-400 focus:text-red-400">
            <a href="#">Сall us</a>
          </li>
          <li className="text-xl text-blue-400 hover:text-red-400 focus:text-red-400">
            <a href="#">Services</a>
          </li>
        </ul>
      </nav>

      {/* <nav className="nav"> */}
      <div
        className={active ? "mobile active" : "mobile"}
        onClick={() => setActive(false)}
      >
        <div className="mobile-content" onClick={(e) => e.stopPropagation()}>
          <ul className="desktop:flex tablet:flex gap-x-10">
            <li className="text-xl text-blue-400 hover:text-red-400 focus:text-red-400">
              <a href="#" onClick={() => setActive(false)}>
                About
              </a>
            </li>
            <li className="text-xl text-blue-400 hover:text-red-400 focus:text-red-400">
              <a href="#" onClick={() => setActive(false)}>
                Guarantee
              </a>
            </li>
            <li className="text-xl text-blue-400 hover:text-red-400 focus:text-red-400">
              <a href="#" onClick={() => setActive(false)}>
                Works
              </a>
            </li>
            <li className="text-xl text-blue-400 hover:text-red-400 focus:text-red-400">
              <a href="#" onClick={() => setActive(false)}>
                Сall us
              </a>
            </li>
            <li className="text-xl text-blue-400 hover:text-red-400 focus:text-red-400">
              <a href="#" onClick={() => setActive(false)}>
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
