import { Foods } from "@/Data/Food";
import users from "@/Data/User";
import GetUserInfo from "@/utils/GetUserInfo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req, res) {
  let pathname = req.nextUrl.pathname.toString();
  const params = pathname.substring(pathname.indexOf("auth/") + 5);
  const user = GetUserInfo(params);
  return NextResponse.json(user);
}
