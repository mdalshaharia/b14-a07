
import AllProduct from "@/components/AllProduct/AllProduct";
import DecreasingProduct from "@/components/decreasingproduct/DecreasingProduct";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import IncreasingProduct from "@/components/IncreasingProduct/IncreasingProduct";
import NavMarquee from "@/components/Marquee/NavMarquee";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Suspense fallback={<div className="h-12 bg-gray-100 animate-pulse" />}>
      <NavMarquee></NavMarquee>
      </Suspense>
      <Hero></Hero>
      <IncreasingProduct ></IncreasingProduct>
      <DecreasingProduct></DecreasingProduct>
      <AllProduct></AllProduct>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}
