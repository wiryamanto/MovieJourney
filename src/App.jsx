import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Card from "./Components/Card";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App bg-gray-800">
      <Navbar />
      <Carousel />
      <Card/>
    </div>
  );
}

export default App;
