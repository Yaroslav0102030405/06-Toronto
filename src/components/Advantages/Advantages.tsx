import React from "react";
import { Icons } from "../../types/types";
import IconsAdvantages from "../../reusable-components/IconsAdvantages/IconsAdvantages";

import ImagePng1 from "../../Image/guarantee1.png";
import ImagePng2 from "../../Image/qualified2.png";
import ImagePng3 from "../../Image/cfdfdfd3.png";
import ImagePng4 from "../../Image/price4.png";
import ImagePng5 from "../../Image/support5.png";
import ImagePng6 from "../../Image/Visit 6.png";

const Advantages = () => {
  const icons: Icons[] = [
    {
      img: `${ImagePng1}`,
      title: "Guarantee",
      text: "You receive an official guarantee from the selected master.",
    },
    {
      img: `${ImagePng2}`,
      title: "Qualified",
      text: "Here you will find masters of the highest category.",
    },
    {
      img: `${ImagePng3}`,
      title: "Consultations",
      text: "Possibility of free consultation!",
    },
    {
      img: `${ImagePng4}`,
      title: "Optimal price",
      text: "Working with us, you do not overpay",
    },
    {
      img: `${ImagePng5}`,
      title: "Ongoing support",
      text: "We are always available to help you",
    },
    {
      img: `${ImagePng6}`,
      title: "Visit of the master",
      text: "Craftsmen work throughout the city and surrounding areas",
    },
  ];
  return (
    <>
      <section className="advantages py-12 bg-black">
        <div className="container desktop mx-auto px-3.5">
          <h2 className="text-center text-blue-400 mb-12 text-[45px] font-bold leading-tight">
            By choosing us you will receive
          </h2>
          <IconsAdvantages icons={icons} />
        </div>
      </section>
    </>
  );
};

export default Advantages;
