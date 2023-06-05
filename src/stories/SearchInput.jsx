import React, { useState } from "react";

import jobimg from "../assets/job4.svg";

import categoryimg from "../assets/category.svg";

import searchimg from "../assets/search-2.svg";

import "./SearchInput.css";
import Search from "./Search";

const SearchInput = () => {
  const [value, setValue] = useState();
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const [selected, setSelected] = useState();

  const handleSearchClick = () => {
    // onclick('');
    setSelected(selected);
  };

  return (
    <div className="Search">
      <div className="SearchInput">
        <img src={jobimg} alt="" />

        <input
          type="text"
          value={value}
          placeholder="Job Title"
          onChange={onChange}
        />
      </div>
      <div className="Dropdown-Search">
        <img src={categoryimg} alt="" />

        <Search />
      </div>
      <div className="button-click">
        <img className="img" src={searchimg} alt="" />
        <button onClick={handleSearchClick}>Search</button>
      </div>
    </div>
  );
};

export default SearchInput;
