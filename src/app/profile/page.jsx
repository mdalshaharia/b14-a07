"use client";

import { useState } from "react";
import { authClient, useSession, updateUser } from "@/app/lib/auth-client";
import Image from "next/image";



export default function ProfilePage({ user = demoUser }) {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const { data: session } = authClient.useSession()

    const initials = session?.user.name
        ?.split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

const handleUpdate = async (e) => {
    e.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) return;

    try {
        setLoading(true);

        const { data, error } = await authClient.updateUser({
            name: trimmedName,
        });

        if (error) {
            console.error("Failed to update profile:", error);
            return;
        }

        console.log("Profile updated successfully:", data);

        setName(trimmedName);
    } catch (err) {
        console.error("Unexpected error:", err);
    } finally {
        setLoading(false);
    }
};
console.log(name)
    const handleSignOut = () => {
    };

    return (
        <main className="min-h-screen bg-[#f1f5f0] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            <div className="mx-auto w-full max-w-4xl">
                {/* Heading */}
                <header className="mb-5">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        আমার প্রোফাইল
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </header>

                <section className="mb-5 flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white/70 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                    <div className="flex min-w-0 items-center gap-4">
                        {session?.user.image ? (
                
                            <Image
                            width={72}
                            height={72}
                                src={session.user.image}
                                alt={session.user.name}
                                className="h-16 w-16 shrink-0 rounded-2xl bg-gray-100 object-cover sm:h-[4.5rem] sm:w-[4.5rem]"
                            />
                        ) : (
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gray-200 text-lg font-semibold text-gray-700 sm:h-[4.5rem] sm:w-[4.5rem]">
                                {initials}
                            </div>
                        )}

                        <div className="min-w-0">
                            <p className="truncate text-lg font-medium text-gray-900">
                                {session?.user.name}
                            </p>
                            <p className="truncate text-sm text-gray-600 sm:text-base">
                                {session?.user.email}
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleSignOut}
                        className="btn h-10 min-h-0 w-full gap-1.5 rounded-lg border border-red-400 bg-transparent px-4 text-sm font-semibold text-red-600 shadow-none hover:border-red-500 hover:bg-red-50 sm:w-auto"
                    >
                        <SignOutIcon />
                        সাইন আউট
                    </button>
                </section>

                {/* Info card */}
                <section className="rounded-3xl border border-gray-200 bg-white/70 p-4 sm:p-5">
                    <h2 className="text-base font-semibold text-gray-900 sm:text-lg">
                        তথ্য
                    </h2>

                    <form
                        onSubmit={handleUpdate}
                        className="mt-6 space-y-3 px-0 pb-3 sm:px-5"
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-1.5 block text-sm font-medium text-gray-900"
                            >
                                নাম
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="input h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-800 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn h-10 min-h-0 w-full rounded-lg border-0 bg-green-700 text-sm font-semibold text-white shadow-lg shadow-green-700/30 hover:bg-green-800 disabled:bg-green-700/60"
                        >
                            {loading ? (
                                <span className="loading loading-spinner loading-sm" />
                            ) : (
                                "আপডেট"
                            )}
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
}