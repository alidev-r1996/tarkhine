import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";

const Searchpopup = ({ search, setSearch }) => {
  const searchRef = useRef();
  useEffect(() => {
    searchRef.current.focus();
  }, [search]);

  return (
    <>
      <div
        onClick={() => setSearch(!search)}
        className={`${
          search ? "block" : "hidden"
        } w-screen h-screen fixed z-10 bg-slate-800/70 top-0 left-0`}
      ></div>
      <div
        className={`${
          search ? "md:flex" : "hidden"
        } absolute hidden  flex-col z-[1000] box-center top-44 h-max w-96  bg-white shadow rounded-lg overflow-hidden`}
      >
        <div className="flex items-center justify-between p-4 bg-gray-200">
          <h1 className="font-bold  mx-auto">جستجو</h1>
          <p className="p-1 cursor-pointer hover:bg-rose-600 hover:text-white rounded">
            <XMarkIcon
              onClick={() => setSearch(false)}
              className="w-5 h-5 stroke-2"
            />
          </p>
        </div>
        <div className="flex flex-col p-4">
          <p className="text-xs text-center p-2 text-emerald-700">
            {" "}
            لطفا متن خود را تایپ و سپس دکمه ENTER را فشار دهید.
          </p>
          <div className="border  w-full flex my-4 border-slate-600 rounded p-1 justify-between items-center">
            <input
              ref={searchRef}
              type="text"
              name="search"
              id="search"
              placeholder="جستجو"
              className="outline-none w-full text-xs placeholder:text-slate-700"
            />
            <MagnifyingGlassIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchpopup;
