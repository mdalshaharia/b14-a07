
import React from 'react';

const toBn = (value, options) => Number(value).toLocaleString("bn-BD", options);

const CategoryCard = ({product}) => {
    // console.log('from card compo', product)
    return (
    <div className="rounded-2xl border border-gray-200 bg-[#fbfdfb] p-3 sm:p-3.5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1f5f0] text-xl sm:h-[2.6rem] sm:w-[2.6rem]">
          <span aria-hidden="true">{product.categoryIcon}</span>
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-sm font-bold text-gray-900 sm:text-base">
            {product.nameBn}
          </h3>
          <p className="truncate text-xs text-gray-800">{product.unit}</p>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-[11px] text-gray-900">আজকের দাম</p>
        <div className="mt-0.5 flex items-center justify-between gap-2">
          <p className="flex items-baseline gap-1 text-gray-900">
            <span className="text-lg font-bold">{toBn(product.today)}</span>
            <span className="text-xs">টাকা</span>
          </p>
         badge
        </div>
      </div>
    </div>
  );
};

