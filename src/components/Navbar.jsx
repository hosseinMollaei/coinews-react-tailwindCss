import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ setSearch }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="w-full h-[120px] flex flex-col   items-center justify-around md:flex-row">
      <Link to={"/"}>
        <h1 className="text-slate-200 text-3xl ">
          <span className="text-green-400">COI</span>N
          <span className="text-red-500">EWS</span>
        </h1>
      </Link>
      <div className={location.pathname != "/" ? "hidden" : "w-2/3 md:w-1/3"}>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          className="w-5/6 h-[35px] mr-3 rounded-md bg-slate-200 outline-none pl-3"
          placeholder="search here"
        />
      </div>
    </div>
  );
};

export default Navbar;
