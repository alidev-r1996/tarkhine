import {
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";


const AuthHeader = ({ children, onClose, onBack, auth }) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`w-screen h-screen fixed z-10 bg-slate-800/70 top-0 left-0`}
      ></div>
      <div
        className={`md:absolute  fixed top-0 left-0 w-screen h-screen  flex-col z-[1000] md:box-center md:top-36 md:h-max md:w-96  bg-white shadow rounded-lg overflow-hidden`}
      >
        <div className="flex items-center justify-between p-4 mb-4 ">
          <p
            onClick={onBack}
            className={`${
              !auth ? "block" : "hidden"
            } group cursor-pointer hover:bg-emerald-600 p-1 rounded`}
          >
            <ChevronRightIcon
              className={` w-5 h-5 group-hover:stroke-white stroke-emerald-800`}
            />
          </p>
          <p className={`${auth ? "hidden" : "block p-4"}`}></p>
          <img
            src="/images/Vector.png"
            alt="logo"
            className="mx-auto w-24 h-8"
          />
          <p onClick={onClose} className="group hover:bg-rose-500 p-1 rounded">
            <XMarkIcon className="w-5 h-5 group-hover:stroke-white cursor-pointer stroke-emerald-800" />
          </p>
        </div>
        {children}
      </div>
    </>
  );
};

export default AuthHeader;


