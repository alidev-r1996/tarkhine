import { FaInstagram, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { IconName } from "react-icons/ci";
const Footer = () => {
    return ( 
        <div className="Footer-cover p-4 flex items-start py-8 justify-between  relative text-white ">
            <div className="absolute top-0 left-0 bg-slate-900/70 w-full h-full"></div>
            <div className="flex flex-col  z-50 gap-3">
                <h1 className="font-bold md:text-lg text-white mb-3">دسترسی آسان</h1>
                <p className="text-sm">پرسش‌های متداول</p>
                <p className="text-sm">قوانین ترخینه</p>
                <p className="text-sm">حریم خصوصی</p>
                <div className="flex items-center gap-3 mt-2">
                    <FaTwitter className="w-5 h-5 cursor-pointer" />
                    <FaInstagram className="w-5 h-5 cursor-pointer" />
                    <FaTelegramPlane className="w-5 h-5 cursor-pointer" />
                </div>
            </div>
            <div className="flex flex-col  z-50 gap-3">
                <h1 className="font-bold md:text-lg text-white mb-3">شعبه‌های ترخینه </h1>
                <p className="text-sm">شعبه اکباتان </p>
                <p className="text-sm">شعبه چالوس </p>
                <p className="text-sm">شعبه اقدسیه </p>
                <p className="text-sm">شعبه ونک </p>
            </div>
            <form className="hidden md:block z-50 text-white">
                <h1 className="font-bold text-lg mb-3">پیام به ترخینه</h1>
                <div className="flex gap-3 items-center">
                    <div className="flex flex-col gap-2 h-32">
                        <input type="text" name="name" id="name" className="p-1 px-3 bg-transparent flex-1 outline-none rounded border border-gray-400 placeholder:text-white text-xs" placeholder="نام و نام خانوادگی" />
                        <input type="text" name="phone" id="phone" className="p-1 px-3 bg-transparent flex-1 outline-none rounded border border-gray-400 placeholder:text-white text-xs" placeholder="شماره تلفن" />
                        <input type="text" name="email" id="email" className="p-1 px-3 bg-transparent flex-1 outline-none rounded border border-gray-400 placeholder:text-white text-xs" placeholder="ایمیل(اختیاری)" />
                    </div>
                    <textarea name="comment" id="comment" className="outline-none flex-1 h-32 bg-transparent p-1 px-3 rounded border border-gray-400 text-xs placeholder:text-white" placeholder="پیام شما"></textarea>
                </div>
                <button className="border border-gray-400 rounded px-8 py-2 my-3 text-sm block mr-auto">ارسال پیام</button>
            </form>

        </div>
     );
}
 
export default Footer;