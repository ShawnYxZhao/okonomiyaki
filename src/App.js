// import Home from "./pages/Home"
// import Navbar from "./components/Navbar";
// import { Outlet } from "react-router-dom";

// export const App = () => {
//   return (
//     <div className="bg-white min-h-screen w-screen">
//       <Navbar/>
//       <main className="h-auto w-content mx-auto pt-32">
//         <Outlet/>
//       </main>
//     </div>
//   );
// }

//React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Travel from './pages/Travel';
import Board from './pages/Board';
import Navbar from "./components/Navbar";


const App = () => {
    return (
        <BrowserRouter>
          <div className="bg-white min-h-screen w-screen">
              <Navbar/>
              <main className="h-auto pt-32">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/post/:id" element={<Blog/>}/>
                <Route path="/travel" element={<Travel/>}/>
                <Route path="/dashboard" element={<Board/>}/>
              </Routes>
              </main>
          </div>
        </BrowserRouter>
    );
}

export default App;