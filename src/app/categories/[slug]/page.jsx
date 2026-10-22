
"use client";

import CategoryCard from "@/components/Card/CategoryCard";
import ProductContext from "@/Context/ProductContext";
import { useParams } from "next/navigation";
import { Suspense, useContext, useMemo, useState } from "react";

const toBn = (value, options) => Number(value).toLocaleString("bn-BD", options);

const CategoryPage = () => {

    const params = useParams()
  const category = params.slug
  // console.log( 'from params' ,category)
  const [sortBy, setSortBy] = useState("default");

    const { products } = useContext(ProductContext)

    const filteredProducts = useMemo(
      () => products.filter((product) => product?.category === category),
      [products, category],
    );
    // console.log(filteredProducts)


    const sortedList = useMemo(() => {
    const sorted = [...filteredProducts];
    if (sortBy === "দাম: কম থেকে বেশি") {
      sorted.sort((a, b) => (Number(a.today)) - (Number(b.today)));
    } else if (sortBy === "দাম: বেশি থেকে কম") {
       sorted.sort((a, b) => (Number(b.today)) - (Number(a.today)));
    }
    return sorted;
  }, [filteredProducts, sortBy]);

  return (
    <main className="min-h-screen bg-[#f1f5f0] px-3 py-5 sm:px-6 sm:py-6">
      <div className="mx-auto w-full max-w-6xl space-y-4">
        <header className="flex items-center gap-3 rounded-3xl border border-gray-200 bg-[#fbfdfb] px-4 py-5 sm:px-5 sm:py-6">
          <span className="text-3xl sm:text-4xl" aria-hidden="true">
            {filteredProducts[0]?.categoryIcon}
          </span>
          <div className="min-w-0">
            <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
              {filteredProducts[0]?.categoryNameBn}
            </h1>
            <p className="text-xs text-gray-600 sm:text-sm">
              {toBn(filteredProducts.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </header>

        <div className="flex items-center justify-end gap-3 rounded-3xl border border-gray-200 bg-[#fbfdfb] px-4 py-4 sm:px-5 sm:py-5">
          <label htmlFor="sort" className="text-sm text-gray-600">
            সাজান
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select select-sm h-9 min-h-0 rounded-lg border border-gray-300 bg-white text-xs font-medium text-gray-800 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
          >
            <option value="default">ডিফল্ট</option>
            <option value="দাম: কম থেকে বেশি">দাম: কম থেকে বেশি</option>
            <option value="দাম: বেশি থেকে কম">দাম: বেশি থেকে কম</option>
          </select>
        </div>

        <p className="text-xs text-gray-600">
          মোট {toBn(sortedList.length)}টি পণ্য দেখানো হচ্ছে
        </p>

        {sortedList.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sortedList.map((p,idx) => (
              <CategoryCard key={idx} product={p} />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-gray-200 bg-[#fbfdfb] p-6 text-center text-sm text-gray-600">
            এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
          </p>
        )}
      </div>
    </main>
  );
}

export default CategoryPage