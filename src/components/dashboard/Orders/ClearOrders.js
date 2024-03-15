import { XMarkIcon } from "@heroicons/react/24/outline";

const ClearOrders = ({ clearOrders, setClearOrders }) => {
  return (
    <>
      <div
        onClick={() => setClearOrders(!clearOrders)}
        className={`${
          clearOrders ? "block" : "hidden"
        } w-screen h-screen fixed z-10 bg-slate-800/70 top-0 left-0`}
      ></div>
      <div className={`${clearOrders? 'flex': "hidden"} z-30 overflow-hidden md:w-96 w-4/5 flex-col rounded bg-white shadow fixed box-center bottom-[58%] md:bottom-1/2`}>
        <div className="flex items-center justify-between p-3 bg-gray-200 ">
          <h1 className="font-bold text-sm mx-auto">حذف محصولات</h1>
          <p onClick={() => setClearOrders(!clearOrders)} className="p-1 cursor-pointer rounded-full hover:bg-rose-500 hover:text-white">
          <XMarkIcon className="w-4 h-4 stroke-2" />
          </p>
        </div>
        <p className="text-xs md:text-sm mx-auto mt-8">
          همه محصولات سبد خرید شما حذف شوند؟
        </p>
        <div className="flex items-center gap-4 justify-center w-full px-4">
          <button onClick={() => setClearOrders(!clearOrders)} className=" transition-all hover:shadow-[0_0_5px_rgba(4,120,87,0.6)] duration-300 rounded  px-6 py-1 text-sm  my-8  gap-1 text-white bg-emerald-700 ">
            بازگشت
          </button>
          <button className="border-rose-500 text-rose-500 hover:bg-rose-500 hover:shadow-[0_0_5px_rgba(244,63,94,0.6)] border text-xs md:text-sm  hover:text-white transition-all duration-300 rounded  px-4 py-1 ">
            لغو سفارش
          </button>
        </div>
      </div>
    </>
  );
};

export default ClearOrders;
