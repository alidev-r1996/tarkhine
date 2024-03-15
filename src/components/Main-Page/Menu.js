const menu = [
  {
    id: 1,
    title: "غذای اصلی",
    img: "/images/menu4.png",
    alt: "menu4"
  },
  {
    id: 2,
    title: "  دسر",
    img: "/images/menu3.png",
    alt: "menu3"
  },
  {
    id: 3,
    title: "پیش غذا ",
    img: "/images/menu2.png",
    alt: "menu2"
  },
  {
    id: 4,
    title: "نوشیدنی ",
    img: "/images/menu1.png",
    alt: "menu1"
  },
]



const Menu = () => {
    return ( 
        <>
        <h1 className="font-extrabold text-2xl">منو رستوران</h1>
          <div className="grid w-full  grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] grid-rows-2 md:grid-rows-1 gap-y-20 gap-x-4 md:gap-x-8 mx-auto md:p-12 p-4 mt-12 md:mt-28 ">
            {menu.map((item,index)=>{
              return <div key={item.id} className="border-2 border-solid border-emerald-600 rounded-xl relative h-20 md:h-40">
              <img
                src={item.img}
                alt={item.alt}
                className="w-[90%] h-24 md:h-56 box-center bottom-full "
              />
              <button className="bg-emerald-600 whitespace-nowrap text-white px-3 py-1 rounded text-sm md:text-lg box-center bottom-0">
                {item.title}
              </button>
            </div>
            })}
          </div>
        </>

     );
}
 
export default Menu;