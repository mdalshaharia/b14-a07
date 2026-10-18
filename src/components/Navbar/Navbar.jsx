'use client'
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { authClient, useSession } from "@/app/lib/auth-client";
import { usePathname } from "next/navigation";


const formatBengaliDate = (date) => {
    const formattedDate = new Intl.DateTimeFormat('bn-BD', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(date);
    return formattedDate;
}


const Navbar = () => {
    const [today, setToday] = useState("");
    const [categories, setCategories] = useState([]);
    const pathname = usePathname();
    const { data: session } = authClient.useSession()
    // const dateFormtaer = formatBengaliDate(new Date());
    // console.log(categories)

    useEffect(() => {
        setToday(formatBengaliDate(new Date()));
    }, []);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch('https://api.abcz.workers.dev/api/bazardor/categories')
                const result = await response.json()
                setCategories(result)
            } catch (error) {
                console.error('Failed to fetch data:', error)
            } finally {
                // setLoading(false)
            }
        }

        fetchCategories()
    }, [])
    // console.log(categories)

    return (
        <header className="border-b border-gray-100 bg-[#fafcfa]/90 backdrop-blur">
            <div className="navbar mx-auto min-h-0 max-w-7xl gap-2 px-3 py-3 sm:px-6 lg:px-8">
                <div className="navbar-start min-w-0 flex-1">
                    <Link href="/" className="flex min-w-0 items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-700 text-green-100 sm:h-11 sm:w-11">
                            <Image
                                href="/logo.png"
                                alt="Logo"
                                width={40}
                                height={40}
                            />
                        </span>
                        <span className="min-w-0 leading-tight">
                            <span className="block truncate text-base font-bold text-gray-900 sm:text-lg">
                                বাজার দর
                            </span>
                            <span className="block truncate text-[11px] text-gray-600 sm:text-xs">
                                {today}
                            </span>
                        </span>
                    </Link>
                </div>

                <div className="navbar-end w-auto flex-none gap-1 sm:gap-3">
                    {
                        session ?
                            <span className="flex  items-center gap-1 text-center text-sm font-medium text-gray-900 sm:text-base">
                                <div className="avatar">
                                    <div className="w-6 rounded-xl">
                                        {/* <Image height={8} width={8} alt="user image" href='https://unsplash.com/photos/a-man-in-a-white-shirt-is-posing-for-a-picture-mRVP1c59wko' /> */}
                                    </div>
                                </div>
                                <p>
                                    {session?.user?.name}
                                </p>
                            </span>
                            :
                            <>
                                <Link
                                    href="/signin"
                                    className="btn btn-ghost btn-sm h-9 min-h-0 rounded-lg px-2 text-sm font-semibold text-gray-900 hover:bg-transparent hover:text-green-700 sm:px-4"
                                >
                                    সাইন ইন
                                </Link>
                                <Link
                                    href="/signup"
                                    className="btn btn-sm h-9 min-h-0 rounded-lg border-0 bg-green-700 px-3 text-sm font-semibold text-white shadow-lg shadow-green-700/30 hover:bg-green-800 sm:h-10 sm:px-5"
                                >
                                    সাইন আপ
                                </Link>
                            </>
                    }
                </div>
            </div>
            <div>
                {
                    categories.length > 0 && (
                        <div className="max-w-7xl  mx-auto pl-20 flex flex-wrap gap-2 py-2 text-sm font-semibold sm:gap-3 text-black">
                            {categories.map((category) => {
                                const isActive = pathname === `/categories/${category.slug}`;
                                // console.log('now active', isActive,)
                                // console.log('now pathname is', pathname,)
                                return (
                                    <Link
                                        key={category.id}
                                        href={`/categories/${category.id}`}
                                        className={`h-9 text-black rounded-lg px-2 text-sm   sm:px-4 ${
                        isActive
                          ? "text-[#C2F800]"
                          : "text-black"
                      }
                    `} 
                                    >
                                        <span>
                                            {category.icon}
                                        </span>
                                        <span>
                                            {category.nameBn}
                                        </span>
                                    </Link>
                                )
                            }
                            )}
                        </div>
                    )
                }
            </div>
        </header>
    );
}

export default Navbar