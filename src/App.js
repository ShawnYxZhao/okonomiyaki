import Home from "./components/Home"
import Navbar from "./components/Navbar";

export const App = () => {
  return (
    <div className=" bg-neutral-50 h-screen w-screen">
      <Navbar/>
      <Home/>
    </div>
  );
}