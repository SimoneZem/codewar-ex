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
import { SegaCult } from "./components/SegaCult";
import { TestComponent } from "./components/test";
import { OppositeDirection } from "./components/OppositeDirection";
import { BirdsOfParadise } from "./components/BirdsOfParadise";

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

const initialArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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

const newArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];

const array3 = ["Bloodborne", "Dark Souls", "Elden Ring", "The Division"];
const gameArray = array3.slice(0, array3.length - 1);
const addArray = gameArray.concat("Sekiro", "Demon's Souls");
const fromSoftware = addArray.join(" - ");

const arrayBirds = [
  "Parrots",
  "Falcons",
  "Eagles",
  "Emus",
  "Caracaras",
  "Egrets",
];

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
        <MapOddNumber oddData={numbersArry} />
      </p>
      <p>
        <MapEvenNumber data={initialArray} />
      </p>
      <p>
        <RandomInvertedArray
          randomArray={randomArray}
          invertedArray={invertedArray}
        />
      </p>
      <p>
        <ManipulatingArray manipulatedArray={manipulatedArray.join(",")} />
      </p>
      <p>
        <StreetFighters
          fightersToShow={fightersToShow}
          arrayLenght={arraylength}
        />
      </p>
      <p>
        <SegaCult arrayOfFighters={newArray} />
      </p>
      <TestComponent />
      <p>
        <OppositeDirection
          gameArray={gameArray}
          addArray={addArray}
          fromSoftware={fromSoftware}
        />
      </p>
      <p>
        <BirdsOfParadise arrayToCompute={arrayBirds} />
      </p>
    </div>
  );
}

export default App;
