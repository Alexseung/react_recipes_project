// <Suspense>  태그로 감싼 곳은 비동기로 동작이됨
// <Suspence fallback={<div>대체태그</div>}> 이렇게 로딩되는동안은 태체태그를 보여줌
import React, {Suspense, useState} from 'react';
import Image from 'next/image';
import {
  Card,
  Heading,
  Text,
  Stack,
  CardBody,
  CardFooter,
  Spinner,
} from '@chakra-ui/react';

export default function ({label, dishType, ingredients, image}) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Card
        direction={{base: 'column', sm: 'row'}}
        overflow='hidden'
        variant='outline'
      >
        {loading && (
          <div className='w-60 h-60'>

          <Spinner
            speed='0.65s'
            color='blue.300'
            m='auto'
            size='xl'
            />
            </div>
        )}
        <img
          src={image}
          alt={label}
          onLoad={() => setLoading(false)}
          className='my-1 w-60 h-60'
        />

        <Stack>
          <CardBody>
            <Heading size='md'>{label}</Heading>

            <Text py='2' fontSize='lg'>
              {ingredients}
            </Text>
            <Text fontSize=''>{dishType}</Text>
          </CardBody>

          <CardFooter>
            {/* <Button variant='ghost' colorScheme='blue'>
              {dishType}
            </Button> */}
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
  // return <div>
  //     <ul>
  //       <li>
  //         <div className='font-bold text-2xl'>{label}</div>
  //         <p>{dishType}</p>
  //         <p>{ingredients}</p>
  //         {/* <Image src={image} alt={label} width={224} height={224} loading='lazy'/> */}
  //         <img src={image} alt={label} className='w-56' loading="lazy"/>
  //       </li>
  //   </ul>
  // </div>
}

{
  /* <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    className='w-56'
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card> */
}
