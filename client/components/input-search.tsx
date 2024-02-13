import React from "react";
import { CiSearch } from "react-icons/ci";

const InputSearch = () => {
  return (
    <div className="row relative hidden sm:flex">
      <input type="text" placeholder="Search..." className="input-form pr-8" />
      <button className="absolute right-2 top-1/2 -translate-y-1/2">
        <CiSearch size={20} color="gray" />
      </button>
    </div>
  );
};

export default InputSearch;
