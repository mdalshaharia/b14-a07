import Link from "next/link";

export default function EmptyState({
  code = "৪০৪",
  title = "কোনো পণ্য পাওয়া যায়নি",
  message = "আপনি যে ক্যাটাগরিটি খুঁজছেন তা নেই, অথবা এতে এখনো কোনো পণ্য যোগ করা হয়নি।",
  ctaLabel = "হোম পেজে ফিরে যান",
  ctaHref = "/",
}) {
  return (
    <section className="flex w-full items-center justify-center bg-[#f1f5f0] px-3 py-10 sm:px-6 sm:py-16">
      <div className="w-full max-w-lg rounded-3xl border border-gray-200 bg-[#fbfdfb] px-5 py-10 text-center sm:px-8 sm:py-14">
        <div
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#f1f5f0] text-4xl sm:h-24 sm:w-24 sm:text-5xl"
          aria-hidden="true"
        >
          🧺
        </div>

        <p className="mt-5 text-5xl font-bold tracking-wide text-green-700 sm:text-6xl">
          {code}
        </p>

        <h1 className="mt-3 text-xl font-bold text-gray-900 sm:text-2xl">
          {title}
        </h1>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-600 sm:text-base">
          {message}
        </p>

        <Link
          href={ctaHref}
          className="btn mt-7 h-10 min-h-0 rounded-lg border-0 bg-green-700 px-5 text-sm font-semibold text-white shadow-lg shadow-green-700/30 hover:bg-green-800"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}