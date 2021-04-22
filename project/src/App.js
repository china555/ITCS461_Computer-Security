import "./App.css";
import { HeaderBar } from "./components/header";
import { Converter } from "./components/Converter";
function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Converter />
    </div>
  );
}

export default App;
