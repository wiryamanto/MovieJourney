import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import CardTitle from "./Components/CardTitle";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App bg-gray-800">
      <Navbar />
      <Carousel />
      <CardTitle/>
    </div>
  );
}

export default App;
