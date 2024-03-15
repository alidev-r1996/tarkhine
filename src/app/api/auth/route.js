import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
import users from "@/Data/User";

export async function GET(req, res) {
  const cookieStore = cookies();
  const Usercookie = cookieStore.get("userPhone");
  if (Usercookie) {
    return NextResponse.json(Usercookie);
  } else {
    return NextResponse.json("ابتدا باید وارد حساب کاربری خود شوید");
  }
}

export async function POST(req, res) {
  const headersList = headers();
  const { phoneNumber } = await req.json();
  const user = users.find((user) => user.phoneNumber == phoneNumber);
  if (!user) {
    let newUser = {
      id: 1,
      name: "",
      family: "",
      email: "",
      nickName: "",
      phoneNumber: phoneNumber,
      otp: 456545,
      birth: "",
      orders: [],
      favorites: [],
      cart: [],
      address: [],
      role: "USER",
      avatar: "",
    };
    users.push(newUser);
  }

  const cookieStore = cookies();
  cookieStore.set("userPhone", phoneNumber, {
    path: "/",
    sameSite: true,
    secure: true,
    httpOnly: true,
    expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
  });

  return NextResponse.json({
    status: 200,
    message: "کد اعتبارسنجی با موفقیت ارسال شد.",
  });
}

// let users = [
//   {
//     id: 1,
//     name: "علی",
//     family: "رحیمی",
//     email: "Alidev_r1996@gmail.com",
//     nickName: "علی رحیمی",
//     phoneNumber: "09358865344",
//     otp: 456545,
//     birth: "1996-04-15T00:00:00.000Z",
//     orders: [
//       {
//         id: 1,
//         quantity: 1,
//         title: "کوفته برنجی",
//         img: "https://s8.uupload.ir/files/01_wlo.png",
//         isLiked: false,
//         rate: 5,
//         rateCount: 35,
//         offPice: "180000",
//         price: "1450000",
//         discount: "35",
//         category: "ایرانی",
//         ingreiants: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
//       },
//       {
//         id: 2,
//         quantity: 1,
//         title: "کشک بادمجان",
//         img: "https://s8.uupload.ir/files/02_upx2.png",
//         isLiked: false,
//         rate: 5,
//         rateCount: 44,
//         offPice: "",
//         price: "95000",
//         discount: "",
//         category: "ایرانی",
//         ingreiants: "بادمجان، کشک، نعناع خشک، مغز گردو، سیر، پیاز",
//       },
//       {
//         id: 3,
//         quantity: 1,
//         title: "میرزا قاسمی",
//         img: "https://s8.uupload.ir/files/03_qb30.png",
//         isLiked: false,
//         rate: 5,
//         rateCount: 28,
//         offPice: "165000",
//         price: "142500",
//         discount: "10",
//         category: "ایرانی",
//         ingreiants: "بادمجان، گوجه فرنگی، تخم مرغ، سیر، رب گوجه فرنگی",
//       },
//     ],
//     favorites: [
//       {
//         id: 1,
//         title: "کوفته برنجی",
//         img: "https://s8.uupload.ir/files/01_wlo.png",
//         isLiked: false,
//         rate: 5,
//         rateCount: 35,
//         offPice: "180000",
//         price: "1450000",
//         discount: "35",
//         category: "ایرانی",
//         ingreiants: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
//       },
//       {
//         id: 2,
//         title: "کشک بادمجان",
//         img: "https://s8.uupload.ir/files/02_upx2.png",
//         isLiked: false,
//         rate: 5,
//         rateCount: 44,
//         offPice: "",
//         price: "95000",
//         discount: "",
//         category: "ایرانی",
//         ingreiants: "بادمجان، کشک، نعناع خشک، مغز گردو، سیر، پیاز",
//       },
//       {
//         id: 3,
//         title: "میرزا قاسمی",
//         img: "https://s8.uupload.ir/files/03_qb30.png",
//         isLiked: false,
//         rate: 5,
//         rateCount: 28,
//         offPice: "165000",
//         price: "142500",
//         discount: "10",
//         category: "ایرانی",
//         ingreiants: "بادمجان، گوجه فرنگی، تخم مرغ، سیر، رب گوجه فرنگی",
//       },
//     ],
//     cart: [
//       {
//         id: 1,
//         quantity: 1,
//         title: "کوفته برنجی",
//         img: "https://s8.uupload.ir/files/01_wlo.png",
//         isLiked: false,
//         rate: 5,
//         rateCount: 35,
//         offPice: "180000",
//         price: "1450000",
//         discount: "35",
//         category: "ایرانی",
//         ingreiants: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
//       },
//       {
//         id: 2,
//         quantity: 1,
//         title: "کشک بادمجان",
//         img: "https://s8.uupload.ir/files/02_upx2.png",
//         isLiked: false,
//         rate: 5,
//         rateCount: 44,
//         offPice: "",
//         price: "95000",
//         discount: "",
//         category: "ایرانی",
//         ingreiants: "بادمجان، کشک، نعناع خشک، مغز گردو، سیر، پیاز",
//       },
//       {
//         id: 3,
//         quantity: 1,
//         title: "میرزا قاسمی",
//         img: "https://s8.uupload.ir/files/03_qb30.png",
//         isLiked: false,
//         rate: 5,
//         rateCount: 28,
//         offPice: "165000",
//         price: "142500",
//         discount: "10",
//         category: "ایرانی",
//         ingreiants: "بادمجان، گوجه فرنگی، تخم مرغ، سیر، رب گوجه فرنگی",
//       },
//     ],
//     address: [
//       {
//         id: 1,
//         location: " اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰",
//         phoneNumber: "09358865344",
//       },
//     ],
//     role: "Admin",
//     avatar: "",
//   },

// ];
