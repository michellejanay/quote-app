import './App.css'
import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Quotes from './pages/Quotes'
import RandomQuote from './pages/RandomQuote'
import Index from './pages/Index'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/quotes/">Quotes</Link>
            </li>
            <li>
              <Link to="/random-quote/">Random quotes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quotes/" element={<Quotes />} />
          <Route path="/random-quote/" element={<RandomQuote />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
