
//React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Travel from './pages/Travel';
import Board from './pages/Board';
import Navbar from "./components/Navbar";

import { useState } from 'react';

const App = () => {
    const main = (
      <>
        <Navbar/>
        <main className="h-auto pt-32">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/post/:id" element={<Blog/>}/>
          <Route path="/travel" element={<Travel/>}/>
          <Route path="/dashboard" element={<Board/>}/>
        </Routes>
        </main>
      </>
    );
    return (
        <BrowserRouter>
          <div className="bg-white min-h-screen w-screen">
            { main }
          </div>
        </BrowserRouter>
    );
}

export default App;