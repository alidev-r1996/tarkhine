import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const AddAddress = ({ addAdress, setAddAdress }) => {
  const [address, setAddress] = useState({
    title: "",
    Transferee: "",
    phone: "",
    nameTransferee: "",
    phoneTransferee: "",
    address: "",
  });

  const AddressHandler = (event) => {
    if (event.target.name == "Transferee"){
       setAddress({...address, Transferee: !address.Transferee })
    }else{

        setAddress({ ...address, [event.target.name]: event.target.value });
    }
  };

  return (
    <>
      <div
        onClick={() => setAddAdress(!addAdress)}
        className={`${
          addAdress ? "block" : "hidden"
        } w-screen h-screen fixed z-10 bg-slate-800/70 top-0 left-0`}
      ></div>
      <div
        className={`${
          addAdress ? "flex" : "hidden"
        } z-[1000]  overflow-hidden md:w-96 w-full h-screen md:h-max top-0 left-0 flex-col rounded bg-white shadow fixed md:box-center  md:-top-[30%]`}
      >
        <div className="flex items-center justify-between p-3 bg-gray-200 ">
          <ChevronRightIcon onClick={()=>setAddAdress(!addAdress)} className=" cursor-pointer w-4 h-4 stroke-2 md:hidden" /> 
          <h1 className="font-bold text-sm mx-auto">ثبت آدرس </h1>
          <p
            onClick={() => setAddAdress(!addAdress)}
            className="p-1 hidden md:block cursor-pointer rounded-full hover:bg-rose-500 hover:text-white"
          >
            <XMarkIcon className="w-4 h-4 stroke-2" />
          </p>
        </div>
        <form className="p-4 flex flex-col gap-1">
          <input
            onChange={AddressHandler}
            type="text"
            name="title"
            id="title"
            placeholder="عنوان آدرس"
            className="text-xs border border-gray-300 w-full outline-none px-2 rounded p-1"
          />
          <label
            htmlFor="Transferee"
            className="flex items-center gap-1 mt-5 mb-2"
          >
            <input
              type="checkbox"
              name="Transferee"
              id="Transferee"
              value="true"
              onChange={AddressHandler}
              checked={address.Transferee == true}
              className="accent-emerald-600"
            />
            <p className="text-xs">تحویل گیرنده خودم هستم.</p>
            
          </label>
          {address.Transferee && (
            <input
              onChange={AddressHandler}
              type="text"
              name="phone"
              id="phone"
              value={address.phone}
              placeholder=" شماره همراه  "
              className="text-xs border border-gray-300 w-full outline-none px-2 rounded p-1"
            />
          )}
          {!address.Transferee && (
            <input
              onChange={AddressHandler}
              type="text"
              name="nameTransferee"
              id="nameTransferee"
              value={address.nameTransferee}
              placeholder="نام و نام خانوادگی تحویل گیرنده "
              className=" text-xs border border-gray-300 w-full outline-none px-2 rounded p-1"
            />
          )}
          {!address.Transferee && (
            <input
              onChange={AddressHandler}
              type="text"
              name="phoneTransferee"
              id="phoneTransferee"
              value={address.phoneTransferee}
              placeholder=" شماره همراه تحویل گیرنده"
              className="text-xs border border-gray-300 w-full outline-none px-2 rounded p-1"
            />
          )}
          <textarea
            onChange={AddressHandler}
            name="exact-adress"
            id="exact-adress"
            cols="30"
            rows="10"
            value={address.address}
            className="text-xs border border-gray-300 w-full outline-none px-2 rounded p-1 resize-none"
            placeholder="آدرس دقیق شما"
          ></textarea>
        </form>
        <div className="flex items-center p-4 gap-4 mx-auto w-full -mt-12 -mb-6">
          <button
            onClick={() => setAddAdress(!addAdress)}
            className=" w-1/2 whitespace-nowrap   flex items-center justify-center  transition-all duration-300  px-6 py-1 text-sm  my-8  i gap-1  rounded hover:text-white hover:bg-emerald-700 text-emerald-700"
          >
            ویرایش آدرس انتخابی
          </button>
          <button className=" whitespace-nowrap border w-1/2 flex items-center justify-center transition-all hover:bg-emerald-600 duration-300 rounded  px-6 py-1 text-sm my-8   gap-1 text-white bg-emerald-700 ">
            ثبت آدرس
          </button>
        </div>
      </div>
    </>
  );
};

export default AddAddress;
