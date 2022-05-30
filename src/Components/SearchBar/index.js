import React, { useState } from 'react'
import "./Style.css"

import { Input } from 'antd';


const SearchBar = () => {
    const onSearch = value => console.log(value);
  return (
      <div className='Search_Box'>
        <div></div>
        <Input 
          className='Search_Term' 
          placeholder=' Find anything home'
          />
        <button>Tìm kiếm</button>
    </div>
  )
}

export default SearchBar;