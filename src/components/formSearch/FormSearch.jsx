import React from "react";
import { MdSearch } from "react-icons/md";
import "./FormSearch.scss";

function FormSearch() {
  return (
    <>
      <div className="search-bar-container">
        <div className="search">
          <MdSearch className="search__icon" />
          <input type="text" placeholder="Search for a dish" />
        </div>
      </div>
    </>
  );
}

export default FormSearch;
