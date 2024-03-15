"use client";

import { useState } from "react";
import Questions from "@/components/FAQ/questions";
import Rules from "@/components/FAQ/Rules";
import Privacy from "@/components/FAQ/privacy";


const FAQ = () => {
  const [menu, setMenu] = useState("questions");

  return (
    <div>
      {menu == "questions" && (
        <>
          <div className="w-full relative">
            <img src="/images/questions.png" alt="slider" className="w-full" />
            <h1 className="text-white font-bold text-sm md:text-lg text-center absolute box-center bottom-1/2">
              سوالات متداول از ترخینه
            </h1>
          </div>
        </>
      )}

      {menu == "rules" && (
        <>
          <div className="w-full relative">
            <img src="/images/privacy.png" alt="slider" className="w-full" />
            <h1 className="text-white font-bold text-sm md:text-lg text-center absolute box-center bottom-1/2">
              حریم خصوصی کاربران
            </h1>
          </div>
        </>
      )}

      {menu == "privacy" && (
        <>
          <div className="w-full relative">
            <img src="/images/rules.png" alt="slider" className="w-full" />
            <h1 className="text-white font-bold text-sm md:text-lg text-center absolute box-center bottom-1/2">
              قوانین ترخینه
            </h1>
          </div>
        </>
      )}

      <div className="flex items-center bg-gray-200 text-xs md:text-base">
        <p
          onClick={() => setMenu("questions")}
          className={`${
            menu == "questions"
              ? "text-emerald-700 font-bold border-b-emerald-700"
              : "text-gray-500"
          }  border-b-2  cursor-pointer p-3`}
        >
          سوالات متداول
        </p>
        <p
          onClick={() => setMenu("rules")}
          className={`${
            menu == "rules"
              ? "text-emerald-700 font-bold border-b-emerald-700"
              : "text-gray-500"
          }  border-b-2  cursor-pointer p-3`}
        >
          قوانین ترخینه{" "}
        </p>
        <p
          onClick={() => setMenu("privacy")}
          className={`${
            menu == "privacy"
              ? "text-emerald-700 font-bold border-b-emerald-700"
              : "text-gray-500"
          }  border-b-2  cursor-pointer p-3`}
        >
          حریم خصوصی{" "}
        </p>
      </div>

      {menu == "questions" && <Questions menu={menu} />}
      {menu == "rules" && <Rules menu={menu} />}
      {menu == "privacy" && <Privacy menu={menu} />}
    </div>
  );
};

export default FAQ;
