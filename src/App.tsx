import {ReactNode, useState} from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/> as ReactNode} /> {/* type casted, SHOULD be safe*/}
              {/*<Route path="/register" element={<Register />} />*/}
          </Routes>
      </BrowserRouter>
  )
}

export default App
