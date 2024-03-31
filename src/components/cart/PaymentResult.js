import { Clear } from "@/redux/features/cart/cartSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const PaymentResult = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(Clear());
    };
  }, []);

  return (
    <>
      <div className="h-96 bg-white p-4 celebration-cover flex flex-col items-center justify-center gap-8">
        <img
          src="/images/success.png"
          alt="success"
          className="w-24 aspect-square"
        />
        <h1 className="font-bold text-center text-emerald-700 text-xl md:text-2xl drop-shadow-[0_0_15px_rgb(4,120,87,0.5)]">
          پرداخت شما با موفقیت انجام شد!
        </h1>
        <div className="flex items-center gap-4 text-emerald-600 text-sm">
          <p>کد رهگیری سفارش شما:</p>
          <p> ۲۱۵۴۹۰۱۹</p>
        </div>
        <div className="flex items-center gap-6 w-full md:w-max">
          <Link
            href="/"
            className="bg-white border md:w-36 w-1/2 md:text-sm text-xs border-emerald-600 py-2 rounded shadow text-emerald-700 transition-all hover:shadow-[0_0_5px_rgb(5,150,105)] duration-300 hover:text-emerald-900 hover:bg-emerald-50"
          >
            بازگشت به صفحه اصلی
          </Link>
          <button className="bg-emerald-700 text-white md:w-36 w-1/2 md:text-sm text-xs py-2 rounded shadow hover:shadow-[0_0_10px_rgb(5,150,105)]">
            پیگیری سفارش
          </button>
        </div>
      </div>
      {/* <div className="h-96 bg-white p-4  flex flex-col items-center justify-center gap-8">
                <img src="/images/failure.png" alt="success" className="w-24 aspect-square" />
                <h1 className="font-bold text-center text-red-700 text-xl md:text-2xl drop-shadow-[0_0_15px_rgb(4,120,87,0.5)]">
                پرداخت شما ناموفق بود!
                </h1>
                <div className="flex items-center gap-4 text-red-600 text-sm">
                    <p >کد رهگیری سفارش شما:</p>
                    <p >  ۲۱۵۴۹۰۱۹</p>
                </div>
                <div className="flex items-center gap-6 w-full md:w-max">
                    <button className="bg-white md:w-36 w-1/2 md:text-sm text-xs  py-2 rounded  text-emerald-700 transition-all  duration-300 hover:text-emerald-900">
                        بازگشت به صفحه اصلی
                    </button>
                    <button className="bg-white border md:w-36 w-1/2 md:text-sm text-xs border-emerald-600 py-2 rounded shadow text-emerald-700 transition-all hover:shadow-[0_0_5px_rgb(5,150,105)] duration-300 hover:text-emerald-900 hover:bg-emerald-50">
                        پرداخت مجدد
                    </button>
                </div>
           </div>   */}
    </>
  );
};

export default PaymentResult;
