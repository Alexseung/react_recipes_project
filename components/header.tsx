import React from 'react';
import {useRouter} from 'next/router';
export default function () {
  const router = useRouter();
  const navigate = (path: string) => () => {
    router.push(path);
  };
  return (
    <div className='font-bold h-10 bg-gray-300 flex justify-center rounded-none pt-2'>
      <span onClick={navigate('/')} className='cursor-pointer px-6'>
        Home
      </span>
      <span onClick={navigate('/recipe')} className='cursor-pointer px-6'>
        Recipe
      </span>
      <span onClick={navigate('/subscription')} className='cursor-pointer px-6'>
        Subscription
      </span>
      <span onClick={navigate('/mealplan')} className='cursor-pointer px-6'>
        Meal plan
      </span>
      <span onClick={navigate('/reviews')} className='cursor-pointer px-6'>
        Reviews
      </span>
    </div>
  );
}
