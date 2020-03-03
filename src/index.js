import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  const [inp1, setinp1] = useState(0);
  const [inp2, setinp2] = useState(0);
  const [sum, setsum] = useState(inp1 + inp2);
  function addinps() {
    setsum(inp1 + inp2);
  }

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input
          type="number"
          placeholder="0"
          value={inp1}
          onChange={e => setinp1(+e.target.value)}
        />
        <input
          type="number"
          placeholder="0"
          value={inp2}
          onChange={e => setinp2(+e.target.value)}
        />
      </div>

      <button onClick={addinps}>Add Them!</button>
      <h2>{sum}</h2>

      <ScotchInfoBar seriesNumber={5} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
