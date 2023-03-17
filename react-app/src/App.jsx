
import './App.css'
import { useEffect, useState } from "react"
import { Catalog } from './components/Catalog/Catalog'

function App() {
  const [ searchValue, setSearchValue] = useState('')

  return (
    
    <div className="App">
      <nav>
            <div className="logo">
                <a href="#">Support Desk</a>
            </div>
            <div className="search-box">
                <input onChange={(e) => {
                    setSearchValue(e.target.value)
                    console.log(searchValue)
                    }} className="search" type="text" placeholder="Search" />
                <img src="./../../public/icon-search.svg" alt="search-icon" className="nav-icon" />
            </div>
        </nav>
      <Catalog props={searchValue}/>
    </div>
  )
}

export default App
