import React from "react";

export const BirdsOfParadise = ({ arrayToCompute }) => {
  const birds = arrayToCompute.indexOf("Eagles");
  function startsWithE(bird) {
    return bird.startsWith("E");
  }
  const eBirds = arrayToCompute.filter(startsWithE).join(", ");

  return (
    <div>
      <p>{birds}</p>
      <p>{}</p>
      <p>{eBirds}</p>
    </div>
  );
};
