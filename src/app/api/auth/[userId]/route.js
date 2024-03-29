import GetUserInfo from "@/utils/GetUserInfo";
import {NextResponse } from "next/server";

export async function GET(req, res) {
  let pathname = req.nextUrl.pathname.toString();
  const params = pathname.substring(pathname.indexOf("auth/") + 5);
  const user = GetUserInfo(params);
  return NextResponse.json(user);
}
