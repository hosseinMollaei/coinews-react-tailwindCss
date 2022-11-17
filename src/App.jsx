import Navbar from "./components/Navbar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/Coins";
import Coin from "./routes/Coin";
import { Route, Routes } from "react-router-dom";

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
function App() {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setCoins(res.data));
  }, []);
  console.log(coins);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search)
  );

  return (
    <div id="page" className=" w-full h-full ">
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route
          path="/"
          element={<Coins coins={search.length > 0 ? filteredCoins : coins} />}
        />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
