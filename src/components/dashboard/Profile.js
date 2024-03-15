import { PencilIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";


const Profile = ({setMenu}) => {
    const [edit, setEdit]= useState(false)
  return (
    <div
      className={` w-full bg-white md:w-2/3  flex-col md:border border-gray-300 rounded md:p-4`}
    >
      <div className="flex items-center border-b border-b-gray-300 jb">
        <ChevronRightIcon
          onClick={() => setMenu("")}
          className="w-5 h-5 stroke-2 md:hidden cursor-pointer hover:stroke-emerald-600"
        />
        <h1 className="py-2 font-bold mx-auto md:mx-0">پروفایل من</h1>
      </div>
      <form className="flex flex-col md:grid grid-cols-2 p-4 gap-6 md:gap-4 mt-4">
        <label htmlFor="name" className="relative">
          <input
            type="text"
            name="name"
            id="name"
            className="outline-none w-full peer border border-emerald-600 focus:border-emerald-600 placeholder-shown:border-gray-300 rounded p-1"
            placeholder=""
          />
          <p className=" absolute text-emerald-600 text-xs -top-2.5  right-2 bg-white px-1 peer-placeholder-shown:text-gray-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:text-emerald-600 peer-focus:text-xs peer-focus:-top-2.5 ">
            نام
          </p>
        </label>
        <label htmlFor="family" className="relative">
          <input
            type="text"
            name="family"
            id="family"
            className="outline-none w-full peer border border-emerald-600 focus:border-emerald-600 placeholder-shown:border-gray-300 rounded p-1"
            placeholder=""
          />
          <p className=" absolute text-emerald-600 text-xs -top-2.5  right-2 bg-white px-1 peer-placeholder-shown:text-gray-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:text-emerald-600 peer-focus:text-xs peer-focus:-top-2.5 ">
            نام خانوادگی
          </p>
        </label>
        <label htmlFor="email" className="relative">
          <input
            type="text"
            name="email"
            id="email"
            className="outline-none w-full peer border border-emerald-600 focus:border-emerald-600 placeholder-shown:border-gray-300 rounded p-1"
            placeholder=""
          />
          <p className=" absolute text-emerald-600 text-xs -top-2.5  right-2 bg-white px-1 peer-placeholder-shown:text-gray-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:text-emerald-600 peer-focus:text-xs peer-focus:-top-2.5 ">
            آدرس ایمیل{" "}
          </p>
        </label>
        <label htmlFor="phone" className="relative">
          <input
            type="text"
            name="phone"
            id="phone"
            className="outline-none w-full peer border border-emerald-600 focus:border-emerald-600 placeholder-shown:border-gray-300 rounded p-1"
            placeholder=""
          />
          <p className=" absolute text-emerald-600 text-xs -top-2.5  right-2 bg-white px-1 peer-placeholder-shown:text-gray-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:text-emerald-600 peer-focus:text-xs peer-focus:-top-2.5 ">
            شماره تلفن{" "}
          </p>
        </label>
        <label htmlFor="birth" className="relative">
          <input
            type="text"
            name="birth"
            id="birth"
            className="outline-none w-full peer border border-emerald-600 focus:border-emerald-600 placeholder-shown:border-gray-300 rounded p-1"
            placeholder=""
          />
          <p className=" absolute text-emerald-600 text-xs -top-2.5  right-2 bg-white px-1 peer-placeholder-shown:text-gray-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:text-emerald-600 peer-focus:text-xs peer-focus:-top-2.5 ">
            تاریخ تولد{" "}
          </p>
        </label>
        <label htmlFor="username" className="relative">
          <input
            type="text"
            name="username"
            id="username"
            className="outline-none w-full peer border border-emerald-600 focus:border-emerald-600 placeholder-shown:border-gray-300 rounded p-1"
            placeholder=""
          />
          <p className=" absolute text-emerald-600 text-xs -top-2.5  right-2 bg-white px-1 peer-placeholder-shown:text-gray-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:text-emerald-600 peer-focus:text-xs peer-focus:-top-2.5 ">
            نام نمایشی{" "}
          </p>
        </label>
        <p className={`${edit? "md:block hidden":"hidden"}`}></p>
        {edit && <div className="flex gap-2">
        <div onClick={()=>setEdit(!edit)} className="border border-emerald-600 flex-1 py-1 text-center rounded text-emerald-600 hover:bg-emerald-50 cursor-pointer">انصراف</div>
        <div className="bg-emerald-600 flex-1 py-1 text-center rounded text-white hover:shadow-[0_0_5px_rgb(5,150,105)] cursor-pointer">تأیید</div>
        </div>}
      </form>
      {!edit && <div onClick={()=>setEdit(!edit)} className="flex items-center w-max justify-center px-3 py-1 group rounded gap-2 cursor-pointer hover:bg-emerald-600 hover:text-white border border-emerald-600 my-3 mx-auto text-emerald-600">
        <PencilIcon className="w-5 h-5 border-b border-b-emerald-600 group-hover:border-b-white" />
        <p>ویرایش اطلاعات</p>
      </div>}
      
    </div>
  );
};

export default Profile;
