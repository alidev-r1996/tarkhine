import { Foods } from "@/Data/Food";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.json(Foods);
}

export async function POST(req, res) {
  const { foodId } = await req.json();
  const targetFood = Foods.find((food) => food.id == foodId);
  targetFood.isLiked = !targetFood.isLiked;
  if (targetFood.isLiked) {
    return NextResponse.json(`${targetFood.title} به علاقه‌مندی‌ها اضافه شد.`);
  }else{
    return NextResponse.json(`${targetFood.title} از علاقه‌مندی‌ها حذف شد.`);

  }
}
