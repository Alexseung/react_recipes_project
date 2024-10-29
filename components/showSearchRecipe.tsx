// <Suspense>  태그로 감싼 곳은 비동기로 동작이됨
// <Suspence fallback={<div>대체태그</div>}> 이렇게 로딩되는동안은 태체태그를 보여줌
import React, {Suspense, useState} from 'react';
import {
  Card,
  Heading,
  Text,
  Stack,
  CardBody,
  CardFooter,
  Spinner,
} from '@chakra-ui/react';

export default function ({label, dishType, ingredients, image, tags}) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Card
        direction={{base: 'column', sm: 'row'}}
        overflow='hidden'
        variant='outline'
        className='my-2'
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
          className='w-60 h-60 rounded-md'
        />

        <Stack>
          <CardBody>
            <Heading size='md'>{label}</Heading>

            <Text py='2' fontSize='lg'>
              {ingredients}
            </Text>
          </CardBody>

          <CardFooter py='2' fontSize='lg' fontWeight='medium'>
            {tags}
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}