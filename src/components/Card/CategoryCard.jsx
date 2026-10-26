
import React from 'react';
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

const toBn = (value, options) => Number(value).toLocaleString("bn-BD", options);

const CategoryCard = ({product}) => {
  // console.log(product)
    return (
    <div className="rounded-2xl border border-gray-200 bg-[#fbfdfb] p-3 sm:p-3.5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1f5f0] text-xl sm:h-[2.6rem] sm:w-[2.6rem]">
          <span aria-hidden="true">{product?.categoryIcon}</span>
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-sm font-bold text-gray-900 sm:text-base">
            {product?.nameBn}
          </h3>
          <p className="truncate text-xs text-gray-800">{product?.unit === 'litre' ? 'লিটার' : product?.unit === 'kg' ? 'কেজি' : product?.unit === 'dozen' ? 'ডজন' : 'পিস'}</p>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-[11px] text-gray-900">আজকের দাম</p>
        <div className="mt-0.5 flex items-center justify-between gap-2">
          <p className="flex items-baseline gap-1 text-gray-900">
            <span className="text-lg font-bold">{toBn(product.today)}</span>
            <span className="text-xs">টাকা</span>
          </p>
           {
                     product?.change.dir === 'flat' ?
                     <span
                       className={`inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#f1f5f0] text-black px-3 py-1.5 text-xs font-semibold sm:px-4 sm:py-2 sm:text-sm`}
                     >
                       - {product?.change.pct}%
                     </span>
                   :
                   <span
                     className={`inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#f1f5f0] px-3 py-1.5 text-xs font-semibold sm:px-4 sm:py-2 sm:text-sm ${product?.change.dir === 'up' ? "text-red-600" : "text-green-700"
                       }`}
                   >
                     {product?.change.dir === 'up' ? <GoTriangleUp /> : <GoTriangleDown />
                     }
                     { product?.change.dir === 'down' ? toBn(Math.abs(product?.change.pct)) :  toBn(product?.change.pct)}%
                   </span>
         }
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

