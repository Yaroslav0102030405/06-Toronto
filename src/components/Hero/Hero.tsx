import React from "react";
import Button from "../../reusable-components/Button/Button";
import HeroImage from "../../Image/hero-image2.png";

const Hero = () => {
  return (
    <>
      <section id="home" className="py-24 bg-black">
        <div className="container desktop mx-auto px-3.5">
          <div className="flex">
            <div className="left">
              <h1 className="max-w-[621px] text-[56px] mb-14 text-center font-bold text-blue-400 leading-relaxed">
                Appliance installation in Toronto
              </h1>
              <p className="max-w-[600px] mb-20 text-lg text-center text-blue-400 leading-snug">
                Our company is engaged in the installation of household
                appliances in Toronto. We have more than 27 services
              </p>
              <Button />
            </div>
            <div className="right hidden tablet:block">
              <img src={HeroImage} alt="male plumber" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
