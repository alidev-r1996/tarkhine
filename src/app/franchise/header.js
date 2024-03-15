import { BanknotesIcon, BookOpenIcon, BuildingLibraryIcon, ChartBarIcon, PhotoIcon } from "@heroicons/react/24/outline";


const FranchiseHeader = () => {
  return (
    <div>
      <div className="w-full relative">
        <img src="/images/franchise.png" alt="slider" className="w-full" />
        <h1 className="text-white whitespace-nowrap font-bold text-sm md:text-lg text-center absolute box-center bottom-1/2">
          به خانواده بزرگ ترخینه بپیوندید!
        </h1>
      </div>
      <div className="w-full p-4 px-8">
        <div className="border-b border-gray-300 pb-4">
          <div className="flex md:items-center items-start md:gap-10 mx-auto w-full md:w-4/5 md:px-12 my-4 ">
            <div className="flex flex-col items-center gap-2 w-1/4 text-emerald-600 ">
              <p className="p-2 rounded-full border-2 md:w-16 md:h-16 w-10 h-10 border-emerald-700">
                <BuildingLibraryIcon className="w-full h-full" />
              </p>
              <p className="md:text-xs text-[10px] text-center">
                بیش از 20 شعبه فعال در سراسر کشور
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-1/4 text-emerald-600">
              <p className="p-2 rounded-full border-2 md:w-16 md:h-16 w-10 h-10 border-emerald-700">
                <BanknotesIcon className="w-full h-full" />
              </p>
              <p className="md:text-xs text-[10px] text-center">
                تسهیلات راه‌اندازی رستوران و تجهیز آن
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-1/4 text-emerald-600">
              <p className="p-2 rounded-full border-2 md:w-16 md:h-16 w-10 h-10 border-emerald-700">
                <ChartBarIcon className="w-full h-full" />
              </p>
              <p className="md:text-xs text-[10px] text-center">
                طرح‌های تشویقی ارتقای فروش
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-1/4 text-emerald-600">
              <p className="p-2 rounded-full border-2 md:w-16 md:h-16 w-10 h-10 border-emerald-700">
                <BookOpenIcon className="w-full h-full" />
              </p>
              <p className="md:text-xs text-[10px] text-center">
                اعطای دستورالعمل پخت غذاها
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-4 px-8">
        <div className="border-b border-gray-300 pb-4 ">
          <h1 className="font-bold md:text-lg text-center">
            مزیت دریافت نمایندگی
          </h1>
          <div className="flex md:flex-row flex-col gap-3 md:gap-8 mx-auto md:items-center md:justify-center my-4">
            <div className="flex flex-col gap-3">
              <p className="franchise-prose">
                استفاده از برند شناخته شده ترخینه
              </p>
              <p className="franchise-prose">
                به حداقل رساندن ریسک سرمایه گذاری
              </p>
              <p className="franchise-prose">تسریع روند بازگشت سرمایه</p>
              <p className="franchise-prose">
                مشاوره های تخصصی جهت مدیریت رستوران
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="franchise-prose">
                مشاوره در امور حقوقی، مالی و مالیاتی
              </p>
              <p className="franchise-prose">
                پشتیبانی بازاریابی و منابع انسانی
              </p>
              <p className="franchise-prose">
                دریافت مشاوره جهت تامین مواد اولیه و تجهیزات
              </p>
              <p className="franchise-prose">طرح های تشویقی برای ارتقا فروش</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranchiseHeader;
