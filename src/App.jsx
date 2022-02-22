import React from "react";
import { FunctionInOrder } from "./components/FunctionInOrder";
import { NoDuplication } from "./components/NoDuplication";

import "./App.css";

const sequence = [];

let iterable = "AAAABBBCCDAABBB";
//dichiaro la funzione iterable

for (let i = 0; i < iterable.length; i++) {
  // inizializzo i con valore 0, la condizione è che i < della quantità di caratteri, incremente di

  if (iterable[i] !== iterable[i + 1]) {
    // notazione  parentesi per accedere al valore di i di iterable, se strettamente diverso da i + 1

    sequence.push(iterable[i]);
    //aggiungere in coda all'array il valore di i
  }
}

//utilizzo il ciclo for per iterare fino a che non avremo un carattere diverso dal precendente. se true passeremo al successivo

const newArrayWitoutDuplication = [];
let myName = "SSSSIIIMMMOOONNEEEEEE";

for (let x = 0; x < myName.length; x++) {
  if (myName[x] !== myName[x + 1]) {
    newArrayWitoutDuplication.push(myName[x]);
  }
}

function App() {
  return (
    <div className="App">
      <p>
        <FunctionInOrder sequence={sequence} />
      </p>
      <p>
        <NoDuplication newArrayWitoutDuplication={newArrayWitoutDuplication} />
      </p>
    </div>
  );
}

export default App;
