import { Clear } from "@/redux/features/cart/cartSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";

const RemoveCart = ({ clearCart, setClearCart }) => {
  const dispatch = useDispatch();

  const ClearCartHandler = ()=>{
   dispatch(Clear())
    setClearCart(!clearCart)
  }

  return (
    <>
      <div
        onClick={() => setClearCart(!clearCart)}
        className={`${
          clearCart ? "block" : "hidden"
        } w-screen h-screen fixed z-10 bg-slate-800/70 top-0 left-0`}
      ></div>
      <div className={`${clearCart? 'flex': "hidden"} z-30 overflow-hidden md:w-96 w-4/5 flex-col rounded bg-white shadow fixed box-center bottom-[58%] md:bottom-1/2`}>
        <div className="flex items-center justify-between p-3 bg-gray-200 ">
          <h1 className="font-bold text-sm mx-auto">حذف محصولات</h1>
          <p onClick={() => setClearCart(!clearCart)} className="p-1 cursor-pointer rounded-full hover:bg-rose-500 hover:text-white">
          <XMarkIcon className="w-4 h-4 stroke-2" />
          </p>
        </div>
        <p className="text-xs md:text-sm mx-auto mt-8 mb-3">
          همه محصولات سبد خرید شما حذف شوند؟
        </p>
        <div className="flex items-center gap-4 justify-center w-full">
          <button onClick={() => setClearCart(!clearCart)} className="border w-1/3 transition-all duration-300  px-6 py-1 text-sm  my-8  gap-1 border-emerald-700 rounded hover:bg-emerald-100 text-emerald-700">
            بازگشت
          </button>
          <button onClick={ClearCartHandler} className="border w-1/3 transition-all hover:bg-emerald-600 duration-300 rounded  px-6 py-1 text-sm  my-8  gap-1 text-white bg-emerald-700 ">
            حذف
          </button>
        </div>
      </div>
    </>
  );
};

export default RemoveCart;
