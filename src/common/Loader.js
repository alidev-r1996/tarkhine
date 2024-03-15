import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
    <div className="w-screen h-screen fixed z-[1000] bg-slate-800/70 top-0 left-0"></div>
    <div className="fixed bg-white shadow z-[1200] flex justify-center slide-center top-[50%] items-center mx-auto w-60 h-60 rounded">
    <InfinitySpin
      width="200"
      color="rgb(4,120,87)"
    />
    </div>
    </>
  );
};

export default Loader;
