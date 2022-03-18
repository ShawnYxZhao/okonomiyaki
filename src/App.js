import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen w-screen">
      <Navbar/>
      <main className="h-auto w-content mx-auto pt-32">
        <Outlet/>
      </main>
    </div>
  );
}

export default App;