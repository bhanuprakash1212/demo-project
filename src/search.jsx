import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ServicePage from './service';

const SearchBar = ({setSearchTerm,searchTerm}) => {
const [search,setSearch]=useState()

  const handleChange = (event) => {
    setSearch(event.target.value);
   
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your search logic here
setSearchTerm(search)




  };

  return (
    <form onSubmit={handleSubmit} className="d-flex">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
      <Button variant="primary" type="submit">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
      </Button>
    </form>
  );
};

export default SearchBar;
