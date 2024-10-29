import React from 'react';
import MainWhyPlanEats from '../components/mainWhyPlanEats';
import MainEnjoyMealKitAtHome from '../components/mainEnjoyMealKitAtHome';

export function getServerSide() {
  return {
    props: {
      
  }
}
}

export default function () {
  return (
    <>
      <MainWhyPlanEats/>
      <MainEnjoyMealKitAtHome/>
    </>
  );
}
