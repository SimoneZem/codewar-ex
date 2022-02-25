import React from "react";

export const NoDuplicationMap = ({ myArrayWithMap }) => {
  return (
    <div>
      {myArrayWithMap.map((item, index) => {
        const charToShow = item !== myArrayWithMap[index + 1] && item;
        return <span key={item}>{charToShow}</span>;
      })}
    </div>
  );
};
