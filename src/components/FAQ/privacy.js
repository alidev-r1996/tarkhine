import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";


const Privacy = ({menu}) => {
    const [Privacy, setPrivacy] = useState({first: false, second: false, third: false, fourth: false, fifth: false, sixth: false, seventh: false })
    return ( 
        <div className={`${menu == "privacy"? "flex": "hidden"} flex-col border border-gray-300 rounded overflow-hidden md:m-8 m-4`}>
                <div className="flex flex-col border-b border-b-gray-300 ">
                    <div onClick={()=>setPrivacy({...Privacy,first:!Privacy.first})} className={`${Privacy.first? "bg-emerald-600 text-white font-bold":""} flex items-center justify-between p-4 transition-all duration-300 cursor-pointer text-xs md:text-base`}>
                        <p className="w-11/12 md:w-max">
                        حریم خصوصی
                         </p>
                         <p className="w-1/12 md:w-5">
                        <ChevronDownIcon className={`${Privacy.first? "rotate-180":""} w-full h-full stroke-2 transition-all duration-300`}/>

                         </p>
                    </div>
                    <p className={`${Privacy.first? "bg-gray-100 block":"hidden"} transition-all duration-300 p-4 text-justify text-[10px] md:text-sm`}>
                    ترخینه متعهد می‌شود حریم خصوصی شما را حفظ کند و به آن احترام بگذارد. بخش «حریم خصوصی» روش‌های استفاده از اطلاعات شخصی کاربران در این وب سایت را شرح می‌دهد. اگر برای سفارش غذای خوب از خدمات ما استفاده می‌کنید، سیاست‌های حفظ حریم خصوصی وب‌سایت ترخینه، در مورد شما صدق می‌کند.
پردازش و ارسال سفارش‌ها نیازمند اطلاعات دقیق کاربران است؛ برای این‌که بتوانیم خدمات مطلوب‌تری به شما ارائه دهیم، ممکن است به هنگام خرید، ثبت نظر و استفاده از برخی امکانات سایت، به اطلاعات شما نیاز داشته باشیم؛ هم‌چنین ترخینه برای ارتباط با مشتریان، بهبود رابط کاربری، بهینه‌سازی محتوا و تحقیقات بازاریابی، بایستی از اطلاعات کاربران خود استفاده کند. این در حالی است که اطلاع‌رسانی خدمات جدید و سرویس‌های ویژه یا پروموشن‌ها، اخبار و رویدادها با ارسال ایمیل یا پیامک به کاربران انجام می‌شود.
                    </p>
                </div>
                <div className="flex flex-col border-b border-b-gray-300 ">
                    <div onClick={()=>setPrivacy({...Privacy,second:!Privacy.second})} className={`${Privacy.second? "bg-emerald-600 text-white font-bold":""} flex items-center justify-between p-4 transition-all duration-300 cursor-pointer text-xs md:text-base`}>
                        <p className="w-11/12 md:w-max">
                        چه اطلاعاتی را گردآوری می‌کنیم؟
                         </p>
                         <p className="w-1/12 md:w-5">
                        <ChevronDownIcon className={`${Privacy.second? "rotate-180":""} w-full h-full stroke-2 transition-all duration-300`}/>

                         </p>
                    </div>
                    <div className={`${Privacy.second? "bg-gray-100 block":"hidden"} transition-all duration-300 p-4 flex flex-col text-justify text-[10px] md:text-sm`}>
                        <p>اطلاعاتی که درباره‌ی شما گردآوری و نگه‌داری می‌کنیم، ممکن است شامل موارد زیر باشد:</p>
                        <ul className="my-3 pr-6 flex flex-col gap-2 text-emerald-600">
                            <li className="list-disc">نام و نام خانوادگی شما</li>
                            <li className="list-disc">شماره تلفن همراه</li>
                            <li className="list-disc">تاریخ تولد</li>
                            <li className="list-disc">نشانی‌های مورد نظر برای تحویل سفارش‌ها</li>
                        </ul>
                        <p>اطلاعات دیگری که شما برای ما نوشته‌اید یا از راه‌های دیگر در اختیار ما قرار داده‌اید.</p>
                    </div>
                </div>
                <div className="flex flex-col border-b border-b-gray-300 ">
                    <div onClick={()=>setPrivacy({...Privacy,third:!Privacy.third})} className={`${Privacy.third? "bg-emerald-600 text-white font-bold":""} flex items-center justify-between p-4 transition-all duration-300 cursor-pointer text-xs md:text-base`}>
                        <p className="w-11/12 md:w-max">
                        چگونه اطلاعات شما را گردآوری می‌کنیم؟
                         </p>
                         <p className="w-1/12 md:w-5">
                        <ChevronDownIcon className={`${Privacy.third? "rotate-180":""} w-full h-full stroke-2 transition-all duration-300`}/>

                         </p>
                    </div>
                    <div className={`${Privacy.third? "bg-gray-100 block":"hidden"} flex flex-col gap-2 transition-all duration-300 p-4 text-justify text-[10px] md:text-sm`}>
                        <p>از شما تقاضا خواهیم کرد اطلاعات خود را در اختیار ما قرار دهید؛ هنگامی‌که:به‌شکل کاربر مهمان غذا سفارش می‌دهید.</p>
                        <p>در وب‌سایت ترخینه یک حساب کاربری ایجاد می‌کنید.</p>
                        <p>در قسمت اعطای نمایندگی، فرم پر می‌کنید.</p>
                    </div>
                </div>
                <div className="flex flex-col border-b border-b-gray-300 ">
                    <div onClick={()=>setPrivacy({...Privacy,fourth:!Privacy.fourth})} className={`${Privacy.fourth? "bg-emerald-600 text-white font-bold":""} flex items-center justify-between p-4 transition-all duration-300 cursor-pointer text-xs md:text-base`}>
                        <p className="w-11/12 md:w-max">
                        چرا به شماره تلفن شما نیاز داریم؟
                         </p>
                         <p className="w-1/12 md:w-5">
                        <ChevronDownIcon className={`${Privacy.fourth? "rotate-180":""} w-full h-full stroke-2 transition-all duration-300`}/>

                         </p>
                    </div>
                    <p className={`${Privacy.fourth? "bg-gray-100 block":"hidden"} transition-all duration-300 p-4 text-justify text-[10px] md:text-sm`}>
                    برای ثبت نام در وب‌سایت ترخینه باید نخست شماره موبایل خود را وارد کنید تا کد فعال‌سازی برای شما ارسال شود.
شماره تلفن همراه شما نقش نام کاربری را ایفا می‌کند.
ممکن است به هر دلیل رمز عبور خود را فراموش کنید؛ در این موقعیت، می‌توانید از تلفن همراه خود کد فعال‌سازی مجدد دریافت کنید.
ممکن است برای آگاه کردن شما از اخبار و تغییرات جدید از شماره همراهتان استفاده کنیم؛ مانند، اطلاع‌رسانی از تغییر شیوه‌ی دسترسی شما به خدمات آنلاین ما، یا خدمات جدید و پیشنهادهای خاص.
                    </p>
                </div>
                <div className="flex flex-col border-b border-b-gray-300 ">
                    <div onClick={()=>setPrivacy({...Privacy,fifth:!Privacy.fifth})} className={`${Privacy.fifth? "bg-emerald-600 text-white font-bold":""} flex items-center justify-between p-4 transition-all duration-300 cursor-pointer text-xs md:text-base`}>
                        <p className="w-11/12 md:w-max">
                        فعالیت‌های مرورگر شما در هنگام بازدید از وب‌سایت ترخینه
                         </p>
                         <p className="w-1/12 md:w-5">
                        <ChevronDownIcon className={`${Privacy.fifth? "rotate-180":""} w-full h-full stroke-2 transition-all duration-300`}/>

                         </p>
                    </div>
                    <p className={`${Privacy.fifth? "bg-gray-100 block":"hidden"} transition-all duration-300 p-4 text-justify text-[10px] md:text-sm`}>
                    هنگامی‌که شما از وب‌سایت ترخینه استفاده می‌کنید، ما اطلاعاتی درباره‌ی فعالیت‌های شما گردآوری می‌کنیم که برخی از این اطلاعات عبارتند از:
                    نشانی آی. پی. کامپیوتر شما (این نشانی یک شماره‌ی دیجیتالی ۱۲ رقمی منحصربه‌فرد است که برنامه‌های اینترنتی به‌وسیله‌ی آن کامپیوتر را شناسایی و با آن ارتباط برقرار می‌کنند).
                    نوع مرورگری که شما استفاده می‌کنید (مرورگر برنامه‌ای است که شما برای دیدن وب‌سایت‌ها از آن استفاده می‌کنید؛ مانند Internet Explorer، Firefox، Safari، Google Chrome).
                    زمانی‌که شما وارد وب‌سایت شده‌اید و مدت زمانی که از وب‌سایت استفاده کرده‌اید.
                    URL مرجع شما (سایتی که شما برای دسترسی و ورود به وب‌سایت ما از آن استفاده کرده‌اید).
                    ما با استفاده از این اطلاعات نمی‌توانیم شما را شناسایی کنیم، بلکه این اطلاعات را از تعداد بسیار بازدیدکنندگان سایت‌مان گردآوری و آن‌ها را تحلیل می‌کنیم؛ با استفاده از این اطلاعات، می‌توانیم بفهمیم که کابران چگونه از وب‌سایت ما استفاده می‌کنند و فهمیدن این موضوع به ما کمک می‌کند خدمات بهتری به آنان ارائه دهیم.
                    </p>
                </div>
                <div className="flex flex-col border-b border-b-gray-300 ">
                    <div onClick={()=>setPrivacy({...Privacy,sixth:!Privacy.sixth})} className={`${Privacy.sixth? "bg-emerald-600 text-white font-bold":""} flex items-center justify-between p-4 transition-all duration-300 cursor-pointer text-xs md:text-base`}>
                        <p className="w-11/12 md:w-max">
                        استفاده از کوکی‌ها و دستگاه‌های ذخیره‌سازی دیگر
                         </p>
                         <p className="w-1/12 md:w-5">
                        <ChevronDownIcon className={`${Privacy.sixth? "rotate-180":""} w-full h-full stroke-2 transition-all duration-300`}/>

                         </p>
                    </div>
                    <p className={`${Privacy.sixth? "bg-gray-100 block":"hidden"} transition-all duration-300 p-4 text-justify text-[10px] md:text-sm`}>
                    کوکی‌ها فایل‌های اطلاعاتی هستند که روی کامپیوتر شما ذخیره می‌شوند تا به وب‌سایت‌ها کمک کنند شما را به خاطر بیاورند. ما و همکاران‌مان، با استفاده از کوکی‌ها اطلاعاتی درباره شیوه‌ی استفاده شما از وب‌سایت‌مان گردآوری می‌کنیم؛ این اطلاعات ما را در بهبود رابط کاربری و محتوای سایت کمک خواهد کرد. شما نیز به وسیله‌ی ثبت و ذخیره‌سازی این کوکی‌ها، هنگام ورود مجدد به سایت، نیازی به ثبت مجدد نام کاربری و کلمه‌ی عبور نخواهید داشت. هم‌چنین ما به وسیله‌ی کوکی‌ها، آخرین وضعیت سفارش روز شما را ذخیره می‌کنیم تا شما بتوانید آن‌ها را در پروفایل خود مشاهده کنید.
                    </p>
                </div>
                <div className="flex flex-col border-b border-b-gray-300 ">
                    <div onClick={()=>setPrivacy({...Privacy,seventh:!Privacy.seventh})} className={`${Privacy.seventh? "bg-emerald-600 text-white font-bold":""} flex items-center justify-between p-4 transition-all duration-300 cursor-pointer text-xs md:text-base`}>
                        <p className="w-11/12 md:w-max">
                        اطلاعات بیشتر
                         </p>
                         <p className="w-1/12 md:w-5">
                        <ChevronDownIcon className={`${Privacy.seventh? "rotate-180":""} w-full h-full stroke-2 transition-all duration-300`}/>

                         </p>
                    </div>
                    <p className={`${Privacy.seventh? "bg-gray-100 block":"hidden"} transition-all duration-300 p-4 text-justify text-[10px] md:text-sm`}>
                    در مجموعه‌ی ترخینه، حفظ امنیت اطلاعات شخصی شما را امری بسیار جدی و مهم می‌دانیم و در وب‌سایت خود از سیاست‌های امنیتی و فناوری‌هایی استفاده می‌کنیم که برای محافظت از اطلاعات شخصی طراحی شده‌اند؛ هم‌چنین از روش‌ها و دستورالعمل‌های امنیتی سختی که قوانین حفظ حریم خصوصی کاربران به آن‌ها نیاز دارد، پیروی می‌کنیم. این روش‌های محافظتی ذخیره‌سازی، استفاده و انتشار همه‌ی اطلاعات شما را دربر می‌گیرد و از دسترسی و استفاده‌ی غیرمجاز از این اطلاعات جلوگیری می‌کند.
                    </p>
                </div>
            </div>
     );
}
 
export default Privacy;