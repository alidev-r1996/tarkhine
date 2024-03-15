import { TruckIcon, CalendarDaysIcon, MapPinIcon, ClockIcon,CheckCircleIcon, CubeIcon, CreditCardIcon } from "@heroicons/react/24/outline";

const Branches = ({current, setClearOrders}) => {
    return ( 
        <div className="flex flex-col gap-2 border border-gray-300 rounded my-4 p-3">
        <div className="flex items-center justify-between">
            <h1 className="text-sm font-bold">شعبه اقدسیه</h1>
            <div className="flex items-center gap-2">
                <p className="rounded text-xs p-1 bg-slate-300 shadow">ارسال توسط پیک</p>
                <p className="rounded text-xs p-1 bg-orange-100 text-orange-500 shadow">جاری </p>
            </div>
        </div>
        <div className="flex items-center justify-between text-slate-500 text-[10px] md:text-xs">
            <div className="flex items-center gap-2 ">
                <div className="flex items-center gap-0.5">
                    <CalendarDaysIcon className="md:w-5 md:h-5 w-4 h-4"/>
                    <p>شنبه ۸ مرداد، ساعت ۱۸:۵۳</p>
                </div>
                <p className="hidden md:block">مبلغ:‌‌228.500</p>
                <p className="hidden md:block">تخفیف: 28.500</p>
            </div>
            <div className="flex items-center gap-0.5">
                    <ClockIcon className="md:w-5 md:h-5 w-4 h-4"/>
                    <p>تحویل تا 25:33</p>
            </div>
        </div>
        <div className="flex items-center text-slate-500 text-[10px] md:text-xs gap-0.5">
            <MapPinIcon className="md:w-5 md:h-5 w-4 h-4"/>
            <p>اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰</p>
        </div>
        <div className=" md:hidden flex items-center text-slate-500 text-[10px] md:text-xs gap-0.5">
            <CreditCardIcon className="md:w-5 md:h-5 w-4 h-4"/>
            <p>مبلغ:‌‌228.500</p>
            <p>تخفیف: 28.500</p>
        </div>

        <div className={`${current?"flex":"hidden"}  items-center justify-between w-full mx-auto p-4 gap-1`}>
            <div className={`${true? "text-emerald-700 font-bold": "text-gray-300"} flex text-xs items-center gap-1`}>
                <CubeIcon className={`${true? "w-6 h-6": ""} w-5 h-5`} />
                <p className="hidden md:block">در حال آماده سازی </p>
            </div>
            <p className={`${false? "border-emerald-700": "border-gray-300"} flex-1 h-1 border-b-2 border-dotted`}>
            
            </p>
            <div className={`${false? "text-emerald-700 font-bold": "text-gray-300"} flex text-xs items-center gap-1`}>
                <TruckIcon className={`${true? "w-6 h-6": ""} w-5 h-5`} />
                <p className="hidden md:block">ارسال توسط پیک  </p>
            </div>
            <p className={`${false? "border-emerald-700": "border-gray-300"} flex-1 h-1 border-b-2 border-dotted`}>
            
            </p>
            <div className={`${false? "text-emerald-700 font-bold": "text-gray-300"} flex text-xs items-center gap-1`}>
                <CheckCircleIcon className={`${true? "w-6 h-6": ""} w-5 h-5`} />
                <p className="hidden md:block">تحویل سفارش </p>
            </div>
        </div>
        <div className="w-full flex items-center gap-2 overflow-x-auto p-2 md:hideScroll">
            {[1,2,3,4,5,6].map((item)=>{
                return <div key={item} className="flex flex-col items-center min-w-max justify-center bg-white rounded overflow-hidden shadow">
                <img src="/images/slide1.jpg" alt="" className="aspect-video w-24 md:w-28" />
                <div className="flex flex-col gap-2 p-1">
                    <h1 className="font-bold text-xs">کوفته برنجی</h1>
                    <p className="text-[10px]">225.000 تومان</p>
                </div>
            </div>
            })}
        </div>
        <button onClick={current? ()=>setClearOrders((prev)=>!prev):()=>console.log("again orders")} className={`${current? "border-rose-500 text-rose-500 hover:bg-rose-500 hover:shadow-[0_0_5px_rgba(244,63,94,0.6)]":"border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:shadow-[0_0_5px_rgba(16,185,129,0.6)]"} border text-xs md:text-sm  hover:text-white transition-all duration-300 rounded  px-4 py-1 w-max block mr-auto`}>{current? "لغو سفارش":"سفارش مجدد"}</button>
      </div>
     );
}
 
export default Branches;