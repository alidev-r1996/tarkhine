"use client";


const ContactUs = () => {
  return (
      <div>
        <div className="w-full relative">
        <img src="/images/contact-us.png" alt="slider" className="w-full" />
        <h1 className="text-white font-bold text-sm md:text-lg text-center absolute box-center bottom-1/2">
          با ترخینه در تماس باشید.
        </h1>
      </div>

      <div className="w-full flex flex-col gap-4 p-4 md:p-8 my-4">
        <div className="flex flex-col md:flex-row group rounded-lg cursor-pointer shadow-[0_0_5px_rgba(0,0,0,0.2)] overflow-md:hidden">
          <img
            src="/images/branch1.jpg"
            alt="branch"
            className=" h-32 md:h-64 md:w-1/3 w-full"
          />
          <div className="flex flex-col md:w-2/3 w-full my-2 text-emerald-600">
            <h1 className="font-bold text-slate-800 md:text-lg text-center mt-3 px-4">
              شعبه اکباتان
            </h1>
            <p className="text-[11px] md:text-sm p-1 md:p-2 text-center">
              شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
            </p>
            <p className="text-[11px] md:text-sm p-1 md:p-2 text-center">
              {" "}
              شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱
            </p>
            <p className="text-[11px] md:text-sm p-1 md:p-2 text-center">
              {" "}
              شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱
            </p>
            <p className="text-[11px] md:text-sm p-1 md:p-2 text-center">
              {" "}
              ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل
            </p>
            <div className="md:group-hover:flex flex items-center gap-4 justify-center my-3 md:hidden px-4 md:p-0">
              <button className="border border-emerald-700 text-emerald-700 text-[11px] md:text-sm p-1 md:py-2 md:w-1/3 w-1/2 rounded hover:shadow-[0_0_3px_rgb(0,105,150)]">
                صفحه شعبه
              </button>
              <button className="bg-emerald-700 text-white text-[11px] md:text-sm p-1 md:py-2 md:w-1/3 w-1/2 rounded hover:shadow-[0_0_5px_rgb(0,105,150)]">
                دیدن در نقشه
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row group rounded-lg cursor-pointer shadow-[0_0_5px_rgba(0,0,0,0.2)] overflow-md:hidden">
          <img
            src="/images/branch2.jpg"
            alt="branch"
            className=" h-32 md:h-64 md:w-1/3 w-full"
          />
          <div className="flex flex-col md:w-2/3 w-full my-2 text-emerald-600">
            <h1 className="font-bold text-slate-800 md:text-lg text-center mt-3 px-4">
              شعبه چالوس
            </h1>
            <p className="text-[11px] md:text-sm p-1 md:p-2 text-center">
              چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی
            </p>
            <p className="text-[11px] md:text-sm p-1 md:p-2 text-center">
              {" "}
              شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱
            </p>
            <p className="text-[11px] md:text-sm p-1 md:p-2 text-center">
              {" "}
              شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱
            </p>
            <p className="text-[11px] md:text-sm p-1 md:p-2 text-center">
              {" "}
              ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل
            </p>
            <div className="md:group-hover:flex flex items-center gap-4 justify-center my-3 md:hidden px-4 md:p-0">
              <button className="border border-emerald-700 text-emerald-700 text-[11px] md:text-sm p-1 md:py-2 md:w-1/3 w-1/2 rounded hover:shadow-[0_0_3px_rgb(0,105,150)]">
                صفحه شعبه
              </button>
              <button className="bg-emerald-700 text-white text-[11px] md:text-sm p-1 md:py-2 md:w-1/3 w-1/2 rounded hover:shadow-[0_0_5px_rgb(0,105,150)]">
                دیدن در نقشه
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row group rounded-lg cursor-pointer shadow-[0_0_5px_rgba(0,0,0,0.2)] overflow-md:hidden">
          <img
            src="/images/branch3.jpg"
            alt="branch"
            className=" h-32 md:h-64 md:w-1/3 w-full"
          />
          <div className="flex flex-col md:w-2/3 w-full my-2 text-emerald-600">
            <h1 className="font-bold text-slate-800 md:text-lg text-center mt-3 px-4">
              شعبه اقدسیه
            </h1>
            <p className="text-[11px] md:text-sm p-1 md:p-2 text-center">
              خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸
            </p>
            <p className="text-[11px] md:text-sm p-1 md:p-2 text-center">
              {" "}
              شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱
            </p>
            <p className="text-[11px] md:text-sm p-1 md:p-2 text-center">
              {" "}
              شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱
            </p>
            <p className="text-[11px] md:text-sm p-1 md:p-2 text-center">
              {" "}
              ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل
            </p>
            <div className="md:group-hover:flex flex items-center gap-4 justify-center my-3 md:hidden px-4 md:p-0">
              <button className="border border-emerald-700 text-emerald-700 text-[11px] md:text-sm p-1 md:py-2 md:w-1/3 w-1/2 rounded hover:shadow-[0_0_3px_rgb(0,105,150)]">
                صفحه شعبه
              </button>
              <button className="bg-emerald-700 text-white text-[11px] md:text-sm p-1 md:py-2 md:w-1/3 w-1/2 rounded hover:shadow-[0_0_5px_rgb(0,105,150)]">
                دیدن در نقشه
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row group rounded-lg cursor-pointer shadow-[0_0_5px_rgba(0,0,0,0.2)] overflow-md:hidden">
          <img
            src="/images/branch4.jpg"
            alt="branch"
            className=" h-32 md:h-64 md:w-1/3 w-full"
          />
          <div className="flex flex-col md:w-2/3 w-full my-2 text-emerald-600">
            <h1 className="font-bold text-slate-800 md:text-lg text-center mt-3 px-4">
              شعبه ونک
            </h1>
            <p className="text-[11px] md:text-sm p-1 md:p-2 text-center">
              میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶
            </p>
            <p className="text-[11px] md:text-sm p-1 md:p-2 text-center">
              شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱{" "}
            </p>
            <p className="text-[11px] md:text-sm p-1 md:p-2 text-center">
              {" "}
              شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱
            </p>
            <p className="text-[11px] md:text-sm p-1 md:p-2 text-center">
              {" "}
              ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل
            </p>
            <div className="md:group-hover:flex flex items-center gap-4 justify-center my-3 md:hidden px-4 md:p-0">
              <button className="border border-emerald-700 text-emerald-700 text-[11px] md:text-sm p-1 md:py-2 md:w-1/3 w-1/2 rounded hover:shadow-[0_0_3px_rgb(0,105,150)]">
                صفحه شعبه
              </button>
              <button className="bg-emerald-700 text-white text-[11px] md:text-sm p-1 md:py-2 md:w-1/3 w-1/2 rounded hover:shadow-[0_0_5px_rgb(0,105,150)]">
                دیدن در نقشه
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
   
  );
};

export default ContactUs;
