const SendOTP = ({ phone, setPhone, showOTP }) => {
  return (
    <div className={`flex flex-col`}>
      <h1 className=" text-center">ورود/ثبت‌نام</h1>
      <p className="text-slate-600 text-xs text-center p-2">
        با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.
      </p>
      <input
        type="text"
        name="phone"
        id="phone"
        value={phone}
        maxLength={11}
        inputMode="numeric"
        onChange={(event) => setPhone(event.target.value)}
        className=" p-1 outline-none border border-gray-300 mx-6 px-3 rounded m-2 text-sm"
        placeholder="شماره همراه"
      />
      <button
        onClick={showOTP}
        disabled={phone.length < 11}
        className="mx-6 p-1 bg-blue-500 text-white disabled:bg-gray-200 disabled:cursor-not-allowed rounded m-3 disabled:text-slate-400"
      >
        ادامه
      </button>
      <div className="mb-8 text-[10px] text-center whitespace-nowrap flex items-center mx-auto">
        ورود و عضویت در ترخینه به منزله قبول
        <p className="text-emerald-700 text-[10px] mx-0.5">قوانین و مقررات</p>
        است.
      </div>
    </div>
  );
};

export default SendOTP;