import React from "react";

export const BirdsOfParadise = ({ arrayToCompute }) => {
  console.log(
    ">>>> ~ file: index.jsx ~ line 4 ~ BirdsOfParadise ~ arrayToCompute ",
    arrayToCompute
  );
  const birds = arrayToCompute.indexOf("Eagles");
  console.log(
    ">>>> ~ file: index.jsx ~ line 5 ~ BirdsOfParadise ~ birds",
    birds
  );

  function startsWithE(bird) {
    return bird.startsWith("E");
  }
  const eBirds = arrayToCompute.filter(startsWithE).join(", ");
  console.log(
    ">>>> ~ file: index.jsx ~ line 18 ~ BirdsOfParadise ~ eBirds",
    eBirds
  );

  return (
    <div>
      <p>{birds}</p>
      <p>{}</p>
      <p>{eBirds}</p>
    </div>
  );
};
