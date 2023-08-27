import React from "react";
import { BiSearch } from "react-icons/bi";
import "./Search.css";

const Search = ({ value, onChange }) => {
  return (
    <div className="search_users">
      <span className="input">
        <input
          type="text"
          placeholder="Search Users"
          value={value}
          onChange={onChange}
        />
      </span>

      <span className="search">
        <BiSearch size={18} />
      </span>
    </div>
  );
};

export default Search;
