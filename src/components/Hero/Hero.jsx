"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const formatBengaliDate = (date) => {
  const formattedDate = new Intl.DateTimeFormat('bn-BD', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
  return formattedDate;
}

const Hero = () => {
  const [today, setToday] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setToday(formatBengaliDate(new Date())), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto mt-10">
      <div className=" rounded-3xl border border-gray-200 bg-[#fbfdfb] px-5 py-5 sm:px-6 lg:px-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl lg:max-w-2xl">
            <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              {today}
            </span>

            <h1 className="mt-2 text-3xl font-bold  text-gray-900 sm:text-4xl">
              আজকের বাজারের দাম এক নজরে
            </h1>

            <p className="mt-5 text-sm  text-gray-600 sm:text-base">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            <button
              onClick={() => {
                document.getElementById("product").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="btn mt-6 h-10 min-h-0 rounded-lg border-0 bg-green-700 px-5 text-sm font-semibold text-white shadow-lg shadow-green-700/30 hover:bg-green-800"
            >
              সব পণ্য দেখুন
            </button>
          </div>
          <Image
            src="/bazar-hero.png"
            alt="Basket"
            width={250}
            height={250}
            className="h-auto w-44  sm:w-56 md:mr-6 md:w-60 lg:mr-14 lg:w-64"
          />
        </div>
      </div>
    </section>
  );
}


export default Hero