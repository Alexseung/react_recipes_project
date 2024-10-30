import React, {useState} from 'react';
import {VStack, Box, CloseButton} from '@chakra-ui/react';
import Mealkit from '../components/mealkit';

interface SelectedMealkit {
  name: string;
  price: number;
  count?: number;
}

export default function Home() {
  const [totalPrice, setTotalPrice] = useState(0); // 초기값 0 설정
  const [selectedMealkits, setSelectedMealkits] = useState<SelectedMealkit[]>(
    []
  );

  const handleClick = (price: number, name: string) => {
    const currentAmountOfKits = selectedMealkits.length;

    if (currentAmountOfKits >= 3) {
      alert('Please choose less than 4 kits at once');
      return;
    }
    if (selectedMealkits.filter(v => v.name === name).length < 1) {
      selectedMealkits.push({name, price, count: 1});
      setSelectedMealkits(selectedMealkits);
    } else {
      let patch = selectedMealkits
        .filter(v => v.name === name)
        .map(v => ({...v, count: v.count + 1}))[0];
      setSelectedMealkits(
        selectedMealkits.map(v => {
          if (v.name === patch.name) return patch;
          return v;
        })
      );
    }
    // setSelectedMealkits((prevMealkits) => [
    //   ...prevMealkits,
    //   { name, price },
    // ]);
    setTotalPrice(prevPrice => prevPrice + price);
  };

  const removeKit = (name: string, price: number) => {
    let count = selectedMealkits
      .filter(kit => kit.name === name)
      .map(v => v.count)[0]; // 배열안의 첫번째 요소를 선택
    setSelectedMealkits(prevMealkits =>
      prevMealkits.filter(kit => kit.name !== name)
    );
    setTotalPrice(prevPrice => prevPrice - price * count); // 총 가격 업데이트
  };

  return (
    <>
      <div className='flex-col justify-items-center'>
        <div className='text-2xl my-10'>Enjoy your food at home!</div>
        <VStack>
          <input
            type='text'
            placeholder='Name'
            className='border border-black w-52 pl-1 rounded-md h-8 mb-1'
          />
          <input
            type='text'
            placeholder='Address'
            className='border border-black w-52 pl-1 rounded-md h-8 mb-1'
          />
          <input
            type='text'
            placeholder='Phone Number'
            className='border border-black w-52 pl-1 rounded-md h-8 mb-1'
          />
          <input
            type='text'
            placeholder='Email'
            className='border border-black w-52 pl-1 rounded-md h-8 mb-1 '
          />

          <Mealkit handleClick={handleClick} />

          <div className='text-lg border-t border-gray-600 mt-10 mb-4'>
            Your Products:
          </div>
          <div className='flex'>
            {selectedMealkits.map((kit, index) => (
              <div
                key={index}
                className='flex items-center mr-3 mb-4 bold border-b border-gray-600'
              >
                {kit.name}({kit.count})
                <CloseButton
                  size='sm'
                  onClick={() => removeKit(kit.name, kit.price)}
                />
              </div>
            ))}
          </div>
          <div className='text-lg'>
            Total Price: {totalPrice.toFixed(2)} USD
          </div>
          <button className='bg-khaki p-2 rounded-md'>Submit</button>
        </VStack>
      </div>
    </>
  );
}
