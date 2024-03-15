"use client";

import Slider from "../../common/Slider";
import { useEffect, useState } from "react";
import FoodUi from "../../components/ekbatan/MainFoods";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import SliderBranch from "../../components/ekbatan/Slider";
import Link from "next/link";
import Comments from "./comments";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GetFoods, LikeFoods } from "@/services/requests/Foods/FoodsServices";
import Loader from "@/common/Loader";

const Main = () => {
  const [FoodsData, setFoodsData] = useState({
    irani: [],
    nonIrani: [],
    pizza: [],
    sandwich: [],
    popular: [],
    special: [],
  });
  const {
    data: Foods,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["foods"],
    queryFn: GetFoods,
  });


  
  
  useEffect(() => {
    if (!isLoading) {
      let irani = Foods.filter((food) => food.category == "ایرانی");
      let non_irani = Foods.filter((food) => food.category == "غیرایرانی");
      let pizza = Foods.filter((food) => food.category == "پیتزا");
      let sandwich = Foods.filter((food) => food.category == "ساندویچ");
      let popular = Foods.filter((food) => food.rate > 3);
      let special = Foods.filter((food) => food.discount.length);
      setFoodsData({
        irani: irani,
        nonIrani: non_irani,
        pizza: pizza,
        sandwich: sandwich,
        popular: popular,
        special: special,
      });
    }
  }, [Foods]);


  return (
    <>
      <div className=" h-60 md:h-[340px] relative flex justify-center items-center">
        <Slider />
      </div>
      {isLoading ? <Loader /> : <div>
        <div className="p-4 bg-white">
          <h1 onClick={()=>mutate(1)} className="font-bold text-lg mb-4 mt-8">پیشنهاد ویژه</h1>
          <div className="flex gap-4 overflow-x-auto hideScroll">
            <FoodUi foods={FoodsData.special} />
          </div>
        </div>

        <div className="p-4 bg-emerald-700">
          <h1 className="font-bold text-lg mb-4 mt-8 text-white">
            غذاهای محبوب{" "}
          </h1>
          <div className="flex gap-4 overflow-x-auto hideScroll">
            <FoodUi foods={FoodsData.popular} />
          </div>
        </div>

        <div className="p-4 bg-white">
          <h1 className="font-bold text-lg mb-4 mt-8 ">غذاهای غیرایرانی </h1>
          <div className="flex gap-4 overflow-x-auto hideScroll">
            <FoodUi foods={FoodsData.nonIrani} />
          </div>
        </div>

        <Link href="/branches/menu" className="btn--outline w-max mt-8 mb-12">
          <ClipboardDocumentListIcon className="w-5 h-5" />
          مشاهده منوی کامل
        </Link>

        <div className="w-full">
          <h1 className="font-bold text-lg mb-4 my-8 mx-auto w-max">
            شعبه اکباتان
          </h1>
          <div className="relative h-56">
            <SliderBranch />
          </div>
        </div>

        <Comments />
      </div>}
    </>
  );
};

export default Main;
