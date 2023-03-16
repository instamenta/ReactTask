
import './App.css'
import { useEffect, useState } from "react"
import { Navbar } from './components/Navbar/Navbar'
import { Catalog } from './components/Catalog/Catalog'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Catalog/>
    </div>
  )
}

export default App
