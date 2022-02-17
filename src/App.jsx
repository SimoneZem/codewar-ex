import React from "react";
import { FunctionInOrder } from "./components/FunctionInOrder";
import "./App.css";

const sequence = [];
let iterable = "AAAABBBCCDAABBB";
for (let i = 0; i < iterable.length; i++) {
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
