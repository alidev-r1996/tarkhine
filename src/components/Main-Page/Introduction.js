import {
  ChevronLeftIcon,
  UserIcon,
  PresentationChartLineIcon,
  WifiIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const options = [
  {
    id: 1,
    title: "پرسنل مجرب و حرفه‌ای",
    icon: <UserIcon className="w-10 h-10 stroke-white" />,
  },
  {
    id: 2,
    title: "کیفیت بالای غذاها",
    icon: <PresentationChartLineIcon className="w-10 h-10 stroke-white" />,
  },
  {
    id: 3,
    title: "محیطی دلنشین و آرام",
    icon: <WifiIcon className="w-10 h-10 stroke-white" />,
  },
  {
    id: 4,
    title: "منوی متنوع",
    icon: <ClipboardDocumentListIcon className="w-10 h-10 stroke-white" />,
  },
];

const Introduction = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full bg-red-100 text-cover p-8 text-white">
      <div className="flex flex-col gap-6 md:w-1/2">
        <h1 className="font-extrabold text-lg">رستوران‌های زنجیره‌ای ترخینه</h1>
        <p className="md:leading-10 leading-8 text-justify text-sm md:text-base">
          مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست
          که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
          رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
          پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان
          شما عزیزان ارائه دهیم.
        </p>
        <Link href='/FAQ' className="flex hover:bg-white hover:text-slate-800 transition-all duration-300 items-center gap-2 rounded-lg border border-white px-6 py-2 w-max mr-auto">
          <p>اطلاعات بیشتر</p>
          <ChevronLeftIcon className="w-4 h-4 stroke-white" />
        </Link>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-8 md:gap-6 mt-4 md:w-1/2">
        {options.map((item, index) => {
          return (
            <div key={item.id} className="flex flex-col items-center gap-2">
              {item.icon}
              <p className="text-sm md:text-base whitespace-nowrap">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Introduction;
