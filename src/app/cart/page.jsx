"use client";

import {
  ShoppingCartIcon,
  CheckCircleIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import EmptyCart from "@/components/cart/Empty";
import { useEffect, useState } from "react";
import CompleteInfo from "@/components/cart/StepTwo";
import Payment from "@/components/cart/StepThree";
import PaymentResult from "@/components/cart/PaymentResult";
import InputCodeOTP from "@/common/OTP";
import ShoppingCart from "@/components/cart/StepOne";
import Loader from "@/common/Loader";
import { useSelector } from "react-redux";

const Cart = () => {
  const [cart, setCart] = useState(false);
  const food = useSelector(state=>state.cart)
  const [Login, setLogin] = useState(false);
  const [resultPayment, setResultPayment] = useState(false);
  let isLoading = false;
  const [steps, setSteps] = useState({
    shopCart: true,
    completed: false,
    payment: false,
  });

  
  
  useEffect(() => {
    

  }, []);

  if (!food.cart.length)
    return (
        <EmptyCart />
    );

    if (isLoading) return <Loader />

  return (
    <>
      {!resultPayment && (
        <>
          <InputCodeOTP Login={Login} setLogin={setLogin} />

          <div className="md:flex hidden items-center justify-between w-4/5 my-6 mx-auto p-4 gap-1">
            <div
              className={`${
                steps.shopCart ? "text-emerald-700 font-bold" : "text-gray-300"
              } flex text-xs items-center gap-1`}
            >
              <ShoppingCartIcon
                className={`${steps.shopCart ? "w-6 h-6" : ""} w-5 h-5`}
              />
              <p className={" "}>سبد خرید</p>
            </div>
            <p
              className={`${
                steps.completed ? "border-emerald-700" : "border-gray-300"
              } flex-1 h-1 border-b-2 border-dotted`}
            >
              {" "}
            </p>
            <div
              className={`${
                steps.completed ? "text-emerald-700 font-bold" : "text-gray-300"
              } flex text-xs items-center gap-1`}
            >
              <CheckCircleIcon
                className={`${steps.shopCart ? "w-6 h-6" : ""} w-5 h-5`}
              />
              <p className={" "}>تکمیل اطلاعات </p>
            </div>
            <p
              className={`${
                steps.payment ? "border-emerald-700" : "border-gray-300"
              } flex-1 h-1 border-b-2 border-dotted`}
            >
              {" "}
            </p>
            <div
              className={`${
                steps.payment ? "text-emerald-700 font-bold" : "text-gray-300"
              } flex text-xs items-center gap-1`}
            >
              <CreditCardIcon
                className={`${steps.shopCart ? "w-6 h-6" : ""} w-5 h-5`}
              />
              <p className={" "}>پرداخت </p>
            </div>
          </div>

          {!steps.completed && (
            <ShoppingCart  setSteps={setSteps} />
          )}
          {!steps.payment && steps.completed && (
            <CompleteInfo  setSteps={setSteps} />
          )}
          {steps.completed && steps.payment && (
            <Payment
              setSteps={setSteps}
              setResultPayment={setResultPayment}
            />
          )}
        </>
      )}
      {resultPayment && <PaymentResult />}
    </>
  );
};

export default Cart;
