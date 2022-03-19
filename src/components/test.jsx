import React from "react";
import { MapEvenNumber } from "./MapEvenNumber";
import { MapOddNumber } from "./MapOddNumber";

export const TestComponent = () => {
  const arrayTest = [5, 4, 3, 2, 1];

  return (
    <>
      <MapEvenNumber data={arrayTest} />
      <MapOddNumber oddArray={arrayTest} />
    </>
  );
};
