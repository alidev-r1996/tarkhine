"use client";

import { useState } from "react";
import OrdersReview from "@/components/dashboard/Orders/Orders";
import Favourites from "@/components/dashboard/Favourites/Favourites";
import MyAddress from "@/components/dashboard/Address/MyAddress";
import Profile from "@/components/dashboard/Profile";
import SideBar from "./SideBar";

const Page = () => {
  const [menu, setMenu] = useState("profile");
  return (
    <div className="p-4 md:px-8 flex items-start md:gap-4">
      <SideBar menu={menu} setMenu={setMenu} />
      {menu == "profile" && <Profile setMenu={setMenu} />}
      {menu == "orders" && <OrdersReview setMenu={setMenu} />}
      {menu == "favourites" && <Favourites setMenu={setMenu} />}
      {menu == "my-address" && <MyAddress setMenu={setMenu} />}
    </div>
  );
};

export default Page;
