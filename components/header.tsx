import React from 'react';
import {useRouter} from 'next/router';
export default function () {
  const router = useRouter();
  const navigate = (path: string) => () => {
    router.push(path);
  };
  return (
    <div className='phone:text-sm sm:text-lg font-bold h-20 bg-khaki flex justify-center rounded-none pt-7'>
      <span onClick={navigate('/')} className='phone:px-2 cursor-pointer sm:px-6'>
        Home
      </span>
      <span onClick={navigate('/recipe')} className='phone:px-2 cursor-pointer sm:px-6'>
        Recipe
      </span>
      <span onClick={navigate('/subscription')} className='phone:px-2 cursor-pointer sm:px-6'>
        Subscription
      </span>
      <span onClick={navigate('/mealplan')} className='phone:px-2 cursor-pointer sm:px-6'>
        Meal plan
      </span>
      <span onClick={navigate('/reviews')} className='phone:px-2 cursor-pointer sm:px-6'>
        Reviews
      </span>
    </div>
  );
}
