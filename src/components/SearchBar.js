import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const SearchBar = ({ userSearch }) => {
  const userTypedText = (e) => {
    userSearch(e.target.value);
  };

  return (
    <div className="search-bar-section">
      <h2 className="search-bar-headline">Missions</h2>
    <InputGroup className="search-bar">
      <FormControl
        placeholder="Search mission"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        className="mb-3"
        onChange={userTypedText}
      />
    </InputGroup>
    </div>
  );
};

export default SearchBar;
