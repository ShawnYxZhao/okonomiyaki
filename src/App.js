
//React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Travel from './pages/Travel';
import Board from './pages/Board';
import Navbar from "./components/Navbar";
import Message from './pages/Message';
import Jotting from './pages/Jotting';
import { Provider } from 'react-redux';
import store from './store';

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
          <Route path="/message" element={<Message/>}/>
          <Route path="/jotting" element={<Jotting/>}/>
        </Routes>
        </main>
      </>
    );
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="bg-white min-h-screen w-screen">
            { main }
          </div>
        </BrowserRouter>
      </Provider>
    );
}

export default App;