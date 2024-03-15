const CovertTitle = (title) => {
    switch (title) {
      case "irani":
        return "غذاهای ایرانی";
      case "nonIrani":
        return "غذاهای غیرایرانی";
      case "pizza":
        return "پیتزاها";
      case "sandwich":
        return "ساندویچ‌ها";
      case "popular":
        return "غذاهای محبوب";
      case "special":
        return "پیشنهادهای ویژه";
      default:
        return;
    }
  };
  
  export default CovertTitle;