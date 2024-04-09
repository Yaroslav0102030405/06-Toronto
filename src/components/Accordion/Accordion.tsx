import React, { useState } from "react";

interface Props {
  title: string;
  text1: string;
  text2: string;
}

const Accordion = ({ title, text1, text2 }: Props) => {
  const [isAccordion, setAccordion] = React.useState<boolean>(false);
  return (
    <>
      <section className="bg-black py-2">
        <div className="container desktop mx-auto px-3.5">
          <div className="accordion__wapper flex flex-col  ">
            <div className="accordion  gap-5 max-w-[600px] items-center ">
              <button
                className=" items-center  text-xl flex justify-center p-3.5 border   rounded-xl "
                onClick={() => setAccordion(!isAccordion)}
              >
                <span className="text-blue-400">{title}</span>
                {/* {isAccordion ? <span>-</span> : <span>+</span>} */}
                <svg
                  className="fill-indigo-500 shrink-0 ms-8"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center transition duration-200 ease-out ${
                      isAccordion && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                      isAccordion && "!rotate-180"
                    }`}
                  />
                </svg>
              </button>
              <div
                className={`grid overflow-hidden text-xl p-3.5 bg-white max-w-[600px] ${
                  isAccordion
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="overflow-hidden text-blue-400">{text1}</p>
                <p className="overflow-hidden text-blue-400">{text2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accordion;
