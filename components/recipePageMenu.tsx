import React from 'react';

interface Props {
  dietData: {[value: string]: boolean};
  handleCheck: (key: string) => void;
}
export default function ({dietData, handleCheck}: Props) {
  return (
    <div className='grid grid-cols-3 gap-2'>
      {Object.keys(dietData).map((v, index) => (
        <div key={index}>
          <input
            type='checkbox'
            checked={dietData[v]}
            onChange={() => handleCheck(v)}
            className='box-border w-4 h-4 m-1'
          />
          {v}
        </div>
      ))}
    </div>
  );
}
