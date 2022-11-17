import React from "react";

const Coinitem = ({
  name,
  id,
  image,
  market_cap,
  symbol,
  market_cap_rank,
  current_price,
  price_change_percentage_24h,
}) => {
  return (
    <div className="w-full h-[50px] flex justify-between items-center bg-black/50 mb-3">
      <div className="w-[300px] h-full">
        <div className="w-fit h-full flex justify-between items-center pl-2">
          <h2 className="text-slate-200 mr-2">{market_cap_rank}-</h2>

          <img src={image} className="w-[50px] h-[45px] mx-2" />
          <h2 className="text-slate-200 text-lg mr-1">{name}</h2>

          <h2 className="text-slate-400 text-sm">{symbol}</h2>
        </div>
      </div>

      <h2 className="text-slate-200">${current_price}</h2>
      <h2
        className={
          price_change_percentage_24h > 0
            ? "text-green-500 pr-2"
            : "text-red-500 pr-2"
        }
      >
        {price_change_percentage_24h.toFixed(2)}%
      </h2>
      <h2 className=" hidden sm:block text-slate-200 mr-2">${market_cap}</h2>
    </div>
  );
};

export default Coinitem;
