import React from "react";
import { Icons } from "../../types/types";

interface IconsProps {
  icons: Icons[];
}

const IconsAdvantages: React.FC<IconsProps> = ({ icons }) => {
  return (
    <>
      <ul className="flex flex-wrap justify-between mobile:gap-[16px] tablet:gap-[16px] desktop:gap-[26px]">
        {icons.map((icon) => (
          <li
            className="icon w-[362px] py-12 text-blue-400 px-14 rounded-3xl border-solid border hover:scale-105 hover:bg-white"
            key={icon.title}
          >
            <img
              className="w-[120px] m-auto mb-5"
              src={icon.img}
              alt={icon.title}
            />
            <h3 className="mb-6 text-2xl font-bold text-center text-blue-400">
              {icon.title}
            </h3>
            <p className="text-base font-light text-center text-blue-400">
              {icon.text}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IconsAdvantages;
