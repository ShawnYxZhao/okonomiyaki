import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div className=" bg-gray-50 h-screen w-screen">
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;