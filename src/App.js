import { useState } from "react";
import "./App.scss";
import Hero from "./components/Hero";

function App() {  
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Wellcome to React</h1>

      <p>{ count }</p>
      <button onClick={()=> setCount(count + 1)} >Increase</button>

      <Hero name="React.Memo" />
    </div>
  );
}

export default App;
