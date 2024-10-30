import React from 'react';

interface Props {
  dietData: {[value: string]: boolean};
  handleCheck: (key: string) => void;
}
export default function ({dietData, handleCheck}: Props) {
  return (
    <div>
      {Object.keys(dietData).map((v, index) => (
        <div key={index}>
          <input
            type='checkbox'
            checked={dietData[v]}
            onChange={() => handleCheck(v)}
          />
          {v}
        </div>
      ))}
    </div>
  );
}
