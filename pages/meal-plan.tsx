import React, {useState, useEffect} from 'react';
import {Menu, MenuButton, MenuList, MenuItem, Button} from '@chakra-ui/react';
import ShowSearchRecipe from '../components/showSearchRecipe';

export default function MealPlanMenu() {
  const [mealType, setMealType] = useState('');
  const [dishType, setDishType] = useState('');
  const [health, setHealth] = useState('');

  // fetch

  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAPIKeys = async () => {
      try {
        const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
        const API_ID = process.env.NEXT_PUBLIC_API_ID;

        const mealTypeQuery = mealType ? `&mealType=${mealType}` : '';
        const dishTypeQuery = dishType ? `&dishType=${dishType}` : '';
        const healthQuery = health ? `&health=${health}` : '';

        const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${API_ID}&app_key=${API_KEY}${mealTypeQuery}${dishTypeQuery}${healthQuery}`;
        const recipesResponse = await fetch(url);
        if (!recipesResponse.ok) {
          throw new Error('레시피를 가져오는 데 실패했습니다.');
        }
        if (!mealTypeQuery && !dishTypeQuery && !healthQuery) {
          return;
        }

        const recipesData = await recipesResponse.json();
        console.log(recipesData);
        const recipeList = recipesData.hits.map(item => item.recipe);
        setRecipes(recipeList);

        // recipeList 나오고 난 후 길이 확인
        if (recipeList.length < 1) {
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
  }, [mealType, dishType, health]);

  const showMealType = value => {
    setMealType(value);
  };
  const showDishType = value => {
    setDishType(value);
  };
  const showHealth = value => {
    setHealth(value);
  };

  const handleMealTypeClick = e => {
    const value = (e.target as HTMLElement).getAttribute('value');
    if (value) {
      showMealType(value);
    }
  };
  const handleDishTypeClick = e => {
    const value = (e.target as HTMLElement).getAttribute('value');
    if (value) {
      showDishType(value);
    }
  };
  const handleHealthClick = e => {
    const value = (e.target as HTMLElement).getAttribute('value');
    if (value) {
      showHealth(value);
    }
  };

  return (
    <div className='px-2'>
      <div className='flex justify-center mt-10'>
        {/* MealType으로 분류 */}
        <Menu>
          <MenuButton as={Button} variant='outline' size='md' className='mx-2'>
            MealType
          </MenuButton>
          <MenuList>
            {/* <MenuItem value="Breakfast" onClick={showMealType(e.target.getAttribute('value'))}>Breakfast</MenuItem> */}
            <MenuItem onClick={handleMealTypeClick} value='Breakfast'>
              Breakfast
            </MenuItem>
            <MenuItem onClick={handleMealTypeClick} value='Lunch'>
              Lunch
            </MenuItem>
            <MenuItem onClick={handleMealTypeClick} value='Dinner'>
              Dinner
            </MenuItem>
            <MenuItem onClick={handleMealTypeClick} value='Snack'>
              Snack
            </MenuItem>
            <MenuItem onClick={handleMealTypeClick} value='Teatime'>
              Teatime
            </MenuItem>
          </MenuList>
        </Menu>
        {/* DishType으로 분류 */}

        <Menu>
          <MenuButton as={Button} variant='outline' size='md' className='mx-2'>
            dishType
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={handleDishTypeClick}
              value='Biscuits and cookies'
            >
              Biscuits and cookies
            </MenuItem>
            <MenuItem onClick={handleDishTypeClick} value='Bread'>
              Bread
            </MenuItem>
            <MenuItem onClick={handleDishTypeClick} value='Cereals'>
              Cereals
            </MenuItem>
            <MenuItem onClick={handleDishTypeClick} value='Desserts'>
              Desserts
            </MenuItem>
            <MenuItem onClick={handleDishTypeClick} value='Drinks'>
              Drinks
            </MenuItem>
            <MenuItem onClick={handleDishTypeClick} value='Main course'>
              Main course
            </MenuItem>
            <MenuItem onClick={handleDishTypeClick} value='Salad'>
              Salad
            </MenuItem>
            <MenuItem onClick={handleDishTypeClick} value='Side dish'>
              Side dish
            </MenuItem>
            <MenuItem onClick={handleDishTypeClick} value='Soup'>
              Soup
            </MenuItem>
            <MenuItem onClick={handleDishTypeClick} value='Sandwiches'>
              Sandwiches
            </MenuItem>
            <MenuItem onClick={handleDishTypeClick} value='Starter'>
              Starter
            </MenuItem>
            <MenuItem onClick={handleDishTypeClick} value='Sweets'>
              Sweets
            </MenuItem>
          </MenuList>
        </Menu>
        {/* health으로 분류 */}

        <Menu>
          <MenuButton as={Button} variant='outline' size='md' className='mx-2'>
            Health
          </MenuButton>
          <MenuList>
            <MenuItem onClick={handleHealthClick} value='dairy-free'>
              Dairy-free
            </MenuItem>
            <MenuItem onClick={handleHealthClick} value='gluten-free'>
              Gluten-free
            </MenuItem>
            <MenuItem onClick={handleHealthClick} value='low-sugar'>
              Low-sugar
            </MenuItem>
            <MenuItem onClick={handleHealthClick} value='tree-nut-free'>
              Tree-nut-free
            </MenuItem>
            <MenuItem onClick={handleHealthClick} value='vegan'>
              Vegan
            </MenuItem>
            <MenuItem onClick={handleHealthClick} value='vegetarian'>
              Vegetarian
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div className='my-10 flex justify-center'>
        <div className='text-lg mb-4 mx-5'>
          <strong>MealType : </strong> {mealType}
        </div>
        <div className='text-lg mb-4 mx-5'>
          <strong>DishType : </strong> {dishType}
        </div>
        <div className='text-lg mb-4 mx-5'>
          <strong>Health : </strong> {health}
        </div>
      </div>
      <div>
        {error && <p>Error: {error}</p>}

        <div>
          {/* 레시피 목록 표시 */}
          {error ? (
            <p>Error: {error}</p>
          ) : (
            recipes.map((recipe, index) => (
              <ShowSearchRecipe
                key={index}
                label={recipe.label}
                ingredients={Object.keys(recipe.ingredients).map(key => (
                  <li key={key}>{recipe.ingredients[key].text}</li>
                ))}
                dishType={recipe.dishType}
                image={recipe.image}
                // tags={recipe.tags ? Object.keys(recipe.tags).map(key => (
                //   <li key={key}>{recipe.tags[key]}</li>
                // )) : ''}
                tags={recipe.tags ? recipe.tags.join(', ') : ''}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
