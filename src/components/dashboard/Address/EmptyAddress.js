import AddAddress from "@/components/cart/AddAdress";
import Link from "next/link";
import { useState } from "react";

const EmptyAddress = () => {
  const [addAdress, setAddAdress] = useState(false);
  return (
    <>
      <AddAddress addAdress={addAdress} setAddAdress={setAddAdress} />
      <div className="m-2 border empty-cover border-gray-300 flex flex-col items-center justify-center h-96 md:h-[420px] rounded p-4 relative ">
        <h1 className="font-bold text-gray-400 text-[10px] sm:text-xs md:text-base">
          شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!
        </h1>
        <button
          onClick={() => setAddAdress(!addAdress)}
          className="border z-20  transition-all duration-300 cursor-pointer  flex px-6 py-2 text-[10px] sm:text-xs md:text-sm mx-auto my-8  items-center gap-1 border-emerald-700 rounded hover:text-white hover:bg-emerald-700 text-emerald-700"
        >
          افزودن آدرس
        </button>
      </div>
    </>
  );
};

export default EmptyAddress;
