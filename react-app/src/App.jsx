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
          <a href="#" data-testid="logo">Support Desk</a>
        </div>
        <div className="search-box">
          {/* Sets the searchValue */}
          <input onChange={(e) => setSearchValue(e.target.value)}
            className="search"
            type="text"
            placeholder="Search"
            data-testid="search"
          />
          <img
            src="/icon-search.svg"
            alt="search-icon"
            className="nav-icon"
            data-testid="nav-icon"
          />
        </div>
      </nav>
      {/* Passes the setSearchValue to the Catalog component */}
      <Catalog props={searchValue} />
    </div>
  )
}
export default App