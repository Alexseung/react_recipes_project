import React, {useState} from 'react';
import {HStack, VStack, Box, Select} from '@chakra-ui/react';


export default function () {

  const [cart, setCart] = useState<string[]>([]);

  const handleClick = (e)=>{
    const selectedItem = e.target.value;
    setCart([...cart, selectedItem]);
  }


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
            <Select placeholder='select meal kit' onChange={handleClick}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </Select>
            <div>Price</div>
            <div className='mx-6'>
              {cart.map((v,index)=>(
                <p key={index}>{v}</p>
              ))}
            </div>
          </VStack>
        </div>
      </div>
    </>
  );
}
