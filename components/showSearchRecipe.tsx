// // <Suspense>  태그로 감싼 곳은 비동기로 동작이됨
// // <Suspence fallback={<div>대체태그</div>}> 이렇게 로딩되는동안은 태체태그를 보여줌
// import React, {Suspense, useState} from 'react';
// import {
//   Card,
//   Heading,
//   Text,
//   Stack,
//   CardBody,
//   CardFooter,
//   Spinner,
// } from '@chakra-ui/react';

// export default function ({label, dishType, ingredients, image, tags}) {
//   const [loading, setLoading] = useState(true);
//   return (
//     <>
//       <Card
//         direction={{base: 'column', sm: 'row'}}
//         overflow='hidden'
//         variant='outline'
//         className='my-2'
//       >
//         {loading && (
//           <div className='w-60 h-60'>
//             <Spinner speed='0.65s' color='blue.300' m='auto' size='xl' />
//           </div>
//         )}
//         <img
//           src={image}
//           alt={label}
//           onLoad={() => setLoading(false)}
//           className='w-60 h-60 rounded-md'
//         />

//         <Stack>
//           <CardBody>
//             <Heading size='md'>{label}</Heading>

//             <Text fontSize='lg' pb='0'>
//               {ingredients}
//             </Text>
//           </CardBody>

//           <CardFooter py='0' fontSize='lg' fontWeight='medium'>
//             {tags}
//           </CardFooter>
//         </Stack>
//       </Card>
//     </>
//   );
// }

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

  // `ingredients` 텍스트의 길이에 따른 이미지 정렬 조정
  const isLongIngredients = ingredients.length > 2; // 예시로 50자 이상일 때 이미지 위치 조정

  return (
    <Card
      direction={{base: 'column', sm: 'row'}}
      overflow='hidden'
      variant='outline'
      className='my-2'
    >
      {loading && (
        <div className='w-60 h-60 flex justify-center items-center'>
          <Spinner speed='0.65s' color='blue.300' size='xl' />
        </div>
      )}
      <img
        src={image}
        alt={label}
        onLoad={() => setLoading(false)}
        className={`${
          isLongIngredients
            ? 'w-60 h-60 my-auto rounded-md'
            : 'w-60 h-60 rounded-md'
        }`}
      />

      <Stack>
        <CardBody>
          <Heading size='md'>{label}</Heading>

          <Text fontSize='lg' pb='0'>
            {ingredients}
          </Text>
        </CardBody>

        <CardFooter py='0' fontSize='lg' fontWeight='medium'>
          {tags}
        </CardFooter>
      </Stack>
    </Card>
  );
}
