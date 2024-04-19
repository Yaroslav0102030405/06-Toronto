import React, { useState } from "react";
import { Images } from "../../types/types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
// import { ModifierFlags } from "typescript";

interface ImagesProps {
  images: Images[];
}

const Gallery: React.FC<ImagesProps> = ({ images }) => {
  const [sliderNumber, setSliderNumber] = React.useState<number>(0);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  const handleOpenModal = (index: any) => {
    setSliderNumber(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const prevSlide = () => {
    sliderNumber === 0
      ? setSliderNumber(images.length - 1)
      : setSliderNumber(sliderNumber - 1);
  };

  const nextSlide = () => {
    sliderNumber + 1 === images.length
      ? setSliderNumber(0)
      : setSliderNumber(sliderNumber + 1);
  };

  return (
    <section id="works" className="py-16 bg-black gallery">
      <div className="container desktop mx-auto px-3.5">
        <div>
          {modalOpen && (
            <div className="sliderWrqp">
              <FontAwesomeIcon
                icon={faCircleXmark}
                onClick={handleCloseModal}
                className="btnClose"
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                onClick={prevSlide}
                className="btnPrev"
              />
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                onClick={nextSlide}
                className="btnNext"
              />
              <div className="fullScreenImage">
                <img
                  className=" m-auto mobile:w-[100%] tablet:w-[75%] desktop:w-[50%]"
                  src={images[sliderNumber].img}
                  alt="images"
                />
              </div>
            </div>
          )}
        </div>
        <ul className="wapper flex flex-wrap gap-[26px] justify-center">
          {images &&
            images.map((image, index) => {
              return (
                <li
                  className="item"
                  key={index}
                  onClick={() => handleOpenModal(index)}
                >
                  <img
                    className="w-[300px] mobile:w-[300px] desktop:w-[363px] rounded-xl"
                    src={image.img}
                    alt="Images"
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
