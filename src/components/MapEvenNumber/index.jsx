import React from "react";

export const MapEvenNumber = ({ data }) => {
  const evenArray = data.map((x) => {
    const isEven = x % 2 !== 1;
    if (isEven) {
      return x;
    }
    return null;
  });

  return <div>{evenArray}</div>;
};
