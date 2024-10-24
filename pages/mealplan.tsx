import React, {useState, useEffect} from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from "@chakra-ui/react";
import ShowSearchRecipe from '../components/showSearchRecipe';

export default function MealPlanMenu() {
  const [mealType, setMealType] = useState('')
  const [dishType, setDishType] = useState('')

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

        const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${API_ID}&app_key=${API_KEY}${mealTypeQuery}${dishTypeQuery}`;
        const recipesResponse = await fetch(url);
        if (!recipesResponse.ok) {
          throw new Error('레시피를 가져오는 데 실패했습니다.');
        }
        if(!mealTypeQuery && !dishTypeQuery) {
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
  }, [mealType, dishType]);







  const showMealType = (value)=>{
    setMealType(value)
  }
  const showDishType = (value)=>{
    setDishType(value)
  }

  const handleMealTypeClick = (e) => {
    const value = (e.target as HTMLElement).getAttribute('value');
    if (value) {
      showMealType(value);
    }
  };

  const handleDishTypeClick = (e)=>{
    const value = (e.target as HTMLElement).getAttribute('value');
    if (value) {
      showDishType(value)
    }
  }


  return (
    <div className='px-2'>
      <div className='flex justify-center'>
        <Menu>
          <MenuButton as={Button} variant="outline" size="md" className='mx-2'>
            MealType
          </MenuButton>
          <MenuList>
            {/* <MenuItem value="Breakfast" onClick={showMealType(e.target.getAttribute('value'))}>Breakfast</MenuItem> */}
            <MenuItem onClick={handleMealTypeClick} value="Breakfast">Breakfast</MenuItem>
            <MenuItem onClick={handleMealTypeClick} value="Lunch">Lunch</MenuItem>
            <MenuItem onClick={handleMealTypeClick} value="Dinner">Dinner</MenuItem>
            <MenuItem onClick={handleMealTypeClick} value="Snack">Snack</MenuItem>
            <MenuItem onClick={handleMealTypeClick} value="Teatime">Teatime</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} variant="outline" size="md" className='mx-2'>
            dishType
          </MenuButton>
          <MenuList>
            <MenuItem onClick={handleDishTypeClick} value="Biscuits and cookies">Biscuits and cookies</MenuItem>
            <MenuItem onClick={handleDishTypeClick} value="Bread">Bread</MenuItem>
            <MenuItem onClick={handleDishTypeClick} value="Cereals">Cereals</MenuItem>
            <MenuItem onClick={handleDishTypeClick} value="Desserts">Desserts</MenuItem>
            <MenuItem onClick={handleDishTypeClick} value="Drinks">Drinks</MenuItem>
            <MenuItem onClick={handleDishTypeClick} value="Main course">Main course</MenuItem>
            <MenuItem onClick={handleDishTypeClick} value="Salad">Salad</MenuItem>
            <MenuItem onClick={handleDishTypeClick} value="Side dish">Side dish</MenuItem>
            <MenuItem onClick={handleDishTypeClick} value="Soup">Soup</MenuItem>
            <MenuItem onClick={handleDishTypeClick} value="Sandwiches">Sandwiches</MenuItem>
            <MenuItem onClick={handleDishTypeClick} value="Starter">Starter</MenuItem>
            <MenuItem onClick={handleDishTypeClick} value="Sweets">Sweets</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div>
        <p><strong>MealType : </strong> {mealType}</p>
        <p><strong>DishType : </strong> {dishType}</p>
      </div>
      <div>
        {error && <p>Error: {error}</p>}
        
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
    </div>
  );
}

