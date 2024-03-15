import {
  TrashIcon,
  ExclamationCircleIcon,
  ArrowLeftIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import FoodCart from "./FoodCart";
import { useEffect, useState } from "react";
import RemoveCart from "./ClearCart";
import { useSelector } from "react-redux";
import InputCodeOTP from "@/common/OTP";
import http from "@/services/configs/Config";

const ShoppingCart = ({ Foods, setSteps }) => {
  const [clearCart, setClearCart] = useState(false);
  const ShoppingCartInfo = useSelector((state) => state.cart);
  const [userData, setUserData] = useState();
  const [Login, setLogin] = useState(false);

  useEffect(() => {
    http.get("/auth").then(({ data }) => {
      if (data.value) {
        setUserData(data.value);
      }
    });
  }, []);

  return (
    <>
      <InputCodeOTP Login={Login} setLogin={setLogin} />
      <RemoveCart clearCart={clearCart} setClearCart={setClearCart} />
      <div className="flex flex-col md:flex-row items-start justify-between p-4 gap-4">
        <h1 className="font-bold text-sm md:hidden block mx-auto p-2">
          سبد خرید{" "}
        </h1>
        <div className="border w-full md:w-2/3 border-gray-300 rounded shadow max-h-44 md:max-h-[420px] overflow-y-auto md:p-4 hideScroll">
          <FoodCart />
        </div>
        <div className="border w-full md:w-1/3 border-gray-300 rounded shadow p-4 flex flex-col">
          <div className="flex p-3 items-center justify-between border-b border-b-gray-300">
            <p className="text-slate-700 text-xs ">
              سبد خرید ({ShoppingCartInfo.cart.length})
            </p>
            <p
              onClick={() => setClearCart(!clearCart)}
              className="p-1 cursor-pointer rounded-full hover:bg-rose-600 hover:text-white text-gray-500"
            >
              <TrashIcon className="w-5 h-5" />
            </p>
          </div>
          <div className="flex p-3 items-center justify-between border-b border-b-gray-300">
            <p className="text-slate-700 text-xs ">تخفیف محصولات</p>
            <p className="text-slate-500 text-[10px] md:text-xs">
              {Math.abs(ShoppingCartInfo.total.discount)} هزارتومان
            </p>
          </div>
          <div className="flex flex-col p-3 items-center justify-between border-b border-b-gray-300">
            <div className="flex justify-between items-center w-full">
              <p className="text-slate-700 text-xs "> هزینه ارسال</p>
              <p className="text-slate-500 text-[10px] md:text-xs">{ShoppingCartInfo.total.delivery} تومان</p>
            </div>
            <div className="flex items-start gap-1 text-yellow-700 mt-4">
              <ExclamationCircleIcon className="w-9 h-9" />
              <p className=" text-[9px] text-justify leading-4 ">
                هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
                محاسبه و به این مبلغ اضافه خواهد شد.
              </p>
            </div>
          </div>
          <div className="flex p-3 items-center justify-between ">
            <p className="text-slate-700 text-xs md:text-sm">
              مبلغ قابل پرداخت{" "}
            </p>
            <p className="text-emerald-600 font-bold text-xs md:text-sm">
              {ShoppingCartInfo.total.price} هزارتومان
            </p>
          </div>
          {userData ? (
            <div
              onClick={() =>
                setSteps({ shopCart: true, completed: true, payment: false })
              }
              className="flex items-center rounded justify-center gap-2 cursor-pointer hover:bg-emerald-600 mt-3 bg-emerald-700 text-white"
            >
              <p className="py-2 text-sm">ادامه</p>
              <ArrowLeftIcon className="w-5 h-5" />
            </div>
          ) : (
            <div
              onClick={() => setLogin(!Login)}
              className="flex items-center rounded justify-center gap-2 cursor-pointer hover:bg-emerald-600 mt-3 bg-emerald-700 text-white"
            >
              <UserIcon className="w-5 h-5" />
              <p className="py-2 text-sm">ورود/ثبت‌نام</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
