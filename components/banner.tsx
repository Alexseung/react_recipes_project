import React from 'react';

export default function () {
  return (
    <>
      <div className='w-full-screen h-rem-32 bg-blue-200 flex border-2 border-red-600'>
        <div className='border-2 border-black w-full-screen h-full flex items-center justify-between px-80 font-bold'>
          <div className='text-6xl text-blue-900'>
            <div>Easy meal kits.</div>
            <div>Quality ingredients.</div>
            <div>Delivered to your door.</div>
          </div>
          <div className='flex items-center justify-center'>
            <img
              src='/lasagna.jpg'
              alt='banner-lasagna'
              className='w-rem-30 h-auto'
            />
          </div>
        </div>
      </div>
    </>
  );
}

// <div className='w-full h-32 bg-blue-400 flex'>
//     <div className="h-full flex flex-col items-start justify-center pl-4 font-bold">
//         <div className="text-6xl text-green-400">
//             <div>Easy meal kits.</div>
//             <div>Quality ingredients.</div>
//             <div>Delivered to your door.</div>
//         </div>
//     </div>
//     <div className="flex items-center justify-center">
//         <img src="/lasagna.jpg" alt="banner-lasagna" className="w-30 h-auto"/>
//     </div>
// </div>
