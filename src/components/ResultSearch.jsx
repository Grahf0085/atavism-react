import React, { useState } from 'react';
import { getRecipeResultSearch } from '../state/recipes';
import Recipe from './Recipe';
import recipeStyles from '../styles/recipes.css';
import styles from '../styles/styles.css';

const ResultSearch = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  const { searchedResultRecipes, loadingResults } = getRecipeResultSearch(searchTerm, page);

  if(loadingResults) return <h1>Loading Recipes...</h1>;

  const recipeElements = searchedResultRecipes.map((recipe) => (
    <li key={recipe.id}> 
      <Recipe {...recipe} />
    </li>
  ));

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const clear = (e) => {
    e.target.value = '';
  };

  return (
    <section className={styles.recipesList}>
      <form onSubmit={handleSubmit} className={recipeStyles.searchForm}>
        <input className={recipeStyles.searchInput} type="text" placeholder="search for a recipe" onFocus={((e) => clear(e))} onChange={((e) => setSearchTerm(e.target.value))} value={searchTerm}></input>
      </form>
      <section className={recipeStyles.listMeat}>
        <ul className={recipeStyles.hlist}>{recipeElements}</ul>
        <section>
          <button className={recipeStyles.pagingButton} disabled={page <= 1} onClick={() => setPage((prevPage) => 
            prevPage - 1)}>&lt;</button>
          <button className={recipeStyles.pagingButton} disabled={searchedResultRecipes.length < 10} onClick={() => 
            setPage((prevPage) => prevPage + 1)}>&gt;</button>
        </section>
      </section>
    </section>
  );
};

export default ResultSearch;
