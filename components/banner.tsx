import React from 'react';



export default function () {
  return (
    <>
      <div className='w-full-screen h-rem-32 bg-blue-200 flex m-0 p-0'>
        <div className='sm:pl-64 border-2 w-full-screen h-full flex items-center justify-between lg:px-20 xl:px-80 font-bold'>
          <div className='sm:text-3xl md:text-5xl lg:text-6xl  text-xl text-blue-900'>
            <div>Easy meal kits.</div>
            <div>Quality ingredients.</div>
            <div>Delivered to your door.</div>
          </div>
          <div className='items-center justify-center'>
            <img
              src='/lasagna.jpg'
              alt='banner-lasagna'
              className='lg:w-480 lg:h-424 sm:hidden lg:block'
            />
          </div>
        </div>
      </div>
    </>
  );
}
