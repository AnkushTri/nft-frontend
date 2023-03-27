import React from 'react';
import { BsSearch,BsArrowRight } from 'react-icons/bs';

//Internal imports
import Style from './SearchBar.module.css';



const SearchBar = () => {

  
  return (
    <div className={Style.SearchBar}>
      <div className={Style.SearchBar_box}>
        <BsSearch className={Style.SearchBar_box_icon} />
        <input
          type="text"
          placeholder="Type your keyword..."
          // onChange={(e) => setSearchItem(e.target.value)}
          // value={searchItem}
        />
        <BsArrowRight className={Style.SearchBar_box_icon} />
      </div>
    </div>
  );
}

export default SearchBar;