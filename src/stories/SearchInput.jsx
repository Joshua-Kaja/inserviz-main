import React, { useState } from "react";
import jobimg from "../assets/job4.svg";
import categoryimg from "../assets/category.svg";
import searchimg from "../assets/search-2.svg";
import "./SearchInput.css";
import Search from "./Search";

const SearchInput = ({onClick}) => {
  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const [selected, setSelected] = useState();

  function onClick(e) {
    e.preventDefault();
    setSelected(selected);

  }

  

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
      <div className="dropdown_Search">
        <img src={categoryimg} alt="" style={{width:'17px'}}/>
        <Search/>
      </div>
      <div className="button-click">
        <img className="img" src={searchimg} alt="" />
        <button style={{color:'#fff'}} onClick={onClick}>Search</button>
      </div>
    </div>
  );
};

export default SearchInput;
