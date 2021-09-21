import React, { useState } from 'react';
import { getRecipeIngredientSearch } from '../../state/recipes';
import Recipe from './Recipe';
import recipeStyles from '../../styles/recipes.css';
import styles from '../../styles/styles.css';

const IngredientSearch = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [inputBox, setInputBox] = useState('');
  const [page, setPage] = useState(1);

  const { searchedIngredientRecipes, loadingIngredients } = getRecipeIngredientSearch(searchTerm, page);

  if(loadingIngredients) return <h1>Loading Recipes...</h1>;

  const recipeElements = searchedIngredientRecipes.map((recipe) => (
    <li key={recipe.id}> 
      <Recipe {...recipe} />
    </li>
  ));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchTerm(inputBox);
  };

  return (
    <section className={styles.recipesList}>
      <form onSubmit={handleSubmit} className={recipeStyles.searchForm}>
        <input className={recipeStyles.searchInput} type="text" placeholder="search for a recipe" onChange={((e) => setInputBox(e.target.value))} value={inputBox}></input>
      </form>
      <section className={recipeStyles.listMeat}>
        <ul className={recipeStyles.hlist}>{recipeElements}</ul>
        <section>
          <button className={recipeStyles.pagingButton} disabled={page <= 1} onClick={() => setPage((prevPage) => 
            prevPage - 1)}>&lt;</button>
          <button className={recipeStyles.pagingButton} disabled={searchedIngredientRecipes.length < 10} onClick={() => 
            setPage((prevPage) => prevPage + 1)}>&gt;</button>
        </section>
      </section>
    </section>
  );
};

export default IngredientSearch;
