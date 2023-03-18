import React from 'react';
import { useState } from "react"
import { Catalog } from './components/Catalog/Catalog'
import './App.css'

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="App">
      <nav>
        <div className="logo">
          <a href="#">Support Desk</a>
        </div>
        <div className="search-box">
          {/* Sets the searchValue */}
          <input onChange={(e) => setSearchValue(e.target.value)}
            className="search"
            type="text"
            placeholder="Search" />
          <img src="./../../public/icon-search.svg" alt="search-icon" className="nav-icon" />
        </div>
      </nav>
      {/* Passes the setSearchValue to the Catalog component */}
      <Catalog props={searchValue} />
    </div>
  )
}
export default App