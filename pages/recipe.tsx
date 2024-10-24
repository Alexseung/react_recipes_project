import React, {useEffect, useState} from 'react';
import {SearchIcon} from '@chakra-ui/icons';
import ShowSearchRecipe from '../components/showSearchRecipe';
import RecipePageMenu from '../components/recipePageMenu';

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [ingredient, setIngredient] = useState('');
  const [searchIngredient, setSearchIngredient] = useState('');
  const [isLowCarb, setIsLowCarb] = useState(false);
  const [isLowFat, setIsLowFat] = useState(false);
  const [isLowSodium, setIsLowsodium] = useState(false);
  const [isBalanced, setIsBalanced] = useState(false);
  const [isHighFiber, setIsHighFiber] = useState(false);
  const [isHighProtein, setIsHighProtein] = useState(false);

  const [dietArray, setDietArray] = useState<string[]>([]);

  useEffect(() => {

    
    const fetchAPIKeys = async () => {
      try {

        ////////////////serverless 로 올린 api 정보를 활용
        // const response = await fetch(
        //   'http://localhost:3333/cloud/yoon/recipeAPI'
        // );
        // if (!response.ok) {
        //   throw new Error('API 키를 가져오는 데 실패했습니다.');
        // }
        // const data = await response.json();
        // console.log(data);

        // // 서버리스로 올린 api id, key 가져옴
        // const {API_ID, API_KEY} = data.datas;



        ////////////////
        const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
        const API_ID = process.env.NEXT_PUBLIC_API_ID;

        const ingredientQuery = searchIngredient
          ? `&q=${searchIngredient}`
          : '';

        // diet 쿼리 파라미터 넘기기
        // const dietQuery =
        //   dietArray.length > 0 ? `&diet=${dietArray.join(',')}` : '';
        // 작동 안된 이유 --> 해당 api에서 , 가 아닌 쿼리를 따로따로 추가해줘야 작동함
        // 배열안에 있는 요소들 다 &diet= 을 앞에 붙여서 넣어줘야해서 map으로 바꿈
        // dietArray의 값을 각각 &diet= 옵션으로 변환합니다.
        const dietQueries = dietArray.map(diet => `&diet=${diet}`).join('');

        // 배열 join , reduce, replace로 쉼표 지우고

        const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${API_ID}&app_key=${API_KEY}${ingredientQuery}${dietQueries}`;
        const recipesResponse = await fetch(url);
        if (!recipesResponse.ok) {
          throw new Error('레시피를 가져오는 데 실패했습니다.');
        }
      // fetch가 처음 불릴때  ${ingredientQuery}${dietQueries} 이 값이 없기에 배열에 아무것도 없다고 판단해서 error를 넣는건데 이걸 if로 감싸서
      // ${ingredientQuery}${dietQueries} 가 있는 상태에서만 동작하도록 만들어주기
      // 전체를 if로 감싸지는 않았고 fetch를 실행해야하는 최소한의 조검. '검색값' 이 없으면 동작 안 하도록 만들어주었다
      // 검색값을 나타내는 ingredientQuery 의 값이 없다면 즉, falsy라면 return으로 바로 종료되게끔
        if(!ingredientQuery) {
          return;
        }

        const recipesData = await recipesResponse.json();
        console.log(recipesData);
        const recipeList = recipesData.hits.map(item => item.recipe);
        setRecipes(recipeList);
        if (recipeList.length === 0) {
          setError('Sorry, there were no results for your search. Try again!');
        } else {
          setError(null); // 이전 에러 상태 초기화
        }
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchAPIKeys();
  }, [searchIngredient, dietArray]); // 검색어 즉, searchIngredient가 변경되면 호출




  

  const handleSearch = () => {
    setSearchIngredient(ingredient);
    setIngredient('');
  };

  const activeEnter = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    console.log('현재 dietArray:', dietArray);
  }, [dietArray]);

  const [activeBtn, setActiveBtn] = useState(0);

  return (
    <div className='px-2'>
      {/* {error ? <p>오류: {error}</p> : null} */}
      {/* {recipes.length == 0 && <p>Sorry, there were no results for your search. Try again!</p>} */}
      <div className='flex justify-center'>
        <input
          type='text'
          value={ingredient}
          onChange={e => setIngredient(e.target.value)}
          placeholder='What should I have?'
          onKeyDown={e => activeEnter(e)}
          className='
          w-rem-30 h-12 border-2 border-blue-900 
          mt-10 rounded-md outline-none pl-4 text-xl'
        />
        <button onClick={handleSearch} className='h-14 mt-10 ml-2'>
          <SearchIcon color='blue.900' />
        </button>
      </div>
      <div className='flex justify-center'>
        <RecipePageMenu
          menuButton={setActiveBtn}
          activeBtn={activeBtn}
          isLowCarb={isLowCarb}
          setIsLowCarb={setIsLowCarb}
          isLowFat={isLowFat}
          setIsLowFat={setIsLowFat}
          isLowSodium={isLowSodium}
          setIsLowsodium={setIsLowsodium}
          isBalanced={isBalanced}
          setIsBalanced={setIsBalanced}
          isHighFiber={isHighFiber}
          setIsHighFiber={setIsHighFiber}
          isHighProtein={isHighProtein}
          setIsHighProtein={setIsHighProtein}
          dietArray={dietArray}
          setDietArray={setDietArray}
        />
      </div>



      <div>
      {/* 레시피 목록 표시 */}
      { error ? <p>Error: {error}</p> : (
      recipes.map((recipe, index) => (
        <ShowSearchRecipe
          key={index}
          label={recipe.label}
          ingredients={Object.keys(recipe.ingredients).map(key => (
            <li key={key}>{recipe.ingredients[key].text}</li>
          ))}
          dishType={recipe.dishType}
          image={recipe.image}
        />)
      ))}
    </div>
    </div>
  );
}

// 이미지 느리게 나오는것들 --> 사이트 로고 같은거 만들어서 그거 이미지에 박아놓고  suspensce로 그거 먼저 보이게 하고 로딩되면 이미지 띄움
// lazy suspence로 해결해보기
