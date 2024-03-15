import { Foods } from "@/Data/Food";
import { useSearchParams } from "next/navigation";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req, res) {
  const filter = req.nextUrl.searchParams.get("filter");
  const search = req.nextUrl.searchParams.get("search");
  let filterFoods = {};

  const filteredFoods = () => {
    switch (filter) {
      case "all":
        return Foods;
      case "irani":
        return Foods.filter((food) => food.category == "ایرانی");
      case "non-irani":
        return Foods.filter((food) => food.category == "غیرایرانی");
      case "pizza":
        return Foods.filter((food) => food.category == "پیتزا");
      case "sandwich":
        return Foods.filter((food) => food.category == "ساندویچ");
      case "special":
        return Foods.filter((food) => food.rate > 3);
      case "cheap":
        return Foods.filter((food) => food.discount.length);
      default:
        return Foods;
    }
  };
  const filtered = filteredFoods();


  if (search.length>0){
    filterFoods = filtered.filter((food) => {
      return food.title.includes(search);
    });
  }else{
    filterFoods = filtered
  }

  if (!search){
    filterFoods = filtered
  }



  return NextResponse.json(filterFoods);
}


export async function POST(req ,res){
  const {foodId} = await  req.json();
  const targetFood = Foods.find((food)=>food.id == foodId)
  targetFood.isLiked = !targetFood.isLiked;
  if (targetFood.isLiked) {
    return NextResponse.json(`${targetFood.title} به علاقه‌مندی‌ها اضافه شد.`);
  }else{
    return NextResponse.json(`${targetFood.title} از علاقه‌مندی‌ها حذف شد.`);

  }
}