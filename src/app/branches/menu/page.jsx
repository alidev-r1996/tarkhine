"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import CovertTitle from "../../../utils/ChangeTitle";
import Slider from "@/common/Slider";
import AllFoodUi from "@/components/ekbatan/AllFoods";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { GetEkbatanFoods } from "@/services/requests/Foods/FoodsServices";
import Loader from "@/common/Loader";
import filtersItem from "@/constants/FilterFood";



const Menu = () => {
  const [FoodsData, setFoodsData] = useState({});
  const [searchFood, setSearchFood] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const filter = searchParams.get("filter") || "all";
  const search = searchParams.get("search") || "";


  const {
    data: Foods,
    isError,
    isLoading,
    refetch
  } = useQuery({
    queryKey: ["EkbatanFood", filter, search],
    queryFn: () => GetEkbatanFoods({ search, filter }),
  });

  const SearchHandler = (event) => {
    setSearchFood(event.target.value);
    params.set("search", event.target.value);
    router.push(pathname + "?" + params.toString(), {scroll: false});
    refetch()
  };

  const filterHandler = (filter) => {
    params.set("filter", filter);
    router.push(pathname + "?" + params.toString(), {scroll: false});
    refetch()
  };


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

  useEffect(()=>{ refetch()},[search, filter])

  return (
    <>
      <div className=" h-60 md:h-[340px] relative flex justify-center items-center">
        <Slider />
      </div>
      <div className="bg-gray-200 flex justify-between md:justify-normal items-center gap-2">
        <p className=" p-3 border-b-2 text-sm md:text-base whitespace-nowrap cursor-pointer border-b-emerald-600 font-bold text-emerald-600">
          غذای اصلی
        </p>
        <p className="text-gray-400 text-sm md:text-base whitespace-nowrap p-3 border-b-2  cursor-pointer">
          پیش غذا{" "}
        </p>
        <p className="text-gray-400 text-sm md:text-base whitespace-nowrap p-3 border-b-2  cursor-pointer">
          دسر{" "}
        </p>
        <p className="text-gray-400 text-sm md:text-base whitespace-nowrap p-3 border-b-2  cursor-pointer">
          نوشیدنی{" "}
        </p>
      </div>
      <div className="flex flex-col md:flex-row bg-white items-center gap-2 md:gap-4 p-2">
        <div className="flex items-center gap-2  overflow-x-auto w-full flex-1 hideScroll">
          {filtersItem.map((item, index) => {
            return (
              <p
                key={index}
                onClick={() => filterHandler(item.englishTitle)}
                className={`${
                  filter == item.englishTitle
                    ? "bg-emerald-700 text-white"
                    : "bg-gray-200"
                } filterItem`}
              >
                {item.title}
              </p>
            );
          })}
        </div>
        <div className="border md:flex-1 w-full flex my-4 p-1 border-slate-600 rounded  justify-between items-center">
          <input
            type="text"
            name="search"
            id="search"
            value={searchFood}
            onChange={SearchHandler}
            placeholder="جستجو "
            className="outline-none w-full  text-xs placeholder:text-slate-700"
          />
          <MagnifyingGlassIcon className="w-6 h-6" />
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        Object.entries(FoodsData).map((item, index) => {
          return (
            <div
              key={index}
              className={`${item[1].length < 1 ? "hidden" : "block"} p-4`}
            >
              <h1 className="font-bold">{CovertTitle(item[0])} </h1>
              <div className="md:grid md:grid-cols-2 flex flex-col gap-2 mx-auto my-3">
                <AllFoodUi foods={item[1]} />
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Menu;
