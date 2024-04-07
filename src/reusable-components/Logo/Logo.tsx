import React from "react";
import LogoImage from "../../Image/logo.png";
// import Logo2 from "../../Image/logo2.png";

const Logo = () => {
  return (
    <>
      <a href="/">
        <img width={50} src={LogoImage} alt="logo" />
      </a>
    </>
  );
};

export default Logo;
