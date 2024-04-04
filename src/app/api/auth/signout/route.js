import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req, res) {
  const cookieStore = cookies();
  cookieStore.delete('userPhone')

  return NextResponse.json({
    status: 200,
    message: "با موفقیت از حساب خود خارج شدید",
  });
}