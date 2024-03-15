const branches = [
  {
    id: 1,
    title:"شعبه اکباتان",
    img: "branch1.jpg",
    alt: "ekbatan",
    body: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم"
  },
  {
    id: 2,
    title:"شعبه چالوس",
    img: "branch2.jpg",
    alt: "Chalos",
    body: "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی"
  },
  {
    id: 3,
    title:"شعبه اقدسیه",
    img: "branch3.jpg",
    alt: "Aqdasie",
    body: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸"
  },
  {
    id: 4,
    img: "branch4.jpg",
    title:"شعبه ونک",
    alt: "Vanak",
    body: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶"
  },
]

const Branchs = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <h1 className="font-extrabold text-2xl">ترخینه گردی </h1>
      <div className="w-full grid grid-row-4 md:grid-cols-4 gap-4 p-4 md:p-8 my-4">
        {branches.map((item,index)=>{
          return <div key={item.id} className="flex transition-all duration-300 hover:scale-105 hover:shadow-[0_0_5px_rgba(0,0,0,0.4)] flex-row md:flex-col group rounded-lg cursor-pointer shadow-[0_0_5px_rgba(0,0,0,0.2)] overflow-md:hidden">
          <img
            src={`/images/${item.img}`}
            alt={item.alt}
            className=" h-32 md:h-52 w-full"
          />
          <div className="flex flex-col w-full my-2 text-slate-800">
            <h1 className="font-bold  md:text-lg text-center mt-3 px-4">
              {item.title}
            </h1>
            <p className="text-[11px] md:text-xs p-1 md:p-2 text-center">
              {item.body}
            </p>
          </div>
        </div>
        })}
       
      </div>
    </div>
  );
};

export default Branchs;
