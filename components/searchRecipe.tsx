// import React, {useState, useEffect} from 'react';

// export default function recipes() {
//   const API_ID = `01bfaed3`;
//   const API_KEY = `f76a8dd1feb49872198a8499513ec02a`;
//   const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${API_ID}&app_key=${API_KEY}&cuisineType=American`;

//   const [searchRecipes, setSearchRecipes] = useState([]);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await fetch(url);
//         console.log('응답 상태 코드:', response.status);

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log('API 데이터 확인:', data);
//         setSearchRecipes(data.hits || []);
//       } catch (err) {
//         console.error('API 호출 에러:', err);
//       }
//     };

//     fetchRecipes();
//   }, []);

//   return (
//     <>
// {searchRecipes}
//     </>
//   );
// }
