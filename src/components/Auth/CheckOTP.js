import { LoginUser } from "@/services/requests/Users/UserServices";
import {ClockIcon} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";


export const CheckOTP = ({ phone, onBack, onClose }) => {
  const [timer, setTimer] = useState(30);
  const [otp, setOtp] = useState("");
  const intervalRef = useRef();

  const resendOTP = () => {
    setTimer(30);
    toast.success("کد اعتبارسنجی مجددا ارسال شد ");
  };

  const submitOTP = async (event) => {
    event.preventDefault();
    await LoginUser(phone);
    toast.success("خوش آمدید");
    onClose();
  };

  useEffect(() => {
    if (timer > 0) {
      intervalRef.current = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, [1000]);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [timer]);

  return (
    <div className={`flex flex-col`}>
      <h1 className="text-center">کد تأیید</h1>
      <div className="text-slate-600 text-xs text-center flex items-center mx-auto p-2">
        کد تأیید 5 رقمی به شماره
        <p className="mx-1 text-emerald-600">{phone}</p> ارسال شد.
      </div>
      <form
        dir="ltr"
        className="flex w-full items-center justify-between p-2 mx-auto gap-2"
      >
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={5}
          renderSeparator={<span> </span>}
          renderInput={(props) => (
            <input
              {...props}
              className="border border-gray-200 rounded mx-2 inputStyle outline-none"
            />
          )}
        />
      </form>
      <div className="flex w-full items-center justify-between px-4 mx-auto ">
        <div
          className={`${
            !timer == 0 ? "block" : "hidden"
          } flex items-center gap-1`}
        >
          <ClockIcon className="w-3 h-3 stroke-slate-500" />
          <p className="text-[10px] text-slate-500">00:{timer}</p>
          <p className="text-[10px] text-slate-500"> تا دریافت کد جدید</p>
        </div>
        <button
          disabled={!timer == 0}
          onClick={resendOTP}
          className={` bg-emerald-600 cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-1 text-[10px] py-1 rounded`}
        >
          ارسال مجدد کد
        </button>
        <p
          onClick={onBack}
          className={`${
            timer == 0 ? "block" : "hidden"
          }  hover:text-emerald-600 cursor-pointer text-[10px] text-slate-500`}
        >
          ویرایش شماره
        </p>
      </div>

      <div className="flex justify-between w-full px-4  items-center mx-auto">
        <button
          type="submit"
          onClick={submitOTP}
          disabled={otp.length != 5}
          className="bg-blue-500 w-full  mb-6 mx-auto my-4 mt-6 text-white px-10 py-1 rounded disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400"
        >
          ثبت کد
        </button>
      </div>
    </div>
  );
};

export default CheckOTP;