import React from "react";
import Button from "../../reusable-components/Button/Button";
import HeroImage from "../../Image/hero-image2.png";
// import Hero2 from "../../Image/logo2.png";
import TabletHeroImg from "../../Image/tablet-hero-image2.png";

const Hero = () => {
  return (
    <>
      <section id="about" className="bg-black tablet:py-24">
        <div className="container desktop mx-auto px-3.5">
          <div className="flex">
            <div className="left">
              <h1 className="max-w-[621px] text-[56px] mb-14 text-center font-bold text-blue-400 leading-relaxed">
                Appliance installation in{" "}
                <span className="text-red-500">
                  T<span className="text-white">o</span>
                  <span className="text-red-500">r</span>
                  <span className="text-white">o</span>
                  <span className="text-red-500">n</span>
                  <span className="text-white">t</span>
                  <span className="text-red-500">o</span>
                </span>
              </h1>
              <p className="max-w-[600px] mb-20 text-lg text-center text-blue-400 leading-snug">
                Our company is engaged in the installation of household
                appliances in Toronto. We have more than 27 services
              </p>
              <Button />
            </div>
            <div className="hidden right tablet:block">
              {/* <img src={HeroImage} alt="male plumber" /> */}
              {/* <picture>
                <source
                  srcSet={TabletHeroImg}
                  media="(min-width: 768px) and (max-width: 1200px)"
                  type="image/jpg"
                />
                <source srcSet={HeroImage} media="(min-width: 1200px)" />
                <img srcSet={HeroImage} alt="male plumber" />
              </picture> */}
              <img
                srcSet={`${TabletHeroImg} 360w, ${HeroImage} 520w`}
                sizes="(max-width: 1170px) 70vw, (min-width: 1170px) 35vw, 100vw"
                alt="male plumber"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
