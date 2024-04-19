// import React from "react";
import Logo from "../../reusable-components/Logo/Logo";
import { ReactComponent as Insta } from "../../Image/svg/instagram 2.svg";
import { ReactComponent as Twitter } from "../../Image/svg/twitter 1.svg";
import { ReactComponent as Facebook } from "../../Image/svg/Vector.svg";
import { ReactComponent as Linkedin } from "../../Image/svg/linkedin 1.svg";

const Footer = () => {
  return (
    <>
      <section className="py-12 bg-black footer">
        <div className="container desktop mx-auto px-3.5">
          <Logo />
          <div className="flex flex-wrap items-start justify-between wapper">
            <div className="left">
              <p className="text-blue-400 mt-5 mb-7 max-w-[363px] text-lg font-medium">
                Our company is engaged in the installation of household
                appliances in Toronto. We have more than 27 services
              </p>
              <p className="text-lg text-blue-400">
                &copy; 2024. All rights reserved
              </p>
            </div>
            <ul className="flex gap-5 mt-5">
              <li>
                <a
                  className="social fill-[#6495ED] hover:fill-[#FFFFFF] focus:fill-[#FFFFFF]"
                  href="#"
                >
                  <Insta />
                </a>
              </li>
              <li>
                <a
                  className="social fill-[#6495ED] hover:fill-[#FFFFFF] focus:fill-[#FFFFFF]"
                  href="#"
                >
                  <Twitter />
                </a>
              </li>
              <li>
                <a
                  className="social fill-[#6495ED] hover:fill-[#FFFFFF] focus:fill-[#FFFFFF]"
                  href="#"
                >
                  <Facebook />
                </a>
              </li>
              <li>
                <a
                  className="social fill-[#6495ED] hover:fill-[#FFFFFF] focus:fill-[#FFFFFF]"
                  href="#"
                >
                  <Linkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
