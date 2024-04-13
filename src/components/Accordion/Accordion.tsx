import React, { useState } from "react";

interface Props {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  text8?: string;
  text9?: string;
  text10?: string;
  text11?: string;
  text12?: string;
}

const Accordion = ({
  title,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
  text10,
  text11,
  text12,
}: Props) => {
  const [isAccordion, setAccordion] = React.useState<boolean>(false);
  return (
    <>
      <section className="bg-black pb-2.5">
        <div className="container mx-auto px-3.5">
          <div className="accordion__wapper flex flex-col gap-2.5 max-w-[600px] m-auto ">
            {/* <div className="accordion   items-center "> */}
            <button
              className="text-xl flex items-center justify-between p-3.5 border rounded-xl hover:bg-white"
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
              className={`grid overflow-hidden transition-all rounded-xl duration-300 ease-in-out text-xl bg-white ${
                isAccordion
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="overflow-hidden text-black p-3">
                {text1}
                <br />
                {text2} <br />
                {text3} <br />
                {text4} <br />
                {text5} <br />
                {text6} <br />
                {text7} <br />
                {text8} <br />
                {text9} <br />
                {text10} <br />
                {text11} <br />
                {text12} <br />
                {/* {text13} <br />
                {text14} <br /> */}
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Accordion;
