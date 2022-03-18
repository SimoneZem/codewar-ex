import React from "react";
import { FunctionInOrder } from "./components/FunctionInOrder";
import { NoDuplication } from "./components/NoDuplication";
import { NoDuplicationMap } from "./components/NoDuplicationMap";
import { MapMultiplication } from "./components/MapMultiplication";
import { MapOddNumber } from "./components/MapOddNumber";
import { MapEvenNumber } from "./components/MapEvenNumber";
import { RandomInvertedArray } from "./components/RandomInvertedArray";
import { ManipulatingArray } from "./components/ManipulatingArray";
import { StreetFighters } from "./components/StreetFighters";

import "./App.css";

const sequence = [];

let iterable = "AAAABBBCCDAABBB";
for (let i = 0; i < iterable.length; i++) {
  if (iterable[i] !== iterable[i + 1]) {
    sequence.push(iterable[i]);
  }
}

const newArrayWitoutDuplication = [];
let myName = "SSSSIIIMMMOOONNEEEEEE";

for (let x = 0; x < myName.length; x++) {
  if (myName[x] !== myName[x + 1]) {
    newArrayWitoutDuplication.push(myName[x]);
  }
}

const myArrayWithMap = ["C", "I", "I", "A", "A", "O", "O"];

const myArrayWithMultiplication = [2, 4, 6, 8];
const newVal = [myArrayWithMultiplication.map((x) => x * 2)];

const numbersArry = [0, 1, 2, 3, 4, 5];
const oddArray = numbersArry.map((x) => {
  const resto = x % 2 === 1;
  if (resto) {
    return x;
  }
  return null;
});

const initialArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenArray = initialArray.map((x) => {
  const isEven = x % 2 !== 1;
  if (isEven) {
    return x;
  }
  return null;
});

const randomArray = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 10)
);
const invertedArray = [...randomArray].reverse();

const manipulatedArray = ["pizza", "nachos", "cannelloni"];
manipulatedArray.unshift("spaghetti");
manipulatedArray[1] = "lasagna";
manipulatedArray[2] = "gelato";

const fighters = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";
/*const fightersToShow = fighters.split("+").join("-");*/
const splittedArray = fighters.split("+");
const arraylength = splittedArray.length;
console.log(">>>> ~ file: App.jsx ~ line 70 ~ arraylength", arraylength);
const fightersToShow = splittedArray.join("-");

function App() {
  return (
    <div className="App">
      <p>
        <FunctionInOrder sequence={sequence} />
      </p>
      <p>
        <NoDuplication newArrayWitoutDuplication={newArrayWitoutDuplication} />
      </p>
      <p>
        <NoDuplicationMap myArrayWithMap={myArrayWithMap} />
      </p>
      <p>
        <MapMultiplication newVal={newVal} />
      </p>
      <p>
        <MapOddNumber oddArray={oddArray} />
      </p>
      <p>
        <MapEvenNumber evenArray={evenArray} />
      </p>
      <p>
        <RandomInvertedArray
          randomArray={randomArray}
          invertedArray={invertedArray}
        />
      </p>
      <p>
        <ManipulatingArray manipulatedArray={manipulatedArray} />
      </p>
      <p>
        <StreetFighters
          fightersToShow={fightersToShow}
          arrayLenght={arraylength}
        />
      </p>
    </div>
  );
}

export default App;
