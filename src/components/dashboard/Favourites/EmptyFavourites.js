import Link from "next/link";

const EmptyFavourites = () => {
  return (
    <div className="m-2 border empty-cover border-gray-300 flex flex-col items-center justify-center h-96 md:h-[420px] rounded p-4 relative ">
      <h1 className="font-bold text-gray-400 text-[10px] sm:text-xs md:text-base">
      شما در حال حاضر هیچ محصولی را به علاقه‌مندی‌ها اضافه نکرده‌اید!
      </h1>
      <Link href="/branches/menu">
        <button className="border z-20  transition-all duration-300 cursor-pointer  flex px-6 py-2 text-[10px] sm:text-xs md:text-sm mx-auto my-8  items-center gap-1 border-emerald-700 rounded hover:text-white hover:bg-emerald-700 text-emerald-700">
          منوی رستوران
        </button>
      </Link>
    </div>
  );
};

export default EmptyFavourites;
