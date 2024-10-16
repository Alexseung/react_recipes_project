import React from 'react';
import {HStack, VStack, Box} from '@chakra-ui/react';

export default function () {
  return (
    <>
      <div className='w-full-screen h-80 border border-red-600'>
        About this webSite
      </div>
      <div>Enjoy your food at home!</div>
      <div>
        <VStack>
          <Box>
            <input
              type='text'
              placeholder='your name'
              className='border border-black'
            />
          </Box>
          <Box>
            <input
              type='text'
              placeholder='address'
              className='border border-black'
            />
          </Box>
          <Box>
            <input
              type='text'
              placeholder='what meal kit'
              className='border border-black'
            />
          </Box>
        </VStack>
      </div>
    </>
  );
}
