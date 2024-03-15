"use client";

import { PhotoIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import FranchiseHeader from "./header";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";
import { toast } from "react-hot-toast";

const Page = () => {
  const [fileInput, setFileInput] = useState("");
  const [date, setDate] = useState()
  return (
    <div>
      <FranchiseHeader />

      <div className="w-full p-4 px-8">
        <div className="border-b border-gray-300 pb-4 ">
          <h1 className="font-bold md:text-lg text-center mb-6">
            دریافت مشاوره
          </h1>
          <form className="flex flex-col md:flex-row gap-2 md:gap-4">
            <input
              type="text"
              name="name"
              id="name"
              className="border border-gray-300 rounded flex-1 outline-none text-xs p-1"
              placeholder="نام و نام خانوادگی"
            />
            <input
              type="text"
              name="phone"
              id="phone"
              className="border border-gray-300 rounded flex-1 outline-none text-xs p-1"
              placeholder="شماره تماس"
            />
              <DatePicker
                value={date}
                placeholder="زمان ایده‌آل"
                onChange={(date) => setDate(date)}
                format="YYYY/MM/DD"
                calendar={persian}
                locale={persian_fa}
                style={{
                  backgroundColor: "white",
                  height: "29px",
                  width: "100%",
                  fontSize: "12px",
                  padding: "10px 10px",
                }}
                monthYearSeparator=" "
                className="green"
              />
            
          </form>
          <button onClick={()=>toast.success("مشخصات شما با موفقیت ثبت شد")} className="text-white bg-emerald-700 rounded px-3 py-1 text-sm mx-auto mt-6 block">
            درخواست مشاوره
          </button>
        </div>
      </div>
      <div className="w-full p-4 px-8">
        <div className=" pb-4 ">
          <h1 className="font-bold md:text-lg text-center mb-6">
            فرم درخواست نمایندگی
          </h1>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-sm">مشخصات فرد متقاضی</h1>
              <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border border-gray-300 rounded flex-1 outline-none text-xs p-1"
                  placeholder="نام و نام خانوادگی"
                />
                <input
                  type="text"
                  name="code"
                  id="code"
                  className="border border-gray-300 rounded flex-1 outline-none text-xs p-1"
                  placeholder="کد ملی "
                />
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="border border-gray-300  rounded flex-1 outline-none text-xs p-1"
                  placeholder="شماره تماس  "
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-sm">آدرس ملک متقاضی</h1>
              <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                <input
                  type="text"
                  name="county"
                  id="county"
                  className="border border-gray-300 rounded flex-1 outline-none text-xs p-1"
                  placeholder="استان   "
                />
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="border border-gray-300 rounded flex-1 outline-none text-xs p-1"
                  placeholder="شهر  "
                />
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="border border-gray-300  rounded flex-1 outline-none text-xs p-1"
                  placeholder="آدرس دقیق   "
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-sm">مشخصات ملک متقاضی</h1>
              <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                <input
                  type="text"
                  name="type"
                  id="type"
                  className="border border-gray-300 rounded flex-1 outline-none text-xs p-1"
                  placeholder="نوع بنا   "
                />
                <input
                  type="text"
                  name="area"
                  id="area"
                  className="border border-gray-300 rounded flex-1 outline-none text-xs p-1"
                  placeholder="مساحت (مترمربع)  "
                />
                <input
                  type="text"
                  name="age"
                  id="age"
                  className="border border-gray-300  rounded flex-1 outline-none text-xs p-1"
                  placeholder="سن بنا    "
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-sm">امکانات ملک متقاضی</h1>
              <div className="grid grid-cols-2 grid-rows-2 gap-3">
                <div className="flex items-center gap-1 text-xs">
                  <input
                    type="checkbox"
                    name="possibilities"
                    id="license"
                    className="accent-emerald-700"
                  />
                  <p>پروانه کسب دارد</p>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <input
                    type="checkbox"
                    name="possibilities"
                    id="license"
                    className="accent-emerald-700"
                  />
                  <p> آشپزخانه دارد</p>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <input
                    type="checkbox"
                    name="possibilities"
                    id="license"
                    className="accent-emerald-700"
                  />
                  <p> پارکینگ دارد</p>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <input
                    type="checkbox"
                    name="possibilities"
                    id="license"
                    className="accent-emerald-700"
                  />
                  <p> انبار دارد</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-1/3 mt-3 ">
              <h1 className="font-bold text-sm">تصویر ملک متقاضی</h1>
              <label
                htmlFor="property"
                className={`${
                  fileInput ? "" : "p-4 py-8"
                } border border-gray-300  w-full text-gray-500 rounded shadow flex flex-col items-center justify-center`}
              >
                <input
                  type="file"
                  name="property"
                  id="property"
                  className="hidden"
                  onChange={(e) =>
                    setFileInput(URL.createObjectURL(e.target.files[0]))
                  }
                />
                {fileInput ? (
                  <img src={fileInput} alt="" className="bg-cover" />
                ) : (
                  <>
                    <PhotoIcon className="w-12 h-12" />
                    <p className="text-xs">تصویری از ملک را بارگزاری کنید...</p>
                  </>
                )}
              </label>
            </div>
          </form>
          <button className="text-white bg-emerald-700 rounded px-3 py-1 text-sm mx-auto mt-6 block">
            {" "}
            ثبت اطلاعات
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
