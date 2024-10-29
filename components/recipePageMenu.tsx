import React, {useState, useEffect} from 'react';
export default function ({
  menuButton,
  activeBtn,
  isLowCarb,
  setIsLowCarb,
  isLowFat,
  setIsLowFat,
  dietArray,
  setDietArray,
  isLowSodium,
  setIsLowsodium,
  isBalanced,
  setIsBalanced,
  isHighFiber,
  setIsHighFiber,
  isHighProtein,
  setIsHighProtein,
  toggle,
  setToggle
}) {

  const checkboxToggle = ()=>{
    setToggle(!toggle)
    console.log(toggle)
  }



  const handleLowCarb = () => {
    const newValue = !isLowCarb;
    setIsLowCarb(newValue);
    updateDietArray('low-carb', newValue);
  };

  const handleLowFat = () => {
    const newValue = !isLowFat;
    setIsLowFat(newValue);
    updateDietArray('low-fat', newValue);
  };
  const handleLowSodium = () => {
    const newValue = !isLowSodium;
    setIsLowsodium(newValue);
    updateDietArray('low-sodium', newValue);
  };
  const handleBalanced = () => {
    const newValue = !isBalanced;
    setIsBalanced(newValue);
    updateDietArray('balanced', newValue);
  };
  const handleHighFiber = () => {
    const newValue = !isHighFiber;
    setIsHighFiber(newValue);
    updateDietArray('high-fiber', newValue);
  };
  const handleHighProtein = () => {
    const newValue = !isHighProtein;
    setIsHighProtein(newValue);
    updateDietArray('high-protein', newValue);
  };

  const updateDietArray = (diet: string, add: boolean) => {
    setDietArray(prev =>
      add ? [...prev, diet] : prev.filter(item => item !== diet)
    );
  };

  return (
    <>
      {/* <div>
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
      </div> */}

      <div>
        <input 
          type='checkbox' 
          checked={isLowCarb} 
          onChange={handleLowCarb} 
          className='m-2 form-checkbox h-4 w-4'/>
        low-carb
        <input 
          type='checkbox' 
          checked={isLowFat} 
          onChange={handleLowFat} 
          className='m-2 form-checkbox h-4 w-4'/>
        low-fat
        <input
          type='checkbox'
          checked={isLowSodium}
          onChange={handleLowSodium}
          className='m-2 form-checkbox h-4 w-4'
        />
        low-sodium
        <br />
        <input 
          type='checkbox' 
          checked={isBalanced} 
          onChange={handleBalanced} 
          className='m-2 form-checkbox h-4 w-4'/>
        balanced
        <input
          type='checkbox'
          checked={isHighFiber}
          onChange={handleHighFiber}
          className='m-2 form-checkbox h-4 w-4'
        />
        hight-fiber
        <input
          type='checkbox'
          checked={isHighProtein}
          onChange={handleHighProtein}
          className='m-2 form-checkbox h-4 w-4'
        />
        high-protein
      </div>
    </>
  );
}
