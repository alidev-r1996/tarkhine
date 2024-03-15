import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";

const SliderBranch = () => {
  const [slider, setSlider] = useState(0);

  const images = ["ekbatan-01.png"]
  const title = []

  const changeSlider = (action) => {
    let counter = slider;
    switch (action) {
      case "next":
        counter += 1;
        counter = counter > images.length - 1 ? 0 : counter;
        setSlider(counter);
        break;
      case "prev":
        counter -= 1;
        counter = counter < 0 ? images.length - 1 : counter;
        setSlider(counter);
        break;
      default:
        break;
    }
  };

  

  return (
    <>
      <img
        src="/images/branch-info.png"
        alt="thumb"
        className=" w-4/5 md:w-1/2 slide-center -bottom-12 md:-bottom-20 z-20"
      />
      
      <ChevronLeftIcon
        onClick={() => changeSlider("next")}
        className="w-4 h-4 stroke-slate-400 hover:stroke-white stroke-[3px]  hidden md:block slide-center left-5 cursor-pointer z-50"
      />
      <ChevronRightIcon
        onClick={() => changeSlider("prev")}
        className="w-4 h-4 stroke-slate-400 hover:stroke-white stroke-[3px] hidden md:block slide-center absolute right-1 cursor-pointer z-50"
      />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-slate-900/30"></div>
        {images.map((item, index) => {
          return (
            <div key={index} className={`${
              slider == index ? "block" : "hidden"
            } w-full h-full object-cover relative`}>
              <Image src={`/images/${item}`} blurDataURL={`/images/${item}`} alt="slider" style={{objectFit:"cover"}} fill={true} sizes="(max-width: 768px)100vw" />
            </div>
          )
        })}
        {title.map((item, index) => {
          return (
            <h1
              key={index}
              className={`${
                slider == index ? "block" : "hidden"
              }  text-white w-full text-center font-bold text-lg slide-center z-50 left-1/2`}
            >
              {item}
            </h1>
          );
        })}
       
      </div>
    </>
  );
};

export default SliderBranch;
