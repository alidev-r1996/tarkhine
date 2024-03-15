"use client";

import ShamsiDate from "@/utils/ToShamsiDate";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const comments = [
  {
    id: 1,
    avatar: "/images/user1.png",
    body: "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم.",
    author: "آرزو محمد‌علیزاده",
    createdAt: "2023-03-14T00:00:00.000Z",
    rate: 4,
  },
  {
    id: 2,
    avatar: "/images/user2.png",
    body: "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم.",
    author: "سردار وظیفه",
    createdAt: "2023-03-05T00:00:00.000Z",
    rate: 4,
  },
];

const Comments = () => {
  return (
    <div className="p-4 bg-white my-6 w-full">
      <h1 className="font-bold text-lg w-max mx-auto mb-4 mt-8 ">
        نظرات کاربران{" "}
      </h1>
      <div className="flex gap-4 overflow-x-auto hideScroll w-full">
        {comments.map((cm) => {
          return (
            <div
              key={cm.id}
              className="border p-4 border-gray-200 rounded shadow flex gap-3 min-w-[85%] md:min-w-[35%] md:max-w-[35%]   "
            >
              <div className="flex flex-col gap-2 aspect-square">
                <img
                  src={cm.avatar}
                  alt="user"
                  className="md:w-24 md:h-24 w-16 h-16 rounded-full"
                />
                <p className="m:text-xs text-[10px] text-gray-400 whitespace-nowrap">
                  {cm.author}
                </p>
                <p className="m:text-xs text-[10px] text-gray-400 whitespace-nowrap">
                  {ShamsiDate(cm.createdAt)}
                </p>
              </div>
              <div className="flex flex-col items-end justify-between">
                <p className="m:text-xs text-[10px] text-justify  md:leading-7">
                  {cm.body}
                </p>
                <div>
                  <Box
                    sx={{
                      "& .MuiRating-root": {
                        fontSize: "18px",
                      },
                    }}
                  >
                    <Rating name="read-only" value={cm.rate} readOnly />
                  </Box>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
