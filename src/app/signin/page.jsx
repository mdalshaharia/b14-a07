
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signUp, signIn } from "../lib/auth-client";
import { toast } from 'react-toastify';
import { useRouter, useSearchParams } from "next/navigation";
// import { Spinner, toast } from "@heroui/react";
// import { authClient, signUp } from "@/app/lib/auth-client";


const fieldClass =
    "input h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-800 " +
    "placeholder:text-gray-500 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20 sm:h-12";

const labelClass = "mb-1.5 block text-sm font-medium text-gray-900";

const SignInPage = () => {

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const searchParams = useSearchParams();
    const message = searchParams.get('message');
    const router = useRouter()

    useEffect(() => {
        if (message === 'unauthorized') {
            toast.warn("দয়া করে প্রথমে লগইন করুন!");
        }
    }, [message]);

    const handleSignIn = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const ResData = Object.fromEntries(formData.entries());

        try {
            setLoading(true);
            setError('');

            const { data, error } = await signIn.email({
                email: ResData.email,
                password: ResData.password,
            });
            // console.log(data)
            if (data) {
                toast.success("লগইন সফল হয়েছে। হোম পেজে নেওয়া হচ্ছে...");
                setTimeout(() => {
                    router.push("/");
                    router.refresh();
                }, 3000);
            }
            if (error) {
                // console.log("Sign-in error:", error.message);
                if (error.message === 'Invalid email or password') {
                    setError("ইমেইল বা পাসওয়ার্ড ভুল হয়েছে। আবার চেষ্টা করুন।");
                } else {
                    setError(error.message || "লগইন করতে সমস্যা হচ্ছে।");
                }
                return;
            }

        } catch (err) {
            console.error("Unexpected error:", err);
            setError("কিছু একটা সমস্যা হয়েছে । আবার চেষ্টা করুন।");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            setLoading(true);
            setError('');

            const { data, error } = await signIn.social({
                provider: "google",
                callbackURL: "/",
            });
            if (data) {
                toast.success("গুগল লগইন সফল হয়েছে। হোম পেজে নেওয়া হচ্ছে...");
            }
            if (error) {
                console.error("Google sign-in error:", error);
                setError(error.message || "গুগল লগইন করতে সমস্যা হচ্ছে।");
                setLoading(false);
                return;
            }

        } catch (err) {
            console.error("Unexpected error during social login:", err);
            setError("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
        } finally {
            setLoading(false);
        }
    };
    const handleGithubSignIn = async () => {
        try {
            setLoading(true);
            setError('');

            const { data, error } = await signIn.social({
                provider: "github",
                callbackURL: "/",
            });
            if (data) {
                toast.success("GitHub লগইন সফল হয়েছে। হোম পেজে নেওয়া হচ্ছে...");
            }
            if (error) {
                console.error("GitHub sign-in error:", error);
                setError(error.message || "GitHub লগইন করতে সমস্যা হচ্ছে।");
                setLoading(false);
                return;
            }

        } catch (err) {
            console.error("Unexpected error during social login:", err);
            setError("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#f1f5f0] px-4 py-10 sm:py-14">
            <div className="mb-6 text-center sm:mb-7">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    সাইন ইন
                </h1>
                <p className="mt-2 text-sm text-gray-500">
                    বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
                </p>
            </div>

            <div className="w-full max-w-[22.5rem] rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:max-w-[26rem] sm:p-6">
                <form onSubmit={handleSignIn} className="space-y-4" noValidate>

                    <div>
                        <label htmlFor="email" className={labelClass}>ইমেইল</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@example.com"

                            required
                            className={fieldClass}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className={labelClass}>পাসওয়ার্ড</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            placeholder="কমপক্ষে ৮ অক্ষর"
                            required
                            minLength={8}
                            className={fieldClass}
                        />
                    </div>

                    {error && (
                        <p role="alert" className="text-sm text-red-600">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn h-11 min-h-0 w-full rounded-xl border-0 bg-green-700 text-sm font-semibold text-white shadow-lg shadow-green-700/30 hover:bg-green-800 disabled:bg-green-700/60 sm:h-12"
                    >
                        {loading ? (
                            <span className="loading loading-spinner loading-md"></span>
                        ) : (
                            "সাইন ইন করুন"
                        )}
                    </button>
                </form>
                <div className="my-4 flex items-center gap-3 text-xs text-gray-500">
                    <span className="h-px flex-1 bg-gray-200" />
                    অথবা
                    <span className="h-px flex-1 bg-gray-200" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <button onClick={handleGoogleSignIn}
                        type="button"
                        className="btn flex items-center justify-center h-11 gap-1 rounded-xl border border-gray-200 bg-white px-2 text-[11px] font-semibold text-gray-900 shadow-none hover:bg-gray-50 sm:text-xs"
                    >
                        {loading ? (
                            <span className="loading loading-spinner loading-md"></span>
                        ) : (

                            <>
                                <FcGoogle className="text-md" />
                                <span className="text-xs">Google দিয়ে চালিয়ে যান</span>
                            </>
                        )
                        }
                    </button>
                    <button
                        onClick={handleGithubSignIn}
                        type="button"
                        className="btn flex items-center justify-center h-11 gap-1 rounded-xl border border-gray-200 bg-white px-2 text-[11px] font-semibold text-gray-900 shadow-none hover:bg-gray-50 sm:text-xs"
                    >
                        {
                            loading ? <span className="loading loading-spinner loading-md"></span> :
                                <>
                                    <FaGithub className="text-md" />
                                    <span className="text-xs">GitHub দিয়ে চালিয়ে যান</span>
                                </>
                        }
                    </button>
                </div>

                <p className="mt-5 text-center text-sm text-gray-800">
                    অ্যাকাউন্ট নেই? {" "}
                    <Link
                        href="/signup"
                        className="font-medium text-green-700 hover:underline"
                    >
                        সাইন আপ করুন
                    </Link>
                </p>
            </div>

            <Link
                href="/"
                className="mt-6 text-sm text-gray-500 transition-colors hover:text-gray-800"
            >
                ← হোম পেজে ফিরে যান
            </Link>
        </main>
    );
}

export default SignInPage;