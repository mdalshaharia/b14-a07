import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import Link from "next/link";



const toBn = (value, options) =>
  Number(value).toLocaleString("bn-BD", options);



const ItemCard = ({ item }) => {
  const { nameBn, unit, price, change, image, today, id } = item;
  // console.log(item)

  return (
    <Link href={`/product/${id}`} className="w-full rounded-3xl border border-gray-200 bg-[#fbfdfb] p-4 sm:p-5">
      <div className="flex items-center gap-4 sm:gap-5">
        <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-2xl bg-[#f1f5f0]  sm:h-18 sm:w-18 sm:text-5xl">
          <span className=" text-md text-gray-500" aria-hidden="true">{image}</span>
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-lg font-bold text-gray-900">
            {nameBn}
          </h3>
          <p className="mt-1 truncate text-sm text-gray-800 sm:mt-2">
            প্রতি {unit === 'litre' ? 'লিটার' : unit === 'kg' ? 'কেজি' : unit === 'dozen' ? 'ডজন' : 'পিস'}
          </p>
        </div>
      </div>
      <div className="mt-3 sm:mt-3">
        <p className="text-sm text-gray-900 sm:text-base">আজকের দাম</p>

        <div className="mt- flex items-center justify-between gap-3">
          <p className="flex items-baseline gap-1.5 text-gray-900">
            <span className="text-xl font-bold sm:text-lg">{toBn(today)}</span>
            <span className="text-sm sm:text-md">টাকা</span>
          </p>
          {
            change.dir === 'flat' ?
            <span
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#f1f5f0] text-gray-700 px-3 py-1.5 text-xs font-semibold sm:px-4 sm:py-2 sm:text-sm`}
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
            { change.dir === 'down' ? toBn(Math.abs(change.pct)) :  toBn(change.pct)}%
          </span>
}
        </div>
      </div>
    </Link>
  );
}


export default ItemCard