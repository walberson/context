import { useContext } from "react";
import "./App.css";
import { ColorContext } from "./main";

function App() {
  const { color, name, email } = useContext(ColorContext);
  return (
    <div className="App">
      <h1>{color}</h1>
      <h1>{name}</h1>
      <h1>{email}</h1>
    </div>
  );
}

export default App;
