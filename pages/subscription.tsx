import React, { useState, useRef } from 'react';
import { VStack, CloseButton } from '@chakra-ui/react';
import Mealkit from '../components/mealkit';
import { Modal, ModalBody, ModalCloseButton, ModalHeader, ModalFooter, ModalContent, ModalOverlay, useDisclosure, Button } from "@chakra-ui/react";


// onChange
// onChange 는 바뀔때만 실행되니까 안되는거임

interface SelectedMealkit {
  name: string;
  price: number;
  count: number;
}

export default function Home() {
  const [totalPrice, setTotalPrice] = useState(0); // 초기값 0 설정
  const [selectedkits, setselectedkits] = useState<SelectedMealkit[]>([]);

  const handleClick = (price: number, name: string,) => {
    const currentAmountOfKits = selectedkits.length;

    // if (currentAmountOfKits >= 3) {
    //   alert('Please choose less than 4 different kits at once');
    //   return;
    // }

    const existingKit = selectedkits.find((v) => v.name === name);

    if (!existingKit) {
      if (currentAmountOfKits >= 3) {
        alert('Please choose less than 4 different kits at once');
        return;
      }
      setselectedkits([...selectedkits, { name, price, count: 1 }]);
    } else {
      const updatedKits = selectedkits.map((v) => {
        if (v.name === name) {
          console.log(v.count);
          return { ...v, count: v.count + 1 };
        }
        return v;
      });
      setselectedkits(updatedKits);
    }
    setTotalPrice((prevPrice) => prevPrice + price);
  };

  const removeKit = ( name: string, price: number,) => {
    const kitToRemove = selectedkits.find((kit) => kit.name === name);
    if (!kitToRemove) return;

    setselectedkits((prevKits) =>
      prevKits.filter((kit) => kit.name !== name)
    );
    setTotalPrice((prevPrice) => prevPrice - price * kitToRemove.count);
  };


  const {isOpen, onClose, onOpen} = useDisclosure();



  const name = useRef(null);
  const address = useRef(null);
  const phoneNum = useRef(null);
  const email = useRef(null);

  const handleOpen = () => {
    if (!name.current?.value) alert('Please fill in your name');
    else if (!address.current?.value) alert('Please fill in your address');
    else if (!phoneNum.current?.value) alert('Please fill in your phone number');
    else if (!email.current?.value) alert('Please fill in your email');
    else {
      onOpen();
    }
  };
  

  return (
    <div className='flex-col justify-items-center'>
      <div className='text-2xl my-10'>Enjoy your food at home!</div>
      <VStack>
        <input
          ref={name}
          type='text'
          placeholder='Name'
          className='border border-black w-52 pl-1 rounded-md h-8 mb-1'
        />
        <input
          ref={address}
          type='text'
          placeholder='Address'
          className='border border-black w-52 pl-1 rounded-md h-8 mb-1'
        />
        <input
          ref={phoneNum}
          type='number'
          placeholder='Phone Number'
          className='border border-black w-52 pl-1 rounded-md h-8 mb-1'
        />
        <input
          ref={email}
          type='text'
          placeholder='Email'
          className='border border-black w-52 pl-1 rounded-md h-8 mb-1'
        />

        <Mealkit handleClick={handleClick} />

        <div className='text-lg border-t border-gray-600 mt-10 mb-4'>
          Your Products:
        </div>
        <div className='flex'>
          {selectedkits.map((kit, index) => (
            <div
              key={index}
              className='flex items-center mr-3 mb-4 font-bold border-b border-gray-600'
            >
              {kit.name} ({kit.count})
              <CloseButton
                size='sm'
                onClick={() => removeKit(kit.name, kit.price)}
              />
            </div>
          ))}
        </div>
        <div className='text-lg'>Total Price: {totalPrice.toFixed(2)} USD</div>
        <button className='bg-khaki p-2 rounded-md' onClick={handleOpen}>Submit</button>
      </VStack>


        <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Please confirm your order</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div className='mb-10'>
                <div className='text-lg font-light'>
                Name: {name.current?.value}
                </div>
                <div className='text-lg font-light'>
                Address: {address.current?.value}
                </div>
                <div className='text-lg font-light'>
                Phone Number: {phoneNum.current?.value}
                </div>
                <div className='text-lg font-light'>
                Email: {email.current?.value}
                </div>
              </div>
              {selectedkits.map((v, index)=> (
              <div className='flex justify-between pb-2'>
                <div key={index} className='text-lg'>{v.name} ({v.count})</div>
                <div key={index} className='text-lg font-medium border-b-2'>$ {v.price}</div>
              </div>
            ))}</ModalBody>
            <div className='flex justify-between mx-4 pb-5 border-t-2 border-black'>
              <div className='ml-2 mt-10 text-lg font-medium'>Total</div>
              <div className='mt-10 text-lg font-medium'>$ {totalPrice.toFixed(2)}</div>
            </div>
          </ModalContent>
        </Modal>
    </div>
  );
}