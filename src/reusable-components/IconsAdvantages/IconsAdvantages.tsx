import React from "react";
import { Icons } from "../../types/types";

interface IconsProps {
  icons: Icons[];
}

const IconsAdvantages: React.FC<IconsProps> = ({ icons }) => {
  return (
    <>
      <ul className="flex flex-wrap justify-between desktop:gap-[26px] tablet:gap-[16px]">
        {icons.map((icon) => (
          <li
            className="w-[362px] py-12 text-blue-400 px-14 rounded-3xl border-solid border hover:scale-105 hover:bg-white"
            key={icon.title}
          >
            <img
              className="w-[120px] m-auto mb-5"
              src={icon.img}
              alt={icon.title}
            />
            <h3 className="text-blue-400 text-center mb-6 text-2xl font-bold">
              {icon.title}
            </h3>
            <p className="text-blue-400 text-center text-base font-light">
              {icon.text}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IconsAdvantages;
