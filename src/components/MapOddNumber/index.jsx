import React from "react";

export const MapOddNumber = ({ oddData }) => {
  const oddArray = oddData.map((x) => {
    const remenaing = x % 2 === 1;
    if (remenaing) {
      return x;
    }
    return null;
  });
  return <div>{oddArray}</div>;
};
