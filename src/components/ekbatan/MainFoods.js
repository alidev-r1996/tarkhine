"use client";

import { HeartIcon, StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "@/redux/features/cart/cartSlice";
import { useState } from "react";
import http from "@/services/configs/Config";
import { toast } from "react-hot-toast";
import IsInCart from "@/utils/IsInCart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LikeFoods } from "@/services/requests/Foods/FoodsServices";
import AuthContainer from "../Auth/AuthContainer";

const FoodUi = ({ foods}) => {
  const dispatch = useDispatch();
  const [Login, setLogin] = useState(false);
  const ShoppingCartInfo = useSelector((state)=>state.cart)

  const queryClient = useQueryClient();
  const {mutateAsync} = useMutation({
    mutationKey: ["foods"],
    mutationFn: LikeFoods
  })

  const AddToCartHandler = async (event, food) => {
    event.preventDefault();
    const {data} = await http.get("/auth");
    if (data.value) {
      dispatch(AddToCart(food));
      toast.success(` ${food.title} به سبد خرید اضافه شد`)
    } else {
      toast.error("برای خرید ابتدا وارد حساب خود شوید")
      setLogin(true);
    }
  };

  const LikeHandler = async(event, food)=>{
    event.preventDefault();
    const {data} = await http.get("/auth");
    if (data.value) {
      const res = await mutateAsync(food.id)
      queryClient.invalidateQueries(["foods"])
      toast.success(res)
    } else {
      toast.error("ابتدا وارد حساب خود شوید")
      setLogin(true);
    }
  }

  return (
    <>
      {Login && <AuthContainer onClose={() => setLogin(!Login)} />}
      {foods.map((food) => {
        return (
          <div
            key={food.id}
            className="flex bg-white flex-col border border-gray-200 rounded overflow-hidden md:min-w-[280px] min-w-[170px] "
          >
            <div className="w-full h-28 md:h-60  object-fill block relative">
              <Image
                alt="food"
                src={food.img}
                blurDataURL="/images/slide1.jpg"
                fill={true}
                placeholder="blur"
                sizes="(max-width: 768px)100vw"
              />
            </div>
            <div className="p-2 flex flex-col gap-5">
              <h1 className="md:font-bold  md:text-lg text-center">
                {food.title}
              </h1>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-4">
                  <div onClick={(event)=>LikeHandler(event,food)} className="flex items-center gap-1">
                    <HeartIcon
                      className={`w-4 h-4 stroke-rose-500 ${
                        food.isLiked && "fill-rose-500"
                      } cursor-pointer`}
                    />
                    <p className="text-slate-400 text-xs hidden md:block">
                      افزودن به علاقه‌مندی‌ها
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-4 h-4 fill-yellow-500 stroke-transparent" />
                    <p> {food.rate}</p>
                    <p  className="text-slate-400 text-xs hidden md:block">
                      ({food.rateCount} امتیاز)
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div
                    className={`${
                      food.offPice ? "flex" : "hidden"
                    }  items-center justify-between gap-1`}
                  >
                    <p className="text-slate-400  line-through text-xs">
                      {food.offPice}
                    </p>
                    <p className="px-2 py-1 rounded bg-gray-100 text-red-500 font-bold text-[10px]">
                      %{food.discount}
                    </p>
                  </div>
                  <h2 className="md:text-lg text-sm">{food.price} تومان</h2>
                </div>
              </div>
              <button
              disabled={IsInCart(ShoppingCartInfo.cart, food.id)}
                onClick={(event) => AddToCartHandler(event, food)}
                className="bg-emerald-700 disabled:bg-gray-400 disabled:cursor-not-allowed  text-white text-xs md:text-base  md:my-4 rounded py-2 hover:bg-emerald-600"
              >
                {IsInCart(ShoppingCartInfo.cart, food.id)? "به سبد خرید اضافه شده": "افزودن به سبد خرید"}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FoodUi;
