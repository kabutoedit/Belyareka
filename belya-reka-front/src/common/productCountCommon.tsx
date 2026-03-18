import { FC } from "react";
import type { IProductCountItem } from "ts/types/common.interface";

import { formatNumberWithCommas } from "helpers/formatNumber";

const incProduct = (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.09473 1V11.1895" stroke="#00AFEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M1 6.09375H11.1895" stroke="#00AFEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const decProduct = (
  <svg width="13" height="3" viewBox="0 0 13 3" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1.09375H11.1895" stroke="#00AFEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const ProductCountCommon: FC<IProductCountItem & { increment?: () => void; decrement: () => void }> = ({ price, count, increment, decrement }) => (
  <div className="catalog-item__counter_wrapper h-14 rounded-md mt-2">
    <div className="h-full flex justify-between items-center">
      <button
        onClick={decrement}
        className="catalog-item__counter_btn catalog-item__counter_btn--decrement w-10 h-full active:bg-gray-100 flex justify-center items-center">
        {/* <img src={`${import.meta.env.VITE_MONSTR_URL}/media/frontend_media/certificates/decrBtn.svg`} alt="decrBtn" /> */}
        {decProduct}
      </button>
      <div className="catalog-item__product-price_wrapper text-center">
        <p className="catalog-item__product-price font-bold text-lg text-jetblack leading-4">
          {formatNumberWithCommas(price, " ")}
          <u>c</u>
        </p>
        <span className="text-xs opacity-40">{count} штук</span>
      </div>
      <button
        onClick={increment}
        className="catalog-item__counter_btn catalog-item__counter_btn--increment w-10 h-full active:bg-gray-100 flex justify-center items-center">
        {/* <img src={`${import.meta.env.VITE_MONSTR_URL}/media/frontend_media/certificates/incrBtn.svg`} alt="incrBtn" /> */}
        {incProduct}
      </button>
    </div>
  </div>
);

export default ProductCountCommon;
