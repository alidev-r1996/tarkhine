"use client";

import Searchpopup from "@/common/Search";
import AuthContainer from "@/components/Auth/AuthContainer";
import http from "@/services/configs/Config";
import { LogoutUser } from "@/services/requests/Users/UserServices";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  ClipboardDocumentListIcon,
  BuildingStorefrontIcon,
  UsersIcon,
  PhoneIcon,
  ChevronDownIcon,
  CreditCardIcon,
  HeartIcon,
  MapPinIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Header = () => {
  const [burgerShow, setBurgerShow] = useState(false);
  const [menu, setMenu] = useState(false);
  const [branch, setBranch] = useState(false);
  const [user, setUser] = useState(false);
  const pathname = usePathname();
  const [search, setSearch] = useState(false);
  const [Login, setLogin] = useState(false);

  const UserHandler = async () => {
    const { data } = await http.get("/auth");
    if (data.value) {
      setUser(!user);
    } else {
      setLogin(!Login);
    }
  };

  const signout = async () => {
    await LogoutUser();
    toast.success("با موفقیت از حساب خود خارج شدید!");
  };

  return (
    <div className="p-4 flex items-center justify-between bg-white shadow relative">
      <Searchpopup search={search} setSearch={setSearch} />
      {Login && <AuthContainer onClose={() => setLogin(!Login)} />}
      <div
        className={`${
          burgerShow ? "block md:hidden" : "hidden"
        } w-screen h-screen fixed left-0 top-0 bg-slate-800/80 z-10`}
        onClick={() => setBurgerShow(false)}
      ></div>
      <Bars3Icon
        onClick={() => setBurgerShow(true)}
        className="w-7 h-7 stroke-emerald-600 cursor-pointer md:hidden"
      />
      <img
        src="/images/Logo.png"
        alt="logo"
        className=" w-20 md:w-max h-7 md:h-9"
      />
      <div className=" md:flex hidden items-center gap-4 text-slate-500 text-sm">
        <Link href="/">
          <p
            className={`${
              pathname == "/"
                ? "border-b-emerald-600 text-emerald-700 font-bold"
                : ""
            }   menu-hover `}
          >
            صفحه اصلی
          </p>
        </Link>
        <div
          onClick={() => setMenu(!menu)}
          className={`${
            pathname == "/branches"
              ? "border-b-emerald-600 text-emerald-700 font-bold border-b "
              : ""
          }  flex items-center relative cursor-pointer`}
        >
          <p className="menu-hover">شعبه</p>
          <ChevronDownIcon
            className={`${
              menu ? "rotate-180" : ""
            } w-5 h-3 transition-all duration-300 stroke-slate-800  ${
              pathname == "/branches/ekbatan"
                ? "border-b-emerald-600 text-emerald-700 font-bold border-b active"
                : ""
            }`}
          />
          <div
            className={`${
              menu ? "flex" : "hidden"
            } flex overflow-hidden flex-col absolute rounded  w-36 shadow-[0_0_5px_rgba(0,0,0,0.4)] top-11 -right-24 bg-white z-[100]`}
          >
            <Link
              href="/branches"
              className="p-3 transition-all duration-300  border-b border-b-gray-300 hover:bg-emerald-600 hover:text-white"
            >
              اکباتان
            </Link>
            <Link
              href="/branches"
              className="p-3 transition-all duration-300 border-b border-b-gray-300 hover:bg-emerald-600 hover:text-white"
            >
              اقدسیه
            </Link>
            <Link
              href="/branches"
              className="p-3 transition-all duration-300 border-b border-b-gray-300 hover:bg-emerald-600 hover:text-white"
            >
              چالوس
            </Link>
            <Link
              href="/branches"
              className="p-3 transition-all duration-300  hover:bg-emerald-600 hover:text-white"
            >
              ونک
            </Link>
          </div>
        </div>
        <div
          onClick={() => setBranch(!branch)}
          className="flex items-center relative cursor-pointer"
        >
          <p className="menu-hover">منو</p>
          <ChevronDownIcon
            className={`${
              branch ? "rotate-180" : ""
            } w-5 h-3 transition-all duration-300 stroke-slate-800`}
          />
          <div
            className={`${
              branch ? "flex" : "hidden"
            } flex-col absolute rounded  w-36 shadow-[0_0_5px_rgba(0,0,0,0.4)] top-11 -right-1 bg-white z-[100]`}
          >
            <p className="p-3 transition-all duration-300 border-b border-b-gray-300 hover:bg-emerald-600 hover:text-white">
              غذای اصلی
            </p>
            <p className="p-3 transition-all duration-300 border-b border-b-gray-300 hover:bg-emerald-600 hover:text-white">
              پیش غذا
            </p>
            <p className="p-3 transition-all duration-300 border-b border-b-gray-300 hover:bg-emerald-600 hover:text-white">
              دسر
            </p>
            <p className="p-3 transition-all duration-300  hover:bg-emerald-600 hover:text-white">
              نوشیدنی
            </p>
          </div>
        </div>
        <Link href="/franchise">
          <p
            className={`${
              pathname == "/franchise"
                ? "border-b-emerald-600 text-emerald-700 font-bold border-b"
                : ""
            }  menu-hover`}
          >
            اعطای نمایندگی
          </p>
        </Link>
        <Link href="/about-us">
          <p
            className={`${
              pathname == "/about-us"
                ? "border-b-emerald-600 text-emerald-700 font-bold border-b"
                : ""
            }  menu-hover`}
          >
            درباره ما
          </p>
        </Link>
        <Link href="/contact-us">
          <p
            className={`${
              pathname == "/contact-us"
                ? "border-b-emerald-600 text-emerald-700 font-bold border-b"
                : ""
            }  menu-hover`}
          >
            تماس با ما
          </p>
        </Link>
      </div>
      <div className="flex items-center gap-1">
        <p
          onClick={() => setSearch((prev) => !prev)}
          className="p-1 text-emerald-600 hover:text-emerald-50 rounded bg-emerald-50 cursor-pointer transition-all duration-300 hover:bg-emerald-600 group hidden md:block"
        >
          <MagnifyingGlassIcon className=" w-6 h-6 " />
        </p>
        <Link href="/cart">
          <p
            className={`${
              pathname == "/cart"
                ? "bg-emerald-600 text-emerald-50"
                : "text-emerald-600"
            } p-1 rounded  hover:text-emerald-50 bg-emerald-50 cursor-pointer transition-all duration-300 hover:bg-emerald-600 group`}
          >
            <ShoppingCartIcon className=" w-6 h-6 " />
          </p>
        </Link>
        <div
          onClick={UserHandler}
          className={`${
            (pathname == "/profile") | (pathname == "/profile/[...profile]")
              ? "bg-emerald-600 text-emerald-50"
              : "text-emerald-600"
          } p-1 relative  hover:text-emerald-50 flex items-center rounded bg-emerald-50 cursor-pointer transition-all duration-300 hover:bg-emerald-600 group`}
        >
          <UserIcon className=" w-6 h-6 " />
          <ChevronDownIcon
            className={`${
              user ? "rotate-180" : ""
            } group-hover:stroke-white w-5 h-3 stroke-[3px] transition-all duration-300 `}
          />
          <div
            className={`${
              user ? "flex" : "hidden"
            } flex-col text-slate-500  text-sm absolute rounded  w-36 shadow-[0_0_5px_rgba(0,0,0,0.4)] top-10 -right-[92px] bg-white z-[100]`}
          >
            <Link href="/profile">
              <div className="flex items-center pr-2 hover:text-white hover:bg-emerald-600 ">
                <UserIcon className="w-6 h-6" />
                <p className="p-3">پروفایل </p>
              </div>
            </Link>
            <hr />
            <Link href="/profile/orders">
              <div className="flex items-center pr-2 hover:text-white hover:bg-emerald-600 ">
                <CreditCardIcon className="w-6 h-6" />
                <p className="p-3">پیگیری سفارش </p>
              </div>
            </Link>
            <hr />
            <Link href="/profile/favourites">
              <div className="flex items-center pr-2 hover:text-white hover:bg-emerald-600 ">
                <HeartIcon className="w-6 h-6" />
                <p className="p-3">علاقه‌مندی‌ها</p>
              </div>
            </Link>
            <hr />
            <Link href="/profile/my-address">
              <div className="flex items-center pr-2 hover:text-white hover:bg-emerald-600 ">
                <MapPinIcon className="w-6 h-6" />
                <p className="p-3">آدرس‌های من</p>
              </div>
            </Link>
            <hr />
            <div
              onClick={signout}
              className="flex items-center pr-2 hover:text-white hover:bg-emerald-600 "
            >
              <ArrowLeftOnRectangleIcon className="w-6 h-6" />
              <p className="p-3">خروج از حساب </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          burgerShow ? "block md:hidden" : "hidden"
        } absolute z-[100] top-0 right-0 w-4/5 h-[calc(100vh+100vh)] bg-white shadow`}
      >
        <img
          src="/images/mobile-menu.jpg"
          alt="cover"
          className="w-full h-24 "
        />
        <div className="flex items-center justify-between p-4 absolute top-4 right-0 w-full h-16 bg-slate-800/40">
          <img src="/images/Logo-white.png" alt="logo" className="h-7" />
          <XMarkIcon
            onClick={() => setBurgerShow(false)}
            className="w-5 h-5 stroke-white cursor-pointer"
          />
        </div>
        <div className="flex flex-col p-3  mt-4 text-xs">
          <Link href="/">
            <div className="flex cursor-pointer items-center gap-1 py-4 px-2 border-b border-gray-300">
              <HomeIcon className="w-4 h-4 stroke-slate-600" />
              <p>صفحه اصلی</p>
            </div>
          </Link>

          <div
            onClick={() => setBranch(!branch)}
            className={`${
              branch ? "bg-emerald-600 text-white" : ""
            } flex items-center cursor-pointer justify-between py-4 px-2 border-b border-gray-300`}
          >
            <div className="flex items-center gap-1 ">
              <ClipboardDocumentListIcon
                className={`${
                  branch ? "stroke-white" : ""
                } w-4 h-4 stroke-slate-600`}
              />
              <p> منو</p>
            </div>
            <ChevronDownIcon
              className={`${
                branch ? "rotate-180 stroke-white" : ""
              } stroke-2 transition-all duration-300 w-4 h-4 stroke-slate-600`}
            />
          </div>
          <div className={`${branch ? "flex" : "hidden"} flex-col bg-gray-200`}>
            <p className="p-3 border-b border-gray-300">غذای اصلی</p>
            <p className="p-3 border-b border-gray-300">پیش غذا</p>
            <p className="p-3 border-b border-gray-300">دسر</p>
            <p className="p-3 border-b border-gray-300">نوشیدنی</p>
          </div>

          <div className="flex flex-col cursor-pointer">
            <div
              onClick={() => setMenu(!menu)}
              className={`${
                menu ? "bg-emerald-600 text-white" : ""
              } flex items-center justify-between py-4 px-2 border-b border-gray-300`}
            >
              <div className="flex items-center gap-1">
                <BuildingStorefrontIcon
                  className={`${
                    menu ? "stroke-white" : ""
                  } w-4 h-4 stroke-slate-600`}
                />
                <p> شعبه</p>
              </div>
              <ChevronDownIcon
                className={`${
                  menu ? "rotate-180 stroke-white" : ""
                } stroke-2 transition-all duration-300 w-4 h-4 stroke-slate-600`}
              />
            </div>
            <div className={`${menu ? "flex" : "hidden"} flex-col bg-gray-200`}>
              <Link href="/branches/">
                <p className="p-3 border-b border-gray-300">اکباتان</p>
              </Link>
              <p className="p-3 border-b border-gray-300">اقدسیه</p>
              <p className="p-3 border-b border-gray-300">چالوس</p>
              <p className="p-3 border-b border-gray-300">ونک</p>
            </div>
          </div>

          <Link href="/franchise">
            <div className="flex items-center cursor-pointer gap-1 py-4 px-2 border-b border-gray-300">
              <BuildingStorefrontIcon className="w-4 h-4 stroke-slate-600" />
              <p> اعطای نمایندگی</p>
            </div>
          </Link>
          <Link href="/about-us">
            <div className="flex items-center cursor-pointer gap-1 py-4 px-2 border-b border-gray-300">
              <UsersIcon className="w-4 h-4 stroke-slate-600" />
              <p> درباره ما</p>
            </div>
          </Link>
          <Link href="/contact-us">
            <div className="flex cursor-pointer items-center gap-1 py-4 px-2 border-b border-gray-300">
              <PhoneIcon className="w-4 h-4 stroke-slate-600" />
              <p>تماس با ما </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
