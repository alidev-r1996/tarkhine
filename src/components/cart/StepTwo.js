import { useState } from "react";
import {
  TrashIcon,
  TruckIcon,
  ShoppingBagIcon,
  MapPinIcon,
  PlusCircleIcon,
  PencilSquareIcon,
  ClipboardIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import AddAddress from "./AddAdress";
import BuyDetail from "./BuyDetail";
import { useDispatch, useSelector } from "react-redux";
import { DeliveryCost } from "@/redux/features/cart/cartSlice";

const CompleteInfo = ({ Foods, setSteps }) => {
    const ShppingCartInfo = useSelector(state=>state.cart)
    const dispatch = useDispatch();

  return (
    <>
      <div className="p-4 flex flex-col md:flex-row gap-4">
        <div className="md:hidden flex justify-between">
          <p
            onClick={() =>
              setSteps({ shopCart: true, completed: false, payment: false })
            }
            className="p-1 cursor-pointer"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </p>
          <h1 className="font-bold text-sm block mx-auto">تکمیل اطلاعات</h1>
        </div>
        <Delivery />
        <BuyDetail cart={ShppingCartInfo} setSteps={setSteps} dispatch={dispatch} />
      </div>
    </>
  );
};

export default CompleteInfo;

export function Delivery() {
  const [delivery, setDelivery] = useState("inPerson");
  const [addAdress, setAddAdress] = useState(false);
  const disptach = useDispatch();

  return (
    <>
      <AddAddress addAdress={addAdress} setAddAdress={setAddAdress} />
      <div className="w-full md:w-2/3 gap-3 flex flex-col">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:items-center justify-between border border-gray-300 rounded shadow p-4">
          <div className="flex items-center gap-1 border-b border-b-gray-300 md:border-none">
            <TruckIcon className="w-6 h-6" />
            <p className="text-xs ">روش تحویل سفارش</p>
          </div>
          <div className="flex items-center gap-1 text-slate-600">
            <input
              onClick={() => disptach(DeliveryCost("post"))}
              type="radio"
              name="delivery"
              id="post"
              value="post"
              checked={delivery == "post"}
              onChange={(event) => setDelivery(event.target.value)}
              className="appearance-none w-4 h-4 checked:w-3 checked:h-3 md:w-4 md:h-4 ml-2 border cursor-pointer border-gray-300 checked:ring-1 ring-offset-2 checked:ring-emerald-500 rounded-full bg-white checked:border-none outline-none checked:bg-emerald-500"
            />
            <div className="flex flex-col">
              <p className="text-[10px] md:text-xs">ارسال توسط پیک</p>
              <p className="text-[8px] md:text-[10px]">
                توسط پیک رستوران ارسال شود.
              </p>
            </div>
            <TruckIcon className="md:w-6 md:h-6 w-5 h-5" />
          </div>

          <div className="flex items-center gap-1 text-slate-600">
            <input
              onClick={() => disptach(DeliveryCost("inPerson"))}
              type="radio"
              name="delivery"
              id="post"
              value="inPerson"
              checked={delivery == "inPerson"}
              onChange={(event) => setDelivery(event.target.value)}
              className="appearance-none w-4 h-4 checked:w-3 checked:h-3 md:w-4 md:h-4 ml-2 border cursor-pointer border-gray-300 checked:ring-1 ring-offset-2 checked:ring-emerald-500 rounded-full bg-white checked:border-none outline-none checked:bg-emerald-500"
            />
            <div className="flex flex-col">
              <p className="text-[10px] md:text-xs"> تحویل حضوری</p>
              <p className="text-[8px] md:text-[10px]">
                توسط شخص خریدار دریافت می‌شود.
              </p>
            </div>
            <ShoppingBagIcon className="md:w-6 md:h-6 w-5 h-5" />
          </div>
        </div>

        {delivery == "post" && (
          <div className="flex flex-col border border-gray-300 rounded p-4">
            <div className="flex items-center justify-between pb-2  border-b border-b-gray-300">
              <div className="flex items-center gap-1">
                <MapPinIcon className="w-5 h-5" />
                <p className="text-xs">آدرس‌ها</p>
              </div>
              <div
                onClick={() => setAddAdress(!addAdress)}
                className="flex cursor-pointer items-center gap-1 text-emerald-600"
              >
                <PlusCircleIcon className="w-5 h-5" />
                <p className="text-xs">افزودن آدرس</p>
              </div>
            </div>
            <div className="pt-2 flex flex-col md:flex-row items-center gap-1 md:gap-4">
              <div className="flex flex-col text-gray-700 bg-gray-100 gap-3 border border-gray-300 rounded p-4">
                <div className="flex items-start gap-2">
                  <p className="text-[10px]">
                    تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰
                  </p>
                  <PencilSquareIcon className="w-5 h-5" />
                  <TrashIcon className="w-5 h-5" />
                </div>
                <div className="flex items-start justify-between">
                  <p className="text-[10px]">محل کار</p>
                  <p className="text-[10px]">سردار وظیفه </p>
                  <p className="text-[10px]">09358865344 </p>
                </div>
              </div>
              <div className="flex flex-col text-gray-700 bg-gray-100 gap-3 border border-gray-300 rounded p-4">
                <div className="flex items-start gap-2">
                  <p className="text-[10px]">
                    تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰
                  </p>
                  <PencilSquareIcon className="w-5 h-5" />
                  <TrashIcon className="w-5 h-5" />
                </div>
                <div className="flex items-start justify-between">
                  <p className="text-[10px]">محل کار</p>
                  <p className="text-[10px]">سردار وظیفه </p>
                  <p className="text-[10px]">09358865344 </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {delivery == "inPerson" && (
          <div className="flex flex-col border border-gray-300 rounded p-4">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-6 ">
                <div className="flex items-center gap-1">
                  <MapPinIcon className="w-5 h-5" />
                  <p className="text-xs">آدرس شعبه اکباتان</p>
                </div>
                <div className="flex flex-col gap-2 text-gray-500 pr-2">
                  <p className="text-xs">
                    اکباتان، خیابان ریاحی، کوچه سیزدهم، ساختمان آیسا، طبقه همکف
                  </p>
                  <p className="text-xs">شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱</p>
                  <p className="text-xs">شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱</p>
                  <p className="text-xs">
                    ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل
                  </p>
                </div>
                <button className="border mr-2 md:block hidden border-emerald-600 text-emerald-600 px-5 py-1 rounded hover:bg-emerald-600 hover:text-white w-max text-xs">
                  مشاهده در نقشه
                </button>
              </div>
              <div className="h-48 md:block hidden">
                <img
                  src="/images/map.png"
                  alt="map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        <div className="p-4 flex-1 border flex flex-col gap-2  border-gray-300 rounded shadow">
          <div className="flex items-center gap-1">
            <ClipboardIcon className="w-5 h-5" />
            <p className="text-xs">توضیحات سفارش</p>
            <p className="text-[9px]">(اختیاری)</p>
          </div>
          <input
            type="text"
            name="info"
            id="info"
            className="outline-none focus:border border-gray-200 rounded p-2"
          />
        </div>
      </div>
    </>
  );
}
