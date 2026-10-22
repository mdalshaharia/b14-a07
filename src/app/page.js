import DecreasingProduct from "@/components/decreasingproduct/DecreasingProduct";
import Hero from "@/components/Hero/Hero";
import IncreasingProduct from "@/components/IncreasingProduct/IncreasingProduct";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Hero></Hero>
      <IncreasingProduct></IncreasingProduct>
      <DecreasingProduct></DecreasingProduct>
    </div>
  );
}
