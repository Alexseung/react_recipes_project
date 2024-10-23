import React from 'react';
import MainBodyCard from '../components/mainBodyCard';

export function getServerSide() {
  return {
    props: {
      
  }
}
}

export default function () {
  return (
    <>
      <MainBodyCard/>
    </>
  );
}
