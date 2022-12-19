import React from "react";
import "./index.css"
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Countries from "./components/Countries"
import Country from "./Country"


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Countries />} />
      <Route path="/countries" element={<Countries />} />
      <Route path="/countries/:names" element={<Country />}/>
    </Routes>
    </>
  )
}

export default App;