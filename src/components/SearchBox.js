import React from 'react';

const SearchBox = ({searchChange}) => {
  return (
    <div className="pa2 mb4">
      <input className="pa3 bg-washed-blue" type="search" placeholder ="Search Friends" onChange={searchChange}/>
    </div>
  )
}

export default SearchBox;
