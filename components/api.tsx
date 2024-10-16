import React, {useState, useEffect} from 'react';

export default function MovieList() {
  const API_ID = `01bfaed3`;
  const API_KEY = `f76a8dd1feb49872198a8499513ec02a`;
  const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${API_ID}&app_key=${API_KEY}&cuisineType=American`;

  const [searchRecipes, setSearchRecipes] = useState([]);

  //   useEffect(() => {
  //     fetch(url)
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log('API 데이터 확인:', data); // API 응답 로그 확인
  //         setSearchRecipes(data.hits || []); // 'hits' 속성 사용
  //       })
  //       .catch(error => {
  //         console.error('API 호출 에러:', error); // 에러 로그
  //       });
  //   }, []);

  useEffect(() => {
    // 비동기 함수를 내부에서 정의
    const fetchRecipes = async () => {
      try {
        const response = await fetch(url);
        console.log('응답 상태 코드:', response.status);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API 데이터 확인:', data);
        setSearchRecipes(data.hits || []);
      } catch (err) {
        console.error('API 호출 에러:', err);
      }
    };

    fetchRecipes(); // 비동기 함수 호출
  }, []); // 의존성 배열

  return (
    <>
      <div>
        <h2>Recipes</h2>
        <ul>
          {searchRecipes.map((item, index) => (
            <li key={index}>
              <strong className='text-2xl'>{item.recipe.label}</strong>
              <img src={item.recipe.image} alt='' />
            </li> // 레시피 이름 표시
          ))}
        </ul>
      </div>
    </>
  );
}
