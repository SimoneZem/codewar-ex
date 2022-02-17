import React from "react";
import { FunctionInOrder } from "./components/FunctionInOrder";
import "./App.css";

const sequence = [];
let iterable = "AAAABBBCCDAABBB"; //dichiaro la funzione iterable
for (let i = 0; i < iterable.length; i++) {
  // inizializzo i con valore 0, la condizione è che i < della quantità di caratteri, incremente di 1
  if (iterable[i] !== iterable[i + 1]) {
    sequence.push(iterable[i]);
  }
}

function App() {
  return (
    <div className="App">
      <FunctionInOrder sequence={sequence} />
    </div>
  );
}

export default App;
