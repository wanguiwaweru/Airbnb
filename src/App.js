import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Routes>
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/" element={<Home />} />

        </Routes>

        <Footer />
      </ Router>
    </div>
  );
}

export default App;