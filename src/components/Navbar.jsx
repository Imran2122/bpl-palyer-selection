import React from "react";

const Navbar = ({availableBalance}) => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
       <img className="w-12" src='/assets/logo.png' alt="" />
      </div>
      <div className="flex justify-center gap-2">
        <span className="font-bold">{availableBalance}</span>
        <span className="font-bold">coin</span>
        <img className="h-6" src='/assets/dollar 1@2x.png' alt="" />
      </div>
    </div>
  );
};

export default Navbar;
