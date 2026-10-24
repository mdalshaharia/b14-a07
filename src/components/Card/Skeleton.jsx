const bar = "animate-pulse rounded bg-gray-200";
const ProductCardSkeleton = () => {
  return (
    <div
      className="rounded-2xl border border-gray-200 bg-[#fbfdfb] p-3 sm:p-3.5"
      aria-hidden="true"
    >
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 shrink-0 rounded-xl sm:h-[2.6rem] sm:w-[2.6rem] ${bar}`} />
        <div className="min-w-0 flex-1 space-y-2">
          <div className={`h-4 w-3/5 ${bar}`} />
          <div className={`h-3 w-2/5 ${bar}`} />
        </div>
      </div>

      <div className="mt-3">
        <div className={`h-3 w-16 ${bar}`} />
        <div className="mt-2 flex items-center justify-between gap-2">
          <div className={`h-6 w-24 ${bar}`} />
          <div className={`h-6 w-14 rounded-full ${bar}`} />
        </div>
      </div>
    </div>
  );
}

 const ProductGridSkeleton = ({ count = 6 }) => {
  return (
    <div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      role="status"
      aria-busy="true"
      aria-label="লোড হচ্ছে"
    >
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

export default ProductGridSkeleton