import React from "react";
import Coinitem from "./Coinitem";
import { Link } from "react-router-dom";

const Coins = ({ coins }) => {
  return (
    <div className="container mx-auto lg:max-w-[1240px] ">
      <div className="w-full h-[50px] flex justify-between items-center bg-black/50 mb-3">
        <h2 className="text-slate-200 text-lg ml-[40px] w-[200px] ">coin</h2>
        <h2 className="text-slate-200 ml-[20px]  text-lg">price</h2>
        <h2 className="text-slate-200  text-lg">24h</h2>
        <h2 className="hidden sm:block text-slate-200 mr-[10px] text-lg">
          Market cap
        </h2>
      </div>
      {coins.map((coin) => {
        return (
          <Link to={`/coin/${coin.id}`}>
            <Coinitem key={coin.market_cap_rank} {...coin} />
          </Link>
        );
      })}
    </div>
  );
};

export default Coins;
