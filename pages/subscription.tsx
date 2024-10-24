import React from 'react';
import {HStack, VStack, Box} from '@chakra-ui/react';

export default function () {
  return (
    <>
      <div className='flex-col justify-items-center'>
        <div className='text-2xl my-10'>Enjoy your food at home!</div>
        <div>
          <VStack>
            <Box>
              <input
                type='text'
                placeholder='your name'
                className='border border-black w-52 pl-1'
                />
            </Box>
            <Box>
              <input
                type='text'
                placeholder='address' pl-1
                className='border border-black w-52 pl-1'
                />
            </Box>
            <Box>
              <input
                type='text'
                placeholder='what meal kit'
                className='border border-black w-52 pl-1'
                />
            </Box>
          </VStack>
        </div>
      </div>
    </>
  );
}
