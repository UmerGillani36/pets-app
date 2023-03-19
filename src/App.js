
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inventory from './pages/Inventory/Inventory';
import Search from './pages/Search/Search';
import About from './pages/About/About';
import NoPage from './pages/NoPage';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home />}/>
        <Route  path="inventory" element={<Inventory />} />
        <Route  path="search" element={<Search />} />
        <Route  path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
