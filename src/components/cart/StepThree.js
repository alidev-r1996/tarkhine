import {
  CreditCardIcon,
  BanknotesIcon,
  ReceiptPercentIcon,
  ShieldExclamationIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import BuyDetail from "./BuyDetail";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CouponCart } from "@/redux/features/cart/cartSlice";

const Payment = ({ Foods, setSteps, setResultPayment }) => {
  const [payment, setPayment] = useState("interneti");
  const [coupon, setCoupon] = useState("");
  const dispatch = useDispatch();
  const ShppingCartInfo = useSelector((state) => state.cart);

  const CouponHandler = () => {
    dispatch(CouponCart(coupon));
    setCoupon("");
  };

  return (
    <>
      <div className="p-4 flex flex-col md:flex-row gap-4">
        <div className="md:hidden flex justify-between">
          <p
            onClick={() =>
              setSteps({ shopCart: false, completed: true, payment: false })
            }
            className="p-1 cursor-pointer"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </p>
          <h1 className="font-bold text-sm block mx-auto">پرداخت </h1>
        </div>
        <div className="w-full md:w-2/3 gap-3 flex flex-col">
          <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 md:items-center justify-between border border-gray-300 rounded shadow p-4">
            <div className="flex pb-2 md:pb-0  items-center gap-1 border-b border-b-gray-300 md:border-none">
              <ReceiptPercentIcon className="w-6 h-6" />
              <p className="md:text-xs ">ثبت کد تخفیف </p>
            </div>
            <div className="flex items-center gap-2 ">
              <input
                type="text"
                value={coupon}
                onChange={(event) => setCoupon(event.target.value)}
                name="discount"
                id="discount"
                className="outline-none border p-1 border-gray-300 rounded w-full md:w-max text-sm"
                placeholder="کد تخفیف"
              />
              <button
                onClick={CouponHandler}
                disabled={coupon.length < 4}
                className="bg-emerald-700 text-sm whitespace-nowrap text-white px-3 py-1.5 rounded disabled:bg-gray-400"
              >
                ثبت کد
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:items-center justify-between border border-gray-300 rounded shadow p-4">
            <div className="flex pb-2 md:pb-0 items-center gap-1 border-b border-b-gray-300 md:border-none">
              <BanknotesIcon className="w-6 h-6" />
              <p className="text-xs ">روش پرداخت </p>
            </div>
            <div className="flex justify-between md:gap-8">
              <div className="flex items-center gap-1 text-slate-600 p-3">
                <input
                  type="radio"
                  name="delivery"
                  id="post"
                  value="interneti"
                  checked={payment == "interneti"}
                  onChange={(event) => setPayment(event.target.value)}
                  className="appearance-none w-4 h-4 checked:w-3 checked:h-3 md:w-4 md:h-4 ml-2 border cursor-pointer border-gray-300 checked:ring-1 ring-offset-2 checked:ring-emerald-500 rounded-full bg-white checked:border-none outline-none checked:bg-emerald-500"
                />
                <p className="text-[10px] md:text-xs">پرداخت اینترنتی </p>
                <CreditCardIcon className="md:w-6 md:h-6 w-5 h-5" />
              </div>

              <div className="flex items-center gap-1 text-slate-600 p-3">
                <input
                  type="radio"
                  name="delivery"
                  id="post"
                  value="inPlace"
                  checked={payment == "inPlace"}
                  onChange={(event) => setPayment(event.target.value)}
                  className="appearance-none w-4 h-4 checked:w-3 checked:h-3 md:w-4 md:h-4 ml-2 border cursor-pointer border-gray-300 checked:ring-1 ring-offset-2 checked:ring-emerald-500 rounded-full bg-white checked:border-none outline-none checked:bg-emerald-500"
                />
                <p className="text-[10px] md:text-xs">پرداخت در محل</p>
                <CreditCardIcon className="md:w-6 md:h-6 w-5 h-5" />
              </div>
            </div>
          </div>
          {payment == "interneti" && (
            <div className="flex flex-col  gap-4 md:gap-0 md:items-start justify-between border border-gray-300 rounded shadow p-4">
              <div className="flex pb-2 md:pb-0 items-center gap-1 border-b border-b-gray-300 md:border-none">
                <CreditCardIcon className="w-6 h-6" />
                <p className="text-xs ">درگاه پرداخت </p>
              </div>
              <div className="flex items-center mx-auto w-3/4 md:w-1/2 gap-3 flex-1">
                <label
                  htmlFor="saman"
                  className="w-1/3 cursor-pointer hover:scale-105"
                >
                  <input
                    type="radio"
                    name="bank"
                    id="saman"
                    value="saman"
                    className="appearance-none peer/saman"
                  />
                  <div className="w-full rounded overflow-hidden grayscale peer-checked/saman:grayscale-0 peer-checked/saman:shadow-[0_0_5px_rgb(5,150,105)] border peer-checked/saman:border-emerald-600 border-gray-300">
                    <img
                      src="/images/Bank01.png"
                      alt="bank"
                      className="w-full aspect-square"
                    />
                  </div>
                </label>
                <label
                  htmlFor="mellat"
                  className="w-1/3 cursor-pointer hover:scale-105"
                >
                  <input
                    type="radio"
                    name="bank"
                    id="mellat"
                    value="mellat"
                    defaultChecked={true}
                    className="appearance-none peer/mellat"
                  />
                  <div className="w-full rounded overflow-hidden grayscale peer-checked/mellat:grayscale-0 peer-checked/mellat:shadow-[0_0_5px_rgb(5,150,105)] border peer-checked/mellat:border-emerald-600 border-gray-300">
                    <img
                      src="/images/Bank03.png"
                      alt="bank"
                      className="w-full aspect-square"
                    />
                  </div>
                </label>
                <label
                  htmlFor="parsian"
                  className="w-1/3 cursor-pointer hover:scale-105"
                >
                  <input
                    type="radio"
                    name="bank"
                    id="parsian"
                    value="parsian"
                    className="appearance-none peer/parsian"
                  />
                  <div className="w-full rounded overflow-hidden grayscale peer-checked/parsian:grayscale-0 peer-checked/parsian:shadow-[0_0_5px_rgb(5,150,105)] border peer-checked/parsian:border-emerald-600 border-gray-300">
                    <img
                      src="/images/Bank02.png"
                      alt="bank"
                      className="w-full aspect-square"
                    />
                  </div>
                </label>
              </div>
              <div className="flex flex-col mx-auto my-4 gap-1 ">
                <p className="text-xs text-slate-600 text-center">
                  پرداخت از طریق کلیه کارت‌های عضو شتاب امکان‌پذیر است.‌
                </p>
                <p className="text-[10px] text-slate-400 text-center">
                  (لطفا قبل از پرداخت فیلترشکن خود را خاموش کنید.)
                </p>
              </div>
            </div>
          )}
          {payment == "inPlace" && (
            <div className="flex flex-col md:flex-row gap-4 md:gap-4 md:items-start justify-between border border-gray-300 rounded shadow pl-2 p-4">
              <div className="flex pb-2 md:pb-0 items-center gap-1 border-b border-b-gray-300 md:border-none">
                <ShieldExclamationIcon className="w-6 h-6" />
                <p className="text-xs whitespace-nowrap">قابل توجه </p>
              </div>
              <p className="md:text-xs text-[10px] text-slate-500 leading-5 md:leading-6">
                هزینه سفارش شما در حین تحویل کالا دریافت خواهد شد. لطفا قبل از
                تحویل کالا کارت بانکی یا پول نقد همراه خود داشته باشید و از
                درخواست برای پرداخت در زمان بعدی یا نسیه خودداری فرمایید. با
                تشکر از همراهی شما.
              </p>
            </div>
          )}
        </div>

        <BuyDetail
          cart={ShppingCartInfo}
          setSteps={setSteps}
          payment
          setResultPayment={setResultPayment}
          dispatch={dispatch}
        />
      </div>
    </>
  );
};

export default Payment;
