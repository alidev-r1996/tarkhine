import { AddToCart } from "@/redux/features/cart/cartSlice";
import http from "@/services/configs/Config";
import { LikeEkbatanFoods, LikeFoods } from "@/services/requests/Foods/FoodsServices";
import IsInCart from "@/utils/IsInCart";
import { HeartIcon, StarIcon } from "@heroicons/react/24/outline";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const AllFoodUi = ({ foods }) => {
  const dispatch = useDispatch();
  const [Login, setLogin] = useState(false);
  const ShoppingCartInfo = useSelector((state) => state.cart);

  const queryClient = useQueryClient();
  const {mutateAsync} = useMutation({
    mutationKey: ["EkbatanFood"],
    mutationFn: LikeEkbatanFoods
  })

  const AddToCartHandler = async (event, food) => {
    event.preventDefault();
    const { data } = await http.get("/auth");
    if (data.value) {
      dispatch(AddToCart(food));
      toast.success(` ${food.title} به سبد خرید اضافه شد`);
    } else {
      toast.error("برای خرید ابتدا وارد حساب خود شوید");
      setLogin(true);
    }
  };

  const LikeHandler = async(event, food)=>{
    event.preventDefault();
    const {data} = await http.get("/auth");
    if (data.value) {
      const res = await mutateAsync(food.id)
      queryClient.invalidateQueries(["EkbatanFood"])
      toast.success(res)
    } else {
      toast.error("ابتدا وارد حساب خود شوید")
      setLogin(true);
    }
  }

  return (
    <>
      {foods.map((food) => {
        return (
          <div
            key={food.id}
            className="flex overflow-hidden w-full mx-auto md:basis-auto rounded border border-gray-200 shadow"
          >
            <div className="w-24 md:w-40 object-cover block relative">
              <Image
                alt="food"
                src={food.img}
                placeholder="blur"
                blurDataURL={food.img}
                fill={true}
                sizes="(max-width: 768px)100vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-2 md:px-4 gap-1">
              <div className="flex items-center justify-between">
                <h1 className="md:font-bold text-sm md:text-lg">
                  {food.title}{" "}
                </h1>
                <div
                  className={`${
                    food.offPice ? "flex md:hidden" : "hidden"
                  }  items-center justify-between gap-1`}
                >
                  <p className="text-slate-400  line-through text-xs">
                    {food.offPice}
                  </p>
                  <p className="px-2 py-1 rounded bg-gray-100 text-red-500 font-bold text-[10px]">
                    %{food.discount}
                  </p>
                </div>
                <HeartIcon onClick={(event)=>LikeHandler(event,food)}
                  className={`w-5 h-5 stroke-rose-500  md:block hidden ${
                    food.isLiked && "fill-rose-500"
                  } cursor-pointer`}
                />
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
                  <h2 className=" text-sm whitespace-nowrap">
                    {food.price} تومان
                  </h2>
                </div>
              </div>

              <div className="flex items-center justify-between md:gap-2">
                <HeartIcon onClick={(event)=>LikeHandler(event,food)}
                  className={`w-5 h-5 mb-2 stroke-rose-500  md:hidden block ${
                    food.isLiked && "fill-rose-500"
                  } cursor-pointer`}
                />
                <div className="hidden md:block">
                  <Box
                    sx={{
                      "& .MuiRating-root": {
                        fontSize: "20px",
                      },
                    }}
                  >
                    <Rating name="read-only" value={food.rate} readOnly />
                  </Box>
                </div>
                <div className="block md:hidden">
                  <Box
                    sx={{
                      "& .MuiRating-root": {
                        fontSize: "18px",
                      },
                    }}
                  >
                    <Rating name="read-only" value={food.rate} readOnly />
                  </Box>
                </div>
                <button
                disabled={IsInCart(ShoppingCartInfo.cart, food.id)}
                  onClick={(event) => AddToCartHandler(event, food)}
                  className="bg-emerald-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white text-[10px] md:text-sm rounded px-2 md:flex-1 py-2"
                >
                  {IsInCart(ShoppingCartInfo.cart, food.id)? "به سبد خرید اضافه شده": "افزودن به سبد خرید"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AllFoodUi;
