import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";


const Rules = ({menu}) => {
    const [Rules, setRules] = useState({first: false, second: false, third: false, fourth: false, fifth: false, sixth: false, seventh: false, eighth: false })
    return ( 
        <div className={`${menu == "rules"? "flex": "hidden"} flex-col border border-gray-300 rounded overflow-hidden md:m-8 m-4`}>
                <div className="flex flex-col border-b border-b-gray-300 ">
                    <div onClick={()=>setRules({...Rules,first:!Rules.first})} className={`${Rules.first? "bg-emerald-600 text-white font-bold":""} flex items-center justify-between p-4 transition-all duration-300 cursor-pointer text-xs md:text-base`}>
                        <p className="w-11/12 md:w-max">
                        حداقل سفارش
                         </p>
                         <p className="w-1/12 md:w-5">
                        <ChevronDownIcon className={`${Rules.first? "rotate-180":""} w-full h-full stroke-2 transition-all duration-300`}/>

                         </p>
                    </div>
                    <p className={`${Rules.first? "bg-gray-100 block":"hidden"} transition-all duration-300 p-4 text-justify text-[10px] md:text-sm`}>
                    حداقل سفارشات در رستوران‌های ترخینه، مبلغ ۵۰.۰۰۰ تومان است. برای ثبت، پردازش و ارسال سفارشات، باید حداقل، این مبلغ سفارش داده شود در غیر اینصورت سفارشات، ثبت نخواهد شد.
                    </p>
                </div>
                <div className="flex flex-col border-b border-b-gray-300 ">
                    <div onClick={()=>setRules({...Rules,second:!Rules.second})} className={`${Rules.second? "bg-emerald-600 text-white font-bold":""} flex items-center justify-between p-4 transition-all duration-300 cursor-pointer text-xs md:text-base`}>
                        <p className="w-11/12 md:w-max">
                        فاصله تحویل
                         </p>
                         <p className="w-1/12 md:w-5">
                        <ChevronDownIcon className={`${Rules.second? "rotate-180":""} w-full h-full stroke-2 transition-all duration-300`}/>

                         </p>
                    </div>
                    <p className={`${Rules.second? "bg-gray-100 block":"hidden"} transition-all duration-300 p-4 text-justify text-[10px] md:text-sm`}>
                    ترخینه در ارسال سفارشات به نقاط دور محدودیت دارد و حداکثر فاصله از رستوران‌های زنجیره‌ای ترخینه برای ارسال کالا، ۶ کیلومتر است. لطفا قبل از ثبت سفارش، نزدیک‌ترین شعبه به محل ارسال را انتخاب کنید و از رعایت کردن حداکثر فاصله برای ارسال سفارشات اطمینان حاصل فرمایید.
                    </p>
                </div>
                <div className="flex flex-col border-b border-b-gray-300 ">
                    <div onClick={()=>setRules({...Rules,third:!Rules.third})} className={`${Rules.third? "bg-emerald-600 text-white font-bold":""} flex items-center justify-between p-4 transition-all duration-300 cursor-pointer text-xs md:text-base`}>
                        <p className="w-11/12 md:w-max">
                        زمان تحویل
                         </p>
                         <p className="w-1/12 md:w-5">
                        <ChevronDownIcon className={`${Rules.third? "rotate-180":""} w-full h-full stroke-2 transition-all duration-300`}/>

                         </p>
                    </div>
                    <p className={`${Rules.third? "bg-gray-100 block":"hidden"} transition-all duration-300 p-4 text-justify text-[10px] md:text-sm`}>
                    جدول زمانی تخمینی تحویل در زمان ثبت سفارش به اطلاع شما خواهد رسید. این ممکن است تحت تأثیر عوامل زیادی مانند ترافیک، آب و هوا، دوره‌های شلوغ رستوران و غیره باشد، بنابراین در صورت تأخیر لطفا صبور باشید.
                    </p>
                </div>
                <div className="flex flex-col border-b border-b-gray-300 ">
                    <div onClick={()=>setRules({...Rules,fourth:!Rules.fourth})} className={`${Rules.fourth? "bg-emerald-600 text-white font-bold":""} flex items-center justify-between p-4 transition-all duration-300 cursor-pointer text-xs md:text-base`}>
                        <p className="w-11/12 md:w-max">
                        گزینه‌های پرداخت
                         </p>
                         <p className="w-1/12 md:w-5">
                        <ChevronDownIcon className={`${Rules.fourth? "rotate-180":""} w-full h-full stroke-2 transition-all duration-300`}/>

                         </p>
                    </div>
                    <p className={`${Rules.fourth? "bg-gray-100 block":"hidden"} transition-all duration-300 p-4 text-justify text-[10px] md:text-sm`}>
                    ما گزینه‌های پرداخت مختلفی را می پذیریم، از جمله پرداخت اینترنتی، کارت‌های اعتباری یا پول نقد. لطفاً قبل از تکمیل سفارش، روش پرداختی را که ترجیح می دهید، تأیید کنید.
                    </p>
                </div>
                <div className="flex flex-col border-b border-b-gray-300 ">
                    <div onClick={()=>setRules({...Rules,fifth:!Rules.fifth})} className={`${Rules.fifth? "bg-emerald-600 text-white font-bold":""} flex items-center justify-between p-4 transition-all duration-300 cursor-pointer text-xs md:text-base`}>
                        <p className="w-11/12 md:w-max">
                        دقت سفارش
                         </p>
                         <p className="w-1/12 md:w-5">
                        <ChevronDownIcon className={`${Rules.fifth? "rotate-180":""} w-full h-full stroke-2 transition-all duration-300`}/>

                         </p>
                    </div>
                    <p className={`${Rules.fifth? "bg-gray-100 block":"hidden"} transition-all duration-300 p-4 text-justify text-[10px] md:text-sm`}>
                    لطفاً قبل از ارسال، از دقیق بودن تمام جزئیات سفارش خود، از جمله موارد منو، دستورالعمل‌های خاص و  جزئیات سفارش خود اطمینان حاصل کنید تا اختلالی در فرایند پردازش و تحویل سفارشات شما ایجاد نشود و سفارشات شما در سریع‌ترین زمان ممکن به دست‌تان برسد.
                    </p>
                </div>
                <div className="flex flex-col border-b border-b-gray-300 ">
                    <div onClick={()=>setRules({...Rules,sixth:!Rules.sixth})} className={`${Rules.sixth? "bg-emerald-600 text-white font-bold":""} flex items-center justify-between p-4 transition-all duration-300 cursor-pointer text-xs md:text-base`}>
                        <p className="w-11/12 md:w-max">
                        شرایط لغو سفارش
                         </p>
                         <p className="w-1/12 md:w-5">
                        <ChevronDownIcon className={`${Rules.sixth? "rotate-180":""} w-full h-full stroke-2 transition-all duration-300`}/>

                         </p>
                    </div>
                    <p className={`${Rules.sixth? "bg-gray-100 block":"hidden"} transition-all duration-300 p-4 text-justify text-[10px] md:text-sm`}>
                    شما می‌توانید با تماس مستقیم با هر شعبه از رستوران‌های زنجیره‌ای ترخینه، سفارش خود را لغو کنید. لطفا توجه داشته باشید که ممکن است محدودیت زمانی برای لغو وجود داشته باشد، زیرا ممکن است غذا از قبل آماده شده باشد و در اینصورت متاسفانه امکان لغو سفارش وجود ندارد.
                    </p>
                </div>
                <div className="flex flex-col border-b border-b-gray-300 ">
                    <div onClick={()=>setRules({...Rules,seventh:!Rules.seventh})} className={`${Rules.seventh? "bg-emerald-600 text-white font-bold":""} flex items-center justify-between p-4 transition-all duration-300 cursor-pointer text-xs md:text-base`}>
                        <p className="w-11/12 md:w-max">
                        شرایط بازگشت سفارش
                         </p>
                         <p className="w-1/12 md:w-5">
                        <ChevronDownIcon className={`${Rules.seventh? "rotate-180":""} w-full h-full stroke-2 transition-all duration-300`}/>

                         </p>
                    </div>
                    <p className={`${Rules.seventh? "bg-gray-100 block":"hidden"} transition-all duration-300 p-4 text-justify text-[10px] md:text-sm`}>
                    اگر سفارش شما انتظارات شما را برآورده نمی کند، لطفاً بلافاصله از طریق تماس تلفنی با ما تماس بگیرید؛ ما در اسرع وقت به دنبال حل مشکل شما  خواهیم بود.
                    </p>
                </div>
                <div className="flex flex-col border-b border-b-gray-300 ">
                    <div onClick={()=>setRules({...Rules,eighth:!Rules.eighth})} className={`${Rules.eighth? "bg-emerald-600 text-white font-bold":""} flex items-center justify-between p-4 transition-all duration-300 cursor-pointer text-xs md:text-base`}>
                        <p className="w-11/12 md:w-max">
                        تخفیفات
                         </p>
                         <p className="w-1/12 md:w-5">
                        <ChevronDownIcon className={`${Rules.eighth? "rotate-180":""} w-full h-full stroke-2 transition-all duration-300`}/>

                         </p>
                    </div>
                    <p className={`${Rules.eighth? "bg-gray-100 block":"hidden"} transition-all duration-300 p-4 text-justify text-[10px] md:text-sm`}>
                    هر‌گونه تخفیف یا برنامه‌های وفاداری ممکن است قوانین و شرایط خاصی داشته باشد که به وضوح در وب سایت مشخص می‌شود.
                    </p>
                </div>
            </div>
     );
}
 
export default Rules;