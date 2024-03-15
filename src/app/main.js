"use client";

import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Searchpopup from "@/common/Search";
import InputCodeOTP from "@/common/OTP";
import Slider from "@/common/Slider";
import Introduction from "@/components/Main-Page/Introduction";
import Branchs from "@/components/Main-Page/Branchs";
import Menu from "@/components/Main-Page/Menu";

export default function MainPage() {
  const [search, setSearch] = useState(false);
  const [Login, setLogin] = useState(false);
  return (
    <div>
      <Searchpopup search={search} setSearch={setSearch} />
      <InputCodeOTP Login={Login} setLogin={setLogin} />
        <div className=" h-60 md:h-[340px] relative flex justify-center items-center">
          <Slider />
        </div>
        <div
          className="flex flex-col items-center justify-center md:mt-8 p-4"
        >
          <div className="border md:hidden w-full flex my-4 border-slate-600 rounded p-1 justify-between items-center">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="جستجو "
              className="outline-none w-full text-sm placeholder:text-slate-700"
            />
            <MagnifyingGlassIcon className="w-6 h-6" />
          </div>
          <Menu />
        </div>
        <Introduction />
        <Branchs />
    </div>
  );
}
