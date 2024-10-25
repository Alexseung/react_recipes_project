import React from 'react';
import MainWhyPlanEats from '../components/mainWhyPlanEats';

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
    </>
  );
}
