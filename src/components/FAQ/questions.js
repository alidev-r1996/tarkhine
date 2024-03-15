import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Questions = ({menu}) => {
    const [Questions, setQuestions] = useState({first: false, second: false, third: false, fourth: false, fifth: false, sixth: false })
    return ( 
        <div className={`${menu == "questions"? "flex": "hidden"} flex-col border border-gray-300 rounded overflow-hidden md:m-8 m-4`}>
                <div className="flex flex-col border-b border-b-gray-300 ">
                    <div onClick={()=>setQuestions({...Questions,first:!Questions.first})} className={`${Questions.first? "bg-emerald-600 text-white font-bold":""} flex items-center justify-between p-4 transition-all duration-300 cursor-pointer text-xs md:text-base`}>
                        <p className="w-11/12 md:w-max">
                            ترخینه چه امکانات متفاوتی داره؟
                         </p>
                         <p className="w-1/12 md:w-5">
                        <ChevronDownIcon className={`${Questions.first? "rotate-180":""} w-full h-full stroke-2 transition-all duration-300`}/>

                         </p>
                    </div>
                    <p className={`${Questions.first? "bg-gray-100 block":"hidden"} transition-all duration-300 p-4 text-justify text-[10px] md:text-sm`}>
                    وبسایت سفارش غذای رستوران‌های زنجیره‌ای ترخینه با اتصال مستقیم به نرم افزار اتوماسیون شعبات رستوران، امکان اشتباهات هنگام ثبت سفارش آنلاین غذا و همچنین زمان مورد نیاز برای آماده سازی و تحویل آن را به حداقل ممکن می رسونه.
                    </p>
                </div>
                <div className="flex flex-col border-b border-b-gray-300 ">
                    <div onClick={()=>setQuestions({...Questions,second:!Questions.second})} className={`${Questions.second? "bg-emerald-600 text-white font-bold":""} flex items-center justify-between p-4 transition-all duration-300 cursor-pointer text-xs md:text-base`}>
                        <p className="w-11/12 md:w-max">
                        چطور می تونم در ترخینه حساب کاربری ایجاد کنم؟
                         </p>
                         <p className="w-1/12 md:w-5">
                        <ChevronDownIcon className={`${Questions.second? "rotate-180":""} w-full h-full stroke-2 transition-all duration-300`}/>
                         </p>
                    </div>
                    <p className={`${Questions.second? "bg-gray-100 block":"hidden"} transition-all duration-300 p-4 text-justify text-[10px] md:text-sm`}>
                    خیلی ساده، پس از انتخاب غذای مورد علاقه تان از منوی رستوران، هنگام ثبت سفارش با وارد کردن شماره تلفن همراه یک پیامک حاوی کد تایید برای شما ارسال و با وارد کردن کد تایید، ثبت نام شما تکمیل می شه. یا می تونید در صفحه اصلی سایت روی گزینه ورود کلیک کنید.
                    </p>
                </div>
                <div className="flex flex-col border-b border-b-gray-300 ">
                    <div onClick={()=>setQuestions({...Questions,third:!Questions.third})} className={`${Questions.third? "bg-emerald-600 text-white font-bold":""} flex items-center justify-between p-4 transition-all duration-300 cursor-pointer text-xs md:text-base`}>
                        <p className="w-11/12 md:w-max">
                        سابقه و لیست خریدهای قبلی ام رو کجا ببینم؟
                         </p>
                         <p className="w-1/12 md:w-5">
                        <ChevronDownIcon className={`${Questions.third? "rotate-180":""} w-full h-full stroke-2 transition-all duration-300`}/>
                         </p>
                    </div>
                    <p className={`${Questions.third? "bg-gray-100 block":"hidden"} transition-all duration-300 p-4 text-justify text-[10px] md:text-sm`}>
                    با ورود به حساب کاربری و کلیک روی گزینه سفارشات قبلی سابقه تمام خریدهای شما نمایش داده می شه.
                    </p>
                </div>
                <div className="flex flex-col border-b border-b-gray-300 ">
                    <div onClick={()=>setQuestions({...Questions,fourth:!Questions.fourth})} className={`${Questions.fourth? "bg-emerald-600 text-white font-bold":""} flex items-center justify-between p-4 transition-all duration-300 cursor-pointer text-xs md:text-base`}>
                        <p className="w-11/12 md:w-max">
                        چه راه هایی برای پرداخت دارم؟
                         </p>
                         <p className="w-1/12 md:w-5">
                        <ChevronDownIcon className={`${Questions.fourth? "rotate-180":""} w-full h-full stroke-2 transition-all duration-300`}/>
                         </p>
                    </div>
                   <p className={`${Questions.fourth? "bg-gray-100 block":"hidden"} transition-all duration-300 p-4 text-justify text-[10px] md:text-sm`}>
                    هنگام ثبت سفارش غذا می تونید روش پرداخت دلخواه خودتون رو انتخاب کنید. آنلاین و یا نقدی در هنگام تحویل سفارش بصورت حضوری.
                    </p>
                </div>
                <div className="flex flex-col border-b border-b-gray-300 ">
                    <div onClick={()=>setQuestions({...Questions,fifth:!Questions.fifth})} className={`${Questions.fifth? "bg-emerald-600 text-white font-bold":""} flex items-center justify-between p-4 transition-all duration-300 cursor-pointer text-xs md:text-base`}>
                        <p className="w-11/12 md:w-max">
                        آیا قیمت در منوی وبسایت ترخینه با قیمت منوی شعبات رستوران یکسان است؟
                         </p>
                        <p className="w-1/12 md:w-5">
                        <ChevronDownIcon className={`${Questions.fifth? "rotate-180":""} w-full h-full stroke-2 transition-all duration-300`}/>
                        </p>
                    </div>
                    <p className={`${Questions.fifth? "bg-gray-100 block":"hidden"} transition-all duration-300 p-4 text-justify text-[10px] md:text-sm`}>
                    بله. قیمت منوی وبسایت ترخینه دقیقا مطابق با قیمت منوی شعب رستوران  است و در صورت تغییر قیمت از طرف رستوران این تغییر در وبسایت ترخینه بلافاصله قابل مشاهده است.
                    </p>
                </div>
                <div className="flex flex-col border-b border-b-gray-300 ">
                    <div onClick={()=>setQuestions({...Questions,sixth:!Questions.sixth})} className={`${Questions.sixth? "bg-emerald-600 text-white font-bold":""} flex items-center justify-between p-4 transition-all duration-300 cursor-pointer text-xs md:text-base`}>
                        <p className="w-11/12 md:w-max">
                        چطور می تونم از اعتبار هدیه و تخفیف استفاده کنم؟
                         </p>
                         <p className="w-1/12 md:w-5">
                       <ChevronDownIcon className={`${Questions.sixth? "rotate-180":""} w-full h-full stroke-2 transition-all duration-300`}/>
                       </p>
                    </div>
                    <p className={`${Questions.sixth? "bg-gray-100 block":"hidden"} transition-all duration-300 p-4 text-justify text-[10px] md:text-sm`}>
                    برای استفاده از کد تخفیف میتونید به سادگی کد رو در سبد خرید، در قسمت مشخص شده وارد کنید. اعتبار هدیه هنگام انتخاب روش پرداخت برای شما نمایش داده میشه و در صورت تمایل میتونید ازش استفاده کنید.
                    </p>
                </div>
            </div>
     );
}
 
export default Questions;