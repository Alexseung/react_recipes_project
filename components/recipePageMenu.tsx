import React, {useState, useEffect} from 'react';

export default function ({menuButton, activeBtn}) {
  return (
    <>
      <div>
        <button
          onClick={() => menuButton(0)}
          className={`m-14 my-3 rounded-md p-2 py-1 text-lg font-bold text-blue-200 ${
            activeBtn === 0 ? 'bg-green-700 text-white' : 'bg-blue-900'
          }`}
        >
          All
        </button>
        <button
          onClick={() => menuButton(1)}
          className={`m-14 my-3 rounded-md p-2 py-1 text-lg font-bold text-blue-200 ${
            activeBtn === 1 ? 'bg-green-700 text-white' : 'bg-blue-900'
          }`}
        >
          Nutrition
        </button>
        <button
          onClick={() => menuButton(2)}
          className={`m-14 my-3 rounded-md p-2 py-1 text-lg font-bold text-blue-200 ${
            activeBtn === 2 ? 'bg-green-700 text-white' : 'bg-blue-900'
          }`}
        >
          Allergies
        </button>
        <button
          onClick={() => menuButton(3)}
          className={`m-14 my-3 rounded-md p-2 py-1 text-lg font-bold text-blue-200 ${
            activeBtn === 3 ? 'bg-green-700 text-white' : 'bg-blue-900'
          }`}
        >
          Vegetarian
        </button>
      </div>
    </>
  );
}
