import { DecrementFood, IncrementFood, RemoveFood } from "@/redux/features/cart/cartSlice";
import { HeartIcon, StarIcon, TrashIcon } from "@heroicons/react/24/outline";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

import Image from "next/image";
import { useDispatch } from "react-redux";

const FoodUi = ({ food }) => {
  const dispatch = useDispatch();
  return (
    <div className="md:flex hidden overflow-hidden  mx-auto md:basis-auto rounded border border-gray-200 shadow">
      <div className="w-24 md:w-40 object-cover block relative">
        <Image
          alt="food"
          src={food.img}
          blurDataURL={food.img}
          placeholder="blur"
          fill={true}
        />
      </div>
      <div className="flex flex-1 flex-col p-2 md:px-4 gap-1 justify-between">
        <div className="flex items-center justify-between">
          <h1 className="md:font-bold text-sm md:text-lg">{food.title} </h1>
          <p onClick={()=>dispatch(RemoveFood(food.id))} className="p-1 cursor-pointer rounded-full hover:bg-rose-600 hover:text-white text-gray-500">
            <TrashIcon className="w-5 h-5" />
          </p>
        </div>

        <div className="flex md:items-start  justify-between my-1 md:my-3 gap-2 ">
          <p className="md:text-xs  text-[9px] text-slate-500   md:leading-6">
            {food.ingreiants}
          </p>

          <div className="flex flex-col gap-2">
            <div
              className={`${
                food.offPice ? "md:flex hidden" : "hidden"
              }  items-center justify-between gap-1`}
            >
              <p className="text-slate-400  line-through text-xs">
                {food.offPice}
              </p>
              <p className="px-2 py-1 rounded bg-gray-100 text-red-500 font-bold text-[10px]">
                %{food.discount}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between md:gap-2">
          <div className="flex item-center gap-3">
            <Box
              sx={{
                "& .MuiRating-root": {
                  fontSize: "20px",
                },
              }}
            >
              <Rating name="read-only" value={food.rate} readOnly />
            </Box>
            <div className="flex items-center bg-emerald-100 rounded overflow-hidden">
              <button onClick={()=>dispatch(IncrementFood(food.id))} className="px-2  text-emerald-700 hover:bg-emerald-700 hover:text-white">
                +
              </button>
              <button className="px-2 text-sm text-emerald-700">
                {food.quantity || 0}
              </button>
              <button onClick={()=>dispatch(DecrementFood(food.id))} className="px-2  text-emerald-700 hover:bg-emerald-700 hover:text-white">
                -
              </button>
            </div>
          </div>

          <h2 className=" text-sm whitespace-nowrap">{food.price} تومان</h2>
        </div>
      </div>
    </div>
  );
};

export default FoodUi;
