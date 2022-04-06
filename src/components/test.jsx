import React from "react";
import { MapEvenNumber } from "./MapEvenNumber";
import { MapOddNumber } from "./MapOddNumber";
import { SegaCult } from "./SegaCult";

export const TestComponent = () => {
  const arrayTest = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const tekkenArray = [
    "Gon",
    "Jin Kazama",
    "King",
    "Gun Jack",
    "Heihachi",
    "Lei",
    "Nina",
    "True Ogre",
    "Tu Zia",
  ];
  console.log(
    ">>>> ~ file: test.jsx ~ line 20 ~ TestComponent ~ tekkenArray",
    tekkenArray
  );

  return (
    <>
      <MapEvenNumber data={arrayTest} />
      <MapOddNumber oddData={arrayTest} />
      <SegaCult arrayOfFighters={tekkenArray} />
    </>
  );
};
