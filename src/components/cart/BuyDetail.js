import { useState } from "react";
import { TrashIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import RemoveCart from "./ClearCart";
import Link from "next/link";
import { DecrementFood, IncrementFood } from "@/redux/features/cart/cartSlice";

const BuyDetail = ({ cart, setSteps,dispatch, payment, setResultPayment }) => {
  const [clearCart, setClearCart] = useState(false);

  return (
    <>
      <RemoveCart clearCart={clearCart} setClearCart={setClearCart} />
      <div className="w-full md:w-1/3 p-2 border border-gray-300 rounded shadow">
        <div className="md:flex p-3 hidden items-center justify-between border-b border-b-gray-300">
          <p className="text-slate-700 text-xs ">سبد خرید (4)</p>
          <p
            onClick={() => setClearCart(!clearCart)}
            className="p-1 cursor-pointer rounded-full hover:bg-rose-600 hover:text-white text-gray-500"
          >
            <TrashIcon className="w-5 h-5" />
          </p>
        </div>
        <div className="overflow-y-auto max-h-40 md:block hidden">
          {cart.cart.map((food) => {
            return (
              <div
                key={food.id}
                className="flex p-2 items-center justify-between even:bg-gray-200 odd:bg-gray-50"
              >
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-bold ">{food.title}</p>
                  <p className="text-[10px] text-gray-500 ">
                    {food.price}تومان
                  </p>
                </div>
                <div className="flex items-center bg-emerald-100 rounded overflow-hidden">
                  <button onClick={()=>dispatch(IncrementFood(food.id))}  className="px-2  text-emerald-700 hover:bg-emerald-700 hover:text-white">
                    +
                  </button>
                  <button className="px-2 text-sm text-emerald-700 ">{food.quantity}</button>
                  <button onClick={()=>dispatch(DecrementFood(food.id))} className="px-2  text-emerald-700 hover:bg-emerald-700 hover:text-white">
                    -
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex p-3 items-center justify-between border-b border-b-gray-300">
          <p className="text-slate-700 text-xs ">تخفیف محصولات</p>
          <p className="text-slate-500 text-[10px] md:text-xs">
            {Math.abs(cart.total.discount)} هزارتومان
          </p>
        </div>
        <div className="flex flex-col p-3 items-center justify-between border-b border-b-gray-300">
          <div className="flex justify-between items-center w-full">
            <p className="text-slate-700 text-xs "> هزینه ارسال</p>
            <p className="text-slate-500 text-[10px] md:text-xs">
              {cart.total.delivery} تومان
            </p>
          </div>
        </div>
        <div className="flex p-3 items-center justify-between ">
          <p className="text-slate-700 text-xs md:text-sm">مبلغ قابل پرداخت </p>
          <p className="text-emerald-600 font-bold text-xs md:text-sm">
            {cart.total.price} هزارتومان
          </p>
        </div>

        {payment ? (
          <div
            onClick={() => setResultPayment((prev) => !prev)}
            className="flex items-center rounded justify-center gap-2 cursor-pointer hover:bg-emerald-600 mt-3 bg-emerald-700 text-white"
          >
            <p className="py-2 text-sm">تکمیل خرید </p>
            <ArrowLeftIcon className="w-5 h-5" />
          </div>
        ) : (
          <div
            onClick={() =>
              setSteps({ shopCart: true, completed: true, payment: true })
            }
            className="flex items-center rounded justify-center gap-2 cursor-pointer hover:bg-emerald-600 mt-3 bg-emerald-700 text-white"
          >
            <p className="py-2 text-sm"> ثبت سفارش</p>
            <ArrowLeftIcon className="w-5 h-5" />
          </div>
        )}
      </div>
    </>
  );
};

export default BuyDetail;
