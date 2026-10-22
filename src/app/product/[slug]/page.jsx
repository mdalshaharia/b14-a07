export const instant = false

const toBn = (value, options) => Number(value).toLocaleString("bn-BD", options);

const toBnNumber = (number) => {
  if (number === undefined || number === null) return '';
  return new Intl.NumberFormat('bn-BD').format(number);
};

// ---- Demo data: replace with data from your API / MongoDB ----

function SummaryCard({ label, value, hint, tone }) {
    // console.log(value)
    const color = tone === "red" ? "text-red-600" : "text-green-700";
    return (
        <div className="rounded-2xl border border-gray-200 bg-[#fbfdfb] px-4 py-4 sm:px-5">
            <p className="text-xs text-gray-900">{label}</p>
            <p className={`mt-1 flex items-baseline gap-1 ${color}`}>
                <span className="text-2xl font-bold">{toBnNumber(value)}</span>
                <span className="text-sm">টাকা</span>
            </p>
            <p className="mt-1 text-xs text-gray-600">{hint}</p>
        </div>
    );
}

const ProductDetailPage = async ({ params }) => {
    //   const { markets, yesterdayPrice } = product;

    const { slug } = await params
    let product = null

    try {
        const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${slug}`)
        if (res.ok) {
            product = await res.json()
        }
    } catch (err) {
        console.error('Failed to fetch product:', err)
    }
    console.log(product)

    const min = Math.min(...product.markets.map((m) => m.min));
    const max = Math.max(...product.markets.map((m) => m.max));

    const diff = product.today - product.yesterday;
    const percent = product.yesterday ? (Math.abs(diff) / product.yesterday) * 100 : 0;
    const isUp = diff > 0;
    const isDown = diff < 0;
    const change = isUp ? "বেড়েছে" : isDown ? "কমেছে" : "অপরিবর্তিত আছে";
    const avg = toBnNumber(Math.round((min + max) / 2));
    // console.log(toBnNumber(avg));
    console.log(avg)
    return (
        <main className="min-h-screen bg-[#f1f5f0] px-3 py-5 sm:px-6 sm:py-7">
            <div className="mx-auto w-full max-w-6xl space-y-5">
            
                <header className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-[#fbfdfb] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                    <div className="flex min-w-0 items-center gap-4 sm:gap-5">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#f1f5f0] text-3xl sm:h-[4.5rem] sm:w-[4.5rem] sm:text-4xl">
                            <span aria-hidden="true">{product.categoryIcon}</span>
                        </div>
                        <div className="min-w-0">
                            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                                {product.nameBn}
                            </h1>
                            <p className="mt-0.5 text-xs text-gray-600">
                                প্রতি কেজি · {product.categoryNameBn}
                            </p>
                            <p className="mt-1.5 text-xs text-gray-800 sm:text-sm">
                                গতকালের তুলনায় আজ দাম <strong>{change}</strong>
                                {diff !== 0 && change !== "অপরিবর্তিত আছে" && (
                                    <span> · {toBn(Math.abs(diff))} টাকা</span>
                                )}
                            </p>
                        </div>
                    </div>

                    {/* Today's price box */}
                    <div className="w-full rounded-2xl bg-[#f1f5f0] px-6 py-4 text-center sm:w-auto sm:min-w-[11rem]">
                        <p className="text-xs text-gray-600">আজকের দাম</p>
                        <p className="text-4xl font-bold leading-tight text-gray-900">
                            {toBn(product.today)}
                        </p>
                        <p className="text-xs text-gray-600">টাকা / কেজি</p>
                        {(isUp || isDown) && (
                            <p
                                className={`mt-1 inline-flex items-center gap-1 text-xs font-semibold ${isUp ? "text-red-600" : "text-green-700"
                                    }`}
                            >
                                <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="currentColor" aria-hidden="true">
                                    <path d={isUp ? "M6 1.5 11 10.5H1z" : "M6 10.5 1 1.5h10z"} />
                                </svg>
                                {toBn(percent, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%
                            </p>
                        )}
                    </div>
                </header>
                <section className="rounded-3xl border border-gray-200 bg-[#fbfdfb] p-4 sm:p-5">
                    <h2 className="text-base font-bold text-gray-900 sm:text-lg">
                        দামের সারসংক্ষেপ
                    </h2>

                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                        <SummaryCard label="সর্বনিম্ন দাম" value={min} hint="সবচেয়ে কম দামের বাজার" tone="green" />
                        <SummaryCard label="সর্বাধিক দাম" value={max} hint="সবচেয়ে বেশি দামের বাজার" tone="red" />
                        <SummaryCard label="গড় দাম" value={(max+min)/2} hint="প্রতি কেজি-এর হিসাবে" tone="green" />
                    </div>

                    <h2 className="mt-7 text-base font-bold text-gray-900 sm:text-lg">
                        বাজারভিত্তিক আজকের দাম
                    </h2>

                    <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
                        <table className="table w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-200 bg-[#fbfdfb] text-xs font-medium text-gray-500">
                                    <th className="px-4 py-3 text-left font-medium">বাজার</th>
                                    <th className="px-4 py-3 text-left font-medium">বিভাগ</th>
                                    <th className="px-4 py-3 text-right font-medium">সর্বনিম্ন</th>
                                    <th className="px-4 py-3 text-right font-medium">সর্বাধিক</th>
                                    <th className="px-4 py-3 text-right font-medium">গড়</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product && product.markets.map((m, i) => (
                                    <tr
                                        key={i}
                                        className={`border-b border-gray-200 last:border-b-0 ${i % 2 === 1 ? "bg-[#f1f5f0]" : "bg-[#fbfdfb]"
                                            }`}
                                    >
                                        <td className="px-4 py-3 text-gray-900">{m.market}</td>
                                        <td className="px-4 py-3 text-gray-600">{m.division}</td>
                                        <td className="px-4 py-3 text-right text-gray-700">{toBnNumber(m.min)} টাকা</td>
                                        <td className="px-4 py-3 text-right text-gray-700">{toBnNumber(m.max)} টাকা</td>
                                        <td className="px-4 py-3 text-right text-gray-900">{toBnNumber((m.max + m.min) / 2)} টাকা</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default ProductDetailPage;
