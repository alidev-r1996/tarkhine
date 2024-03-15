import { LoginUser } from "@/services/requests/Users/UserServices";
import { ChevronRightIcon, ClockIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import OtpInput from 'react-otp-input';

const InputCodeOTP = ({ Login, setLogin }) => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(10);
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState("")
  let timerCounter = null;

  const phoneHandler = (event)=>{
    setPhone(event.target.value)
  }
  
    const showOTP = async()=>{
      const res = await LoginUser(phone)
      toast.success(res)
        setShow(true)
        let count = 30;
        timerCounter = setInterval(()=>{
            count -=1
            setTimer(count)
        },1000)
        setTimeout(()=>{
          clearInterval(timerCounter)
        },31000)
    }

    const closeModal = ()=>{
      setLogin(!Login)
      setShow(false)
      setOtp("")
      setPhone("")
    }

    const backModal = ()=>{
      setShow(!show)
      setOtp("")
    }

    const submitOTP = async(event)=>{
      event.preventDefault();
      toast.success("خوش آمدید")
      closeModal();
    }
  
  
  return (
    <>
    <div onClick={()=>setLogin(!Login)} className={`${Login? "block": "hidden"} w-screen h-screen fixed z-10 bg-slate-800/70 top-0 left-0`}></div>
    <div
    className={`${
      Login ? "flex" : "hidden"
    } md:absolute  fixed top-0 left-0 w-screen h-screen  flex-col z-[1000] md:box-center md:top-36 md:h-max md:w-96  bg-white shadow rounded-lg overflow-hidden`}
  >
    <div className="flex items-center justify-between p-4 mb-4 ">
      <p
        onClick={backModal}
        className={`${
          show ? "block" : "hidden"
        } group cursor-pointer hover:bg-emerald-600 p-1 rounded`}
      >
        <ChevronRightIcon
          className={` w-5 h-5 group-hover:stroke-white stroke-emerald-800`}
        />
      </p>
      <p className={`${show ? "hidden" : "block p-4"}`}></p>
      <img src="/images/Vector.png" alt="logo" className="mx-auto w-24 h-8" />
      <p
        onClick={closeModal}
        className="group hover:bg-rose-500 p-1 rounded"
      >
        <XMarkIcon className="w-5 h-5 group-hover:stroke-white cursor-pointer stroke-emerald-800" />
      </p>
    </div>
      {show ? (
        <div className={`${show ? "block" : "hidden"} flex flex-col`}>
          <h1 className="text-center">کد تأیید</h1>
        <div className="text-slate-600 text-xs text-center flex items-center mx-auto p-2">
          کد تأیید 5 رقمی به شماره
          <p className="mx-1 text-emerald-600">{phone}</p> ارسال شد.
        </div>
        <form dir="ltr" className="flex w-full items-center justify-between p-2 mx-auto gap-2">
        <OtpInput
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
            <div className={`${!timer==0? "block" : "hidden"} flex items-center gap-1`}>
              <ClockIcon className="w-3 h-3 stroke-slate-500" />
              <p className="text-[10px] text-slate-500">00:{timer}</p>
              <p className="text-[10px] text-slate-500"> تا دریافت کد جدید</p>
            </div>
            <button disabled={!timer==0} onClick={showOTP} className={` bg-emerald-600 cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-1 text-[10px] py-1 rounded`}>
              ارسال مجدد کد
            </button>
            <p  onClick={() => setShow(!show)} className={`${timer == 0? "block" : "hidden"}  hover:text-emerald-600 cursor-pointer text-[10px] text-slate-500`}>
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
      ) : (
        <div className={`${show ? "hidden" : "Block"} flex flex-col`}>
        <h1 className=" text-center">ورود/ثبت‌نام</h1>
        <p className="text-slate-600 text-xs text-center p-2">
          با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.
        </p>
        <input
          type="text"
          name="phone"
          id="phone"
          value={phone}
          maxLength={11}
          inputMode="numeric"
          onChange={phoneHandler}
          className=" p-1 outline-none border border-gray-300 mx-6 px-3 rounded m-2 text-sm"
          placeholder="شماره همراه"
        />
        <button
          onClick={showOTP}
          disabled={phone.length < 11}
          className="mx-6 p-1 bg-blue-500 text-white disabled:bg-gray-200 disabled:cursor-not-allowed rounded m-3 disabled:text-slate-400"
        >
          ادامه
        </button>
        <div className="mb-8 text-[10px] text-center whitespace-nowrap flex items-center mx-auto">
          ورود و عضویت در ترخینه به منزله قبول
          <p className="text-emerald-700 text-[10px] mx-0.5">
            
            قوانین و مقررات
          </p>
          است.
        </div>
      </div>
      )}
    </div>
    </>
    
  );
};

export default InputCodeOTP;

// .inputStyle{
//     border: 1px solid gray;
//     border-radius: 8px;
//     width: 40px !important; 
//     height: 40px !important;
//   }


// npm install --save react-otp-input
