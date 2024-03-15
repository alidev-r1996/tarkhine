"use client";

import {
  ClipboardDocumentListIcon,
  PresentationChartLineIcon,
  UserIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const index = () => {
  return (
    <div>
      <div className="w-full relative">
        <div className="w-full">
          <Image src={`/images/about-us.png`} alt="slider" fill={true} style={{objectFit:"contain"}} />
        </div>
        <h1 className="text-white font-bold text-sm md:text-lg text-center absolute box-center bottom-1/2">
          درباره ترخینه بیشتر بدانید!
        </h1>
      </div>
      <div className="p-4">
        <h1 className="text-sm md:text-base font-bold">درباره‌ِی ما</h1>
        <div className="flex flex-col md:flex-row md:gap-5 ">
          <p className="text-justify text-sm leading-8 md:w-2/3 w-full">
            رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی
            این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در
            تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولیت جلب
            رضایت مشتریان بوده است. دراین خصوص ترخینه همیشه در تلاش بوده تا در
            طی این زمان‌ها کیفیت غذاهای خودرا در بهترین حالت نگه داشته و حتی با
            نوسانات قیمت‌های مواد اولیه در بازار قیمت خود را ثابت نگه داشته است.
            ترخینه شعبات خود را افتتاح کرده که بسیار شیک و مدرن می‌باشند و برای
            برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با
            کیفیت بالا را دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه
            پله مدرن و آسانسور برای افراد کم‌توان و سالخورده آماده ارائه سرویس
            به شما عزیزان می‌باشند. چشم انداز: در آینده‌ای نزدیک تالار پذیرایی
            شعبات راه اندازی شده و آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما
            خواهند بود . به امید آن روز که همه ایرانیان سالم و سلامت باشند.
          </p>
          <img
            src="/images/about-us-section.png"
            alt=""
            className="md:w-1/3 w-full aspect-square"
          />
        </div>
      </div>
      <div className="flex justify-between bg-gray-200 mt-4 w-full ">
        <div className="flex flex-col items-center justify-center gap-2 flex-1 md:p-4 py-2 px-1 hover:bg-emerald-700 hover:text-white cursor-pointer transition-all duration-300 ">
          <UserIcon className="md:w-10 md:h-10 w-5 h-5" />
          <p className="text-[10px] md:text-base text-center md:whitespace-nowrap">
            پرسنل مجرب و حرفه‌ای
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 flex-1 md:p-4 py-2 px-1 hover:bg-emerald-700 hover:text-white cursor-pointer transition-all duration-300 border-x border-x-gray-300">
          <PresentationChartLineIcon className="md:w-10 md:h-10 w-5 h-5" />
          <p className="text-[10px] md:text-base text-center md:whitespace-nowrap">
            {" "}
            کیفیت بالای غذاها{" "}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 flex-1 md:p-4 py-2 px-1 hover:bg-emerald-700 hover:text-white cursor-pointer transition-all duration-300 border-x border-x-gray-300">
          <WifiIcon className="md:w-10 md:h-10 w-5 h-5" />
          <p className="text-[10px] md:text-base text-center md:whitespace-nowrap">
            محیطی دلنشین و آرام
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 flex-1 md:p-4 py-2 px-1 hover:bg-emerald-700 hover:text-white cursor-pointer transition-all duration-300 ">
          <ClipboardDocumentListIcon className="md:w-10 md:h-10 w-5 h-5" />
          <p className="text-[10px] md:text-base text-center md:whitespace-nowrap">
            منوی متنوع
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
