import React, {useEffect, useState} from 'react';
import {SearchIcon} from '@chakra-ui/icons';
import ShowSearchRecipe from '../components/showSearchRecipe';
import RecipePageMenu from '../components/recipePageMenu';

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [ingredient, setIngredient] = useState('');
  const [searchIngredient, setSearchIngredient] = useState('');

  useEffect(() => {
    const fetchAPIKeys = async () => {
      try {
        const response = await fetch(
          'http://localhost:3333/cloud/yoon/recipeAPI'
        );
        if (!response.ok) {
          throw new Error('API 키를 가져오는 데 실패했습니다.');
        }
        const data = await response.json();
        console.log(data);

        // 서버리스로 올린 api id, key 가져옴
        const {API_ID, API_KEY} = data.datas;

        const queryIngredient = searchIngredient
          ? `&q=${searchIngredient}`
          : '';

        const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${API_ID}&app_key=${API_KEY}${queryIngredient}`;
        const recipesResponse = await fetch(url);
        if (!recipesResponse.ok) {
          throw new Error('레시피를 가져오는 데 실패했습니다.');
        }

        const recipesData = await recipesResponse.json();
        console.log(recipesData);
        const recipeList = recipesData.hits.map(item => item.recipe);
        setRecipes(recipeList);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchAPIKeys();
  }, [searchIngredient]); // 검색어 즉, searchIngredient가 변경되면 호출

  const handleSearch = () => {
    setSearchIngredient(ingredient);
    setIngredient('');
  };
  const activeEnter = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const [activeBtn, setActiveBtn] = useState(0);

  return (
    <div>
      {error && <p>오류: {error}</p>}
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
        <RecipePageMenu menuButton={setActiveBtn} activeBtn={activeBtn} />
      </div>

      {/* 선택된 버튼 활성화 코드 */}

      {activeBtn === 1 && <div>1번 nutrition 버튼</div>}
      {activeBtn === 2 && <div>2번 allergies 버튼</div>}
      {activeBtn === 3 && <div>3번 vegetarian 버튼</div>}

      {/* 검색 결과 창, All 버튼 활성화 확인 */}
      {activeBtn === 0 && (
        <div>
          <div>0번 All</div>
          {recipes.map((recipe, index) => (
            <ShowSearchRecipe
              key={index}
              label={recipe.label}
              ingredients={Object.keys(recipe.ingredients).map(key => (
                <li key={key}>{recipe.ingredients[key].text}</li>
              ))}
              // Object.keys(객체이름); ==> console.log(Object.keys(객체이름))  ==> '['키','여기에','나옴']'
              dishType={recipe.dishType}
              image={recipe.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// 이미지 느리게 나오는것들 --> 사이트 로고 같은거 만들어서 그거 이미지에 박아놓고  suspensce로 그거 먼저 보이게 하고 로딩되면 이미지 띄움
// lazy suspence로 해결해보기
