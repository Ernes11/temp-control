import React, { useState } from "react";
import JSONDATA from "./MOCK_DATA.json";
import "./search.css";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      {JSONDATA.filter((id) => {
        if (searchTerm === "") {
          return id;
        } else if (
          id.first_name.toLocaleLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return id;
        }
      }).map((id, key) => {
        return (
          <ul className="user" key={key}>
            <li>{id.first_name}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default SearchFilter;
