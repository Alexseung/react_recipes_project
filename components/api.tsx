import React, {useState, useEffect} from 'react';

export default function MovieList() {
  const API_ID = `01bfaed3`;
  const API_KEY = `f76a8dd1feb49872198a8499513ec02a`;
  const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${API_ID}&app_key=${API_KEY}&cuisineType=Asian`;

  const [searchRecipes, setSearchRecipes] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('API 데이터 확인:', data); // API 응답 로그 확인
        setSearchRecipes(data.hits || []); // 'hits' 속성 사용
      })
      .catch(error => {
        console.error('API 호출 에러:', error); // 에러 로그
      });
  }, []);

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
