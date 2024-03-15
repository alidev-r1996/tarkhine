import { PencilIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import EmptyAddress from "./EmptyAddress";
import ClearOrders from "../Orders/ClearOrders";


const MyAddress = ({setMenu}) => {
  return (
    <div
      className={`w-full bg-white md:w-2/3  flex-col md:border border-gray-300 rounded md:p-4`}
    >
      <div className="flex items-center border-b border-b-gray-300 jb">
        <ChevronRightIcon
          onClick={() => setMenu("")}
          className="w-5 h-5 stroke-2 md:hidden cursor-pointer hover:stroke-emerald-600"
        />
        <h1 className="py-2 font-bold mx-auto md:mx-0"> آدرس‌های من</h1>
      </div>
      
      <EmptyAddress />
    </div>
  );
};

export default MyAddress;
