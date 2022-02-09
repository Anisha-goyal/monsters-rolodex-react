import React from "react";
import './search-box.styles.css';

//props come as a big object so placeholder and handleChange are extracted separately here (Destructuring - curly braces due to this)
//props directly can also be used
export const SearchBox = ({placeholder,handleChange}) => {
   return(
        <input className="search" type="search" placeholder={placeholder} onChange={handleChange}></input>
   );
}