import {
  UserIcon,
  ClipboardDocumentListIcon,
  HeartIcon,
  MapPinIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import {
  UserIcon as User,
  ClipboardDocumentListIcon as Orders,
  HeartIcon as Heart,
  MapPinIcon as Map,
} from "@heroicons/react/24/solid";

const Sidemenu = [
  {
    id: 1,
    title: "پروفایل",
    englishTitle: "profile",
    icon: <User className="w-5 h-5 " />,
    activeIcon: <UserIcon className="w-5 h-5 " />,
  },
  {
    id: 2,
    title: "پیگیری سفارشات",
    englishTitle: "orders",
    icon: <Orders className="w-5 h-5 " />,
    activeIcon: <ClipboardDocumentListIcon className="w-5 h-5 " />,
  },
  {
    id: 3,
    title: "علاقه‌مندی‌ها ",
    englishTitle: "favourites",
    icon: <Heart className="w-5 h-5 " />,
    activeIcon: <HeartIcon className="w-5 h-5 " />,
  },
  {
    id: 4,
    title: "آدرس‌های من ",
    englishTitle: "my-address",
    icon: <Map className="w-5 h-5 " />,
    activeIcon: <MapPinIcon className="w-5 h-5 " />,
  },
];

const SideBar = ({ menu, setMenu }) => {
  return (
    <div
      className={`${
        menu == "" ? "flex " : "hidden md:flex"
      } w-full md:w-1/3 md:border border-gray-300 rounded flex-col p-2 md:p-4`}
    >
      <div className="flex items-end gap-4 py-2 border-b border-b-emerald-700">
        <p className="border border-gray-300 rounded-full bg-blue-100 text-white">
          <UserIcon className="w-9 h-9 md:w-14 md:h-14 fill-white" />
        </p>
        <div className="flex flex-col md:gap-2">
          <p className="md:text-sm text-xs">کاربر ترخینه</p>
          <p className="text-emerald-600 text-[10px] md:text-xs">09358865344</p>
        </div>
      </div>
      <div>
        {Sidemenu.map((item, index) => {
          return (
            <div
              onClick={() => setMenu(item.englishTitle)}
              key={index}
              className={`${
                menu == item.englishTitle
                  ? "text-emerald-600 border-r-2 border-r-emerald-600 font-bold"
                  : ""
              } flex items-center cursor-pointer gap-1   hover:text-emerald-600  py-2 px-1 my-1`}
            >
              {menu == item.englishTitle ? item.icon : item.activeIcon}
              <p className="text-sm">{item.title}</p>
            </div>
          );
        })}
        <div
          className={` flex items-center cursor-pointer gap-1  hover:text-rose-600  py-2 px-1 my-1`}
        >
          <ArrowLeftOnRectangleIcon className="w-5 h-5 " />
          <p className="text-sm">خروج</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
