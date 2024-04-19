import { useEffect } from "react";

const Menu = ({ active, setActive }: any) => {
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = active ? "hidden" : "auto";
    }
  }, [active]);
  return (
    <>
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
