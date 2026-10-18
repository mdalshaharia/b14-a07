import { GoTriangleUp, GoTriangleDown } from "react-icons/go";


const toBn = (value, options) =>
  Number(value).toLocaleString("bn-BD", options);



const ItemCard = ({ item }) => {
  const { nameBn, unit, price, change, image, today } = item;
  console.log(item)

  return (
    <article className="w-full rounded-3xl border border-gray-200 bg-[#fbfdfb] p-4 sm:p-5">
      <div className="flex items-center gap-4 sm:gap-5">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#f1f5f0] text-3xl sm:h-24 sm:w-24 sm:text-5xl">
          <span aria-hidden="true">{image}</span>
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-xl font-bold text-gray-900 sm:text-2xl">
            {nameBn}
          </h3>
          <p className="mt-1 truncate text-sm text-gray-800 sm:mt-2 sm:text-lg">
            প্রতি কেজি
          </p>
        </div>
      </div>
      <div className="mt-5 sm:mt-6">
        <p className="text-sm text-gray-900 sm:text-base">আজকের দাম</p>

        <div className="mt-1 flex items-center justify-between gap-3">
          <p className="flex items-baseline gap-1.5 text-gray-900">
            <span className="text-2xl font-bold sm:text-3xl">{toBn(today)}</span>
            <span className="text-sm sm:text-xl">টাকা</span>
          </p>
          {
            change.dir === 'flat' ?
            <span
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#f1f5f0] text-black px-3 py-1.5 text-xs font-semibold sm:px-4 sm:py-2 sm:text-sm`}
            >
              - {change.pct}%
            </span>
          :
          <span
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#f1f5f0] px-3 py-1.5 text-xs font-semibold sm:px-4 sm:py-2 sm:text-sm ${change.dir === 'up' ? "text-red-600" : "text-green-700"
              }`}
          >
            {change.dir === 'up' ? <GoTriangleUp /> : <GoTriangleDown />
            }
            {change.pct}%
          </span>
}
        </div>
      </div>
    </article>
  );
}

export default ItemCard