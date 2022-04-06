import React from "react";

export const SegaCult = ({ arrayOfFighters }) => {
  const array2 = arrayOfFighters.pop();
  console.log(
    ">>>> ~ file: index.jsx ~ line 5 ~ SegaCult ~ array2",
    typeof array2
  );
  const segaArray = arrayOfFighters.join(", ");

  return <div>{segaArray}</div>;
};
