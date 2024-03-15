import { ChevronRightIcon} from "@heroicons/react/24/outline";
import { useState } from "react";
import Branches from "./Branches";
import ClearOrders from "./ClearOrders";


const OrdersReview = ({setMenu}) => {
    const [status, setStatus] = useState("all")
    const [clearOrders, setClearOrders] = useState(false)
  return (
    <div
      className={`w-full bg-white md:w-2/3  flex-col md:border border-gray-300 rounded md:p-4`}
    >
      <div className="flex items-center border-b border-b-gray-300 jb">
        <ChevronRightIcon
          onClick={() => setMenu("")}
          className="w-5 h-5 stroke-2 md:hidden cursor-pointer hover:stroke-emerald-600"
        />
        <h1 className="py-2 font-bold mx-auto md:mx-0"> سفارشات</h1>
      </div>
      <div className="flex items-center gap-2 my-2 text-xs md:text-sm">
        <p onClick={()=>setStatus("all")} className={`${status == "all" ? "bg-blue-500 text-white":"bg-blue-100 text-blue-600"} px-3 py-1  hover:bg-blue-500 hover:text-white rounded-full cursor-pointer`}>همه </p>
        <p onClick={()=>setStatus("current")} className={`${status == "current" ? "bg-orange-500 text-white":"bg-orange-100 text-orange-600"} px-3 py-1  hover:bg-orange-500 hover:text-white rounded-full cursor-pointer`}>جاری </p>
        <p onClick={()=>setStatus("delivered")} className={`${status == "delivered" ? "bg-emerald-500 text-white":"bg-emerald-100 text-emerald-600"} px-3 py-1  hover:bg-emerald-500 hover:text-white rounded-full cursor-pointer`}>تحویل شده </p>
        <p onClick={()=>setStatus("canceled")} className={`${status == "canceled" ? "bg-rose-500 text-white":"bg-rose-100 text-rose-600"} px-3 py-1  hover:bg-rose-500 hover:text-white rounded-full cursor-pointer`}>لغو شده </p>
      </div>

      {status=="all"|status=="current" && <Branches current setClearOrders={setClearOrders}/>}
      {status=="all"|status=="delivered" && <Branches  setClearOrders={setClearOrders}/>}
      {status=="all"|status=="canceled" && <Branches  setClearOrders={setClearOrders}/>}
      
      <ClearOrders clearOrders={clearOrders} setClearOrders={setClearOrders} />
    </div>
  );
};

export default OrdersReview;
