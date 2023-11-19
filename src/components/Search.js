// Search.js
import React from "react";
import { Input } from "semantic-ui-react";

function Search({ searchTerm, onSearchChange }) {
  return (
    <div className="ui search">
      <Input
        icon="search"
        placeholder="Search Pokemon..."
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default Search;
