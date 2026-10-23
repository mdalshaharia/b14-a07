'use client';
import React from 'react';
import Marquee from "react-fast-marquee";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

const toBn = (value, options) => Number(value).toLocaleString("bn-BD", options);

const TickerItem = ({ item }) => {
    const isUp = item.change.dir === 'up';
    const isDown = item.change.dir === 'down';
    const color = isUp ? "text-red-600" : isDown ? "text-green-700" : "text-gray-600";

    return (
        <div className="flex items-center gap-2 whitespace-nowrap border-r border-gray-200 px-4 py-2 text-xs sm:px-5 sm:text-sm  z-30">
            <span className="text-sm sm:text-base ">
                {item.categoryIcon} 
            </span>
            <span className="font-semibold text-gray-900">{item.nameBn}</span>
            <span className="text-gray-700">{toBn(item.today)} টাকা/কেজি</span>
            <span className={`inline-flex items-center gap-1 font-bold ${color}`}>
                {(item.change.dir === 'flat') && (
                    <span>-</span>)}
                {(isUp || isDown) && (
                    isUp ? <GoTriangleUp  className='text-2xl'/> : <GoTriangleDown className='text-2xl'/>
                )}
                {toBn(Math.abs(item.change.pct))}%
            </span>
        </div>
    );
}

const NavMarqueeClient = ({product, speed = 40}) => {
    return (
        <div className="w-full border-b border-gray-200 bg-[#fbfdfb]">
            <Marquee speed={speed} pauseOnHover gradient={false}>

                {product.map((item) => (
                    <TickerItem key={item.id} item={item} />
                ))}
            </Marquee>
        </div>
    );
}
export default NavMarqueeClient;