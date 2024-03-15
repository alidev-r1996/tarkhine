import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";

const Slider = () => {
  const [slider, setSlider] = useState(0);

  const images = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];
  const title = [
    "تجربه غذای سالم و گیاهی به سبک ترخینه",
    " سرسبزی اکباتان دلیل حس خوب شماست!",
    "لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!",
  ];

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
        src="/images/thumb.png"
        alt="thumb"
        className="w-36 h-8 slide-center -bottom-4 z-20"
      />
      <div className="flex items-center absolute slide-center gap-2 bottom-0 z-50">
        {images.map((item, index) => {
          return (
            <p
              key={index}
              onClick={() => setSlider(index)}
              className={`${
                slider == index
                  ? "bg-emerald-600 shadow-[0_0_6px_green]"
                  : "bg-gray-400"
              } w-3 h-3 rounded-full cursor-pointer`}
            ></p>
          );
        })}
      </div>
      <p
        onClick={() => changeSlider("next")}
        className="p-3  w-max group  hidden md:block slide-center left-8 cursor-pointer z-50"
      >
        <ChevronLeftIcon className="w-4 h-4 stroke-[3px]  text-slate-400 group-hover:text-white hover:text-white" />
      </p>
      <p
        onClick={() => changeSlider("prev")}
        className="p-3  w-max  group hidden md:block slide-center absolute right-0 cursor-pointer z-50"
      >
        <ChevronRightIcon className="w-4 h-4 stroke-[3px]  text-slate-400 group-hover:text-white hover:text-white" />
      </p>

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-slate-900/70"></div>
        {images.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                slider == index ? "block" : "hidden"
              } w-full h-full object-cover block relative`}
            >
              <Image
              alt="food"
                src={`/images/${item}`}
                fill={true}
                blurDataURL={`/images/${item}`}
                placeholder="blur"
                style={{objectFit: "cover", filter:"brightness(50%)"}}
              />
            </div>
          );
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
        <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 text-sm rounded slide-center bottom-1/4">
          سفارش آنلاین غذا
        </button>
      </div>
    </>
  );
};

export default Slider;
