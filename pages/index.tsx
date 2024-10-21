import React from 'react';

export function getServerSide() {
  return {
    props: {
      
  }
}
}

export default function () {
  return (
    <>
      <div>페이지, 제공하는 기능</div>
      <div className='w-full-screen h-80 border border-red-600'>Footer</div>
    </>
  );
}
