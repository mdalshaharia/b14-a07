'use client'
import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { authClient, useSession } from "@/app/lib/auth-client";
import { usePathname } from "next/navigation";
import { LuUserRound } from "react-icons/lu";
import { BiLogOut, BiUserX } from "react-icons/bi";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

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
    const [isModalOpen, setIsModalOpen] = useState(false);
    // console.log(session)

    const openModal = () => setIsModalOpen((prev) => !prev);
    const closeModal = () => setIsModalOpen(false);

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


    const handleSignout = async () => {
        await authClient.signOut()
    }


    return (
        <header className="border-b border-gray-100 bg-[#fafcfa]/90">
            <div className="navbar mx-auto min-h-0 max-w-7xl gap-2 px-3 py-3 sm:px-6 lg:px-8">
                <div className="navbar-start min-w-0 flex-1">
                    <Link href="/" className="flex min-w-0 items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-700 text-green-100 sm:h-11 sm:w-11">
                            <Image
                                src="/logo-icon.png"
                                alt="Logo"
                                width={25}
                                height={25}
                            />
                        </span>
                        <span className="min-w-0 ">
                            <span className="block truncate text-base font-bold text-gray-900 sm:text-lg">
                                বাজার দর
                            </span>
                            <span className="block truncate text-[11px] text-gray-600 sm:text-xs">
                                {today}
                            </span>
                        </span>
                    </Link>
                </div>
                <div className="relative z-10 navbar-end flex w-auto flex-none gap-1 sm:gap-3">
                    {session ? (
                        <>
                            <button
                                type="button"
                                onClick={openModal}
                                className="flex items-center gap-1 text-center text-sm font-medium text-gray-900 sm:gap-3 sm:text-base"
                            >
                                <div className="avatar">
                                    <div className="w-10 rounded-lg flex items-center">
                                        <Image
                                            height={40}
                                            width={40}
                                            alt="user image"
                                            src={session?.user?.image || "/people.png"}
                                        />
                                    </div>
                                </div>
                                <p>{(session?.user?.name).split(" ")[0]}</p>
                                <span className="text-gray-900 ">▾</span>
                            </button>

                            {isModalOpen && (
                                <div className="absolute right-0 top-full z-100 mt-2 w-72 rounded-2xl border border-gray-200 bg-[#fbfdfb] p-5 shadow-xl">
                                    <p className="truncate text-base font-bold text-gray-900 sm:text-lg">
                                        {session?.user?.name}
                                    </p>

                                    <p className="mt-1 truncate text-sm text-gray-500">
                                        {session?.user?.email}
                                    </p>

                                    <Link
                                        href="/profile"
                                        onClick={closeModal}
                                        className="mt-5 flex items-center gap-1 text-base text-gray-900 hover:text-green-700 text-md"
                                    >
                                        <span aria-hidden="true"><LuUserRound className="h-4 w-4" /></span>
                                        আমার প্রোফাইল
                                    </Link>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            closeModal();
                                            handleSignout();
                                        }}
                                        className="mt-2 flex items-center gap-2 text-base text-red-600 hover:text-red-700 text-md"
                                    >
                                        <span aria-hidden="true"><BiLogOut className="h-5 w-5" /></span>

                                        সাইন আউট
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
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
                    )}
                </div>
            </div>
            <div>
                {
                    categories.length > 0 && (
                        <div className="max-w-7xl mx-auto lg:pl-20 flex flex-wrap gap-2 py-2 text-sm font-semibold sm:gap-3 text-black">
                            {categories.map((category) => {
                                const isActive = pathname === `/categories/${category.slug}`;
                                return (
                                    <Link
                                        key={category.id}
                                        href={`/categories/${category.id}`}
                                        className={`h-5 text-black rounded-lg px-2 lg:text-sm md:text-sm text-[12px] sm:px-4 ${isActive
                                            ? "text-green-600"
                                            : "text-black"
                                            }
                    `}
                                    >
                                        <span className='mr-2'>
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