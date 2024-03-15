import { MagnifyingGlassIcon, ChevronRightIcon, HeartIcon, StarIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import EmptyFavourites from "./EmptyFavourites";

const Favourites = ({setMenu}) => {
    const [filter, setFilter] = useState("all")
    const [search, setSearch]= useState("")

    const filterHandler = (filter)=>{
        setFilter(filter)
      }


  return (
    <div
      className={`w-full bg-white md:w-2/3  flex-col md:border border-gray-300 rounded md:p-4`}
    >
      <div className="flex items-center border-b border-b-gray-300 jb">
        <ChevronRightIcon
          onClick={() => setMenu("")}
          className="w-5 h-5 stroke-2 md:hidden cursor-pointer hover:stroke-emerald-600"
        />
        <h1 className="py-2 font-bold mx-auto md:mx-0"> علاقه‌مندی‌ها</h1>
      </div>

      <div className="flex flex-col md:flex-row bg-white items-center gap-2 md:gap-4 p-2">
        <div className="flex items-center gap-2  overflow-x-auto w-full flex-1 hideScroll">
            <p onClick={()=>filterHandler("all")}         className={`${filter=="all"?"bg-emerald-700 text-white": "bg-gray-200"} filterItem`}>همه  </p>
            <p onClick={()=>filterHandler("main-food")}       className={`${filter=="main-food"?"bg-emerald-700 text-white": "bg-gray-200"} filterItem`}>غذای‌اصلی </p>
            <p onClick={()=>filterHandler("appetizer")}   className={`${filter=="appetizer"?"bg-emerald-700 text-white": "bg-gray-200"} filterItem`}>پیش‌غذا </p>
            <p onClick={()=>filterHandler("dessert")}       className={`${filter=="dessert"?"bg-emerald-700 text-white": "bg-gray-200"} filterItem`}>دسر</p>
            <p onClick={()=>filterHandler("beverages")}    className={`${filter=="beverages"?"bg-emerald-700 text-white": "bg-gray-200"} filterItem`}>نوشیدنی</p>
        </div>
        <div className="border md:flex-1 w-full flex my-4 p-1 border-slate-600 rounded  justify-between items-center">
            <input
              type="text"
              name="search"
              id="search"
              value={search}
              onChange={(event)=>setSearch(event.target.value)}
              placeholder="جستجو "
              className="outline-none w-full  text-xs placeholder:text-slate-700"
            />
            <MagnifyingGlassIcon className="w-6 h-6" />
        </div>
      </div>

      <EmptyFavourites />

      {/* <div className="grid xs:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
        <div className="flex flex-col rounded overflow-hidden shadow">
            <img src="images/foods/irani/01.png" alt="" className="h-28" />
            <div className="flex items-center justify-between p-2">
                <h1 className="font-bold text-xs md:text-sm">کوفته تبریزی</h1>
                <HeartIcon className={`${false? "fill-rose-500":"stroke-rose-500"} w-5 h-5 cursor-pointer`} />
            </div>
            <div className="flex items-center justify-between p-2">
                <div className="md:block hidden">
                  <Box
                    sx={{
                      "& .MuiRating-root": {
                        fontSize: "18px",
                      },
                    }}
                  >
                    <Rating name="read-only" value={3} readOnly />
                  </Box>
                </div>
                <div className="flex items-center md:hidden">
                    <StarIcon className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                    <p className="text-xs">4</p>
                </div>
                <p className="text-sm">150.000 تومان</p>
            </div>
            <div className="p-2">
                <button className="bg-emerald-600 w-full text-white text-[10px] md:text-sm rounded px-2 md:flex-1 py-2">
                    افزودن به سبد خرید
                </button>
            </div>
        </div>
        <div className="flex flex-col rounded overflow-hidden shadow">
            <img src="images/foods/irani/01.png" alt="" className="h-28" />
            <div className="flex items-center justify-between p-2">
                <h1 className="font-bold text-xs md:text-sm">کوفته تبریزی</h1>
                <HeartIcon className={`${false? "fill-rose-500":"stroke-rose-500"} w-5 h-5 cursor-pointer`} />
            </div>
            <div className="flex items-center justify-between p-2">
                <div className="md:block hidden">
                  <Box
                    sx={{
                      "& .MuiRating-root": {
                        fontSize: "18px",
                      },
                    }}
                  >
                    <Rating name="read-only" value={3} readOnly />
                  </Box>
                </div>
                <div className="flex items-center md:hidden">
                    <StarIcon className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                    <p className="text-xs">4</p>
                </div>
                <p className="text-sm">150.000 تومان</p>
            </div>
            <div className="p-2">
                <button className="bg-emerald-600 w-full text-white text-[10px] md:text-sm rounded px-2 md:flex-1 py-2">
                    افزودن به سبد خرید
                </button>
            </div>
        </div>
        <div className="flex flex-col rounded overflow-hidden shadow">
            <img src="images/foods/irani/01.png" alt="" className="h-28" />
            <div className="flex items-center justify-between p-2">
                <h1 className="font-bold text-xs md:text-sm">کوفته تبریزی</h1>
                <HeartIcon className={`${false? "fill-rose-500":"stroke-rose-500"} w-5 h-5 cursor-pointer`} />
            </div>
            <div className="flex items-center justify-between p-2">
                <div className="md:block hidden">
                  <Box
                    sx={{
                      "& .MuiRating-root": {
                        fontSize: "18px",
                      },
                    }}
                  >
                    <Rating name="read-only" value={3} readOnly />
                  </Box>
                </div>
                <div className="flex items-center md:hidden">
                    <StarIcon className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                    <p className="text-xs">4</p>
                </div>
                <p className="text-sm">150.000 تومان</p>
            </div>
            <div className="p-2">
                <button className="bg-emerald-600 w-full text-white text-[10px] md:text-sm rounded px-2 md:flex-1 py-2">
                    افزودن به سبد خرید
                </button>
            </div>
        </div>
        <div className="flex flex-col rounded overflow-hidden shadow">
            <img src="images/foods/irani/01.png" alt="" className="h-28" />
            <div className="flex items-center justify-between p-2">
                <h1 className="font-bold text-xs md:text-sm">کوفته تبریزی</h1>
                <HeartIcon className={`${false? "fill-rose-500":"stroke-rose-500"} w-5 h-5 cursor-pointer`} />
            </div>
            <div className="flex items-center justify-between p-2">
                <div className="md:block hidden">
                  <Box
                    sx={{
                      "& .MuiRating-root": {
                        fontSize: "18px",
                      },
                    }}
                  >
                    <Rating name="read-only" value={3} readOnly />
                  </Box>
                </div>
                <div className="flex items-center md:hidden">
                    <StarIcon className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                    <p className="text-xs">4</p>
                </div>
                <p className="text-sm">150.000 تومان</p>
            </div>
            <div className="p-2">
                <button className="bg-emerald-600 w-full text-white text-[10px] md:text-sm rounded px-2 md:flex-1 py-2">
                    افزودن به سبد خرید
                </button>
            </div>
        </div>
        <div className="flex flex-col rounded overflow-hidden shadow">
            <img src="images/foods/irani/01.png" alt="" className="h-28" />
            <div className="flex items-center justify-between p-2">
                <h1 className="font-bold text-xs md:text-sm">کوفته تبریزی</h1>
                <HeartIcon className={`${false? "fill-rose-500":"stroke-rose-500"} w-5 h-5 cursor-pointer`} />
            </div>
            <div className="flex items-center justify-between p-2">
                <div className="md:block hidden">
                  <Box
                    sx={{
                      "& .MuiRating-root": {
                        fontSize: "18px",
                      },
                    }}
                  >
                    <Rating name="read-only" value={3} readOnly />
                  </Box>
                </div>
                <div className="flex items-center md:hidden">
                    <StarIcon className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                    <p className="text-xs">4</p>
                </div>
                <p className="text-sm">150.000 تومان</p>
            </div>
            <div className="p-2">
                <button className="bg-emerald-600 w-full text-white text-[10px] md:text-sm rounded px-2 md:flex-1 py-2">
                    افزودن به سبد خرید
                </button>
            </div>
        </div>
        <div className="flex flex-col rounded overflow-hidden shadow">
            <img src="images/foods/irani/01.png" alt="" className="h-28" />
            <div className="flex items-center justify-between p-2">
                <h1 className="font-bold text-xs md:text-sm">کوفته تبریزی</h1>
                <HeartIcon className={`${false? "fill-rose-500":"stroke-rose-500"} w-5 h-5 cursor-pointer`} />
            </div>
            <div className="flex items-center justify-between p-2">
                <div className="md:block hidden">
                  <Box
                    sx={{
                      "& .MuiRating-root": {
                        fontSize: "18px",
                      },
                    }}
                  >
                    <Rating name="read-only" value={3} readOnly />
                  </Box>
                </div>
                <div className="flex items-center md:hidden">
                    <StarIcon className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                    <p className="text-xs">4</p>
                </div>
                <p className="text-sm">150.000 تومان</p>
            </div>
            <div className="p-2">
                <button className="bg-emerald-600 w-full text-white text-[10px] md:text-sm rounded px-2 md:flex-1 py-2">
                    افزودن به سبد خرید
                </button>
            </div>
        </div>
        <div className="flex flex-col rounded overflow-hidden shadow">
            <img src="images/foods/irani/01.png" alt="" className="h-28" />
            <div className="flex items-center justify-between p-2">
                <h1 className="font-bold text-xs md:text-sm">کوفته تبریزی</h1>
                <HeartIcon className={`${false? "fill-rose-500":"stroke-rose-500"} w-5 h-5 cursor-pointer`} />
            </div>
            <div className="flex items-center justify-between p-2">
                <div className="md:block hidden">
                  <Box
                    sx={{
                      "& .MuiRating-root": {
                        fontSize: "18px",
                      },
                    }}
                  >
                    <Rating name="read-only" value={3} readOnly />
                  </Box>
                </div>
                <div className="flex items-center md:hidden">
                    <StarIcon className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                    <p className="text-xs">4</p>
                </div>
                <p className="text-sm">150.000 تومان</p>
            </div>
            <div className="p-2">
                <button className="bg-emerald-600 w-full text-white text-[10px] md:text-sm rounded px-2 md:flex-1 py-2">
                    افزودن به سبد خرید
                </button>
            </div>
        </div>
      </div> */}
      
      
    </div>
  );
};

export default Favourites;
