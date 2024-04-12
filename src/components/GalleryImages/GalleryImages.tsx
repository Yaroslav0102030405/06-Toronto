import React from "react";
import Gallery from "../Gallery/Gallery";
import { Images } from "../../types/types";

import Img1 from "../../Image/1.jpg";
import Img2 from "../../Image/2.jpg";
import Img3 from "../../Image/3.jpg";
import Img4 from "../../Image/4.jpg";
import Img5 from "../../Image/5.jpg";
import Img6 from "../../Image/6.jpg";

const GalleryImages = () => {
  const images: Images[] = [
    {
      img: `${Img1}`,
    },
    {
      img: `${Img2}`,
    },
    {
      img: `${Img3}`,
    },
    {
      img: `${Img4}`,
    },
    {
      img: `${Img5}`,
    },
    {
      img: `${Img6}`,
    },
  ];
  return (
    <>
      <Gallery images={images} />
    </>
  );
};

export default GalleryImages;
