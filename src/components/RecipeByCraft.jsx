import React, { useState } from 'react';
import { getRecipeList } from '../state/recipes';
import Recipe from './Recipe'; 
import recipeStyles from '../styles/recipes.css';
import styles from '../styles/styles.css';

const RecipeByCraft = () => {

  const [craft, setCraft] = useState('wood');
  const [minLevel, setMinLevel] = useState(1);
  const [maxLevel, setMaxLevel] = useState(103);
  const [page, setPage] = useState(1);

  const { recipes, loading } = getRecipeList(craft, minLevel, maxLevel, page);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const clear = (e) => {
    e.target.value = '';
  };

  if(loading) return <h1>Loading Recipes...</h1>;

  const recipeElements = recipes.map((recipe) => (
    <li key={recipe.id}> 
      <Recipe {...recipe} />
    </li>
  ));

  return (
    <section className={styles.recipesList}>
      <section className={recipeStyles.selectorContainer}>
        <button className={recipeStyles.craftButton} onClick={() => setCraft('wood')}>Woodwork</button>
        <button className={recipeStyles.craftButton} onClick={() => setCraft('smith')}>Smithing</button>
        <button className={recipeStyles.craftButton} onClick={() => setCraft('gold')}>Goldsmithing</button>
        <button className={recipeStyles.craftButton} onClick={() => setCraft('cloth')}>Clothcraft</button>
        <button className={recipeStyles.craftButton} onClick={() => setCraft('leather')}>Leathercraft</button>
        <button className={recipeStyles.craftButton} onClick={() => setCraft('bone')}>Bonecraft</button>
        <button className={recipeStyles.craftButton} onClick={() => setCraft('alchemy')}>Alchemy</button>
        <button className={recipeStyles.craftButton} onClick={() => setCraft('cook')}>Cooking</button>
      </section>
      <section className={recipeStyles.listMeat}>
        <form onSubmit={handleSubmit} className={recipeStyles.recipeLevelForm}>
          <label> Min Level: 
            <input className={recipeStyles.searchInput} type="number" placeholder="minimum level" onFocus={((e) => clear(e))} onChange={((e) => setMinLevel(e.target.value))} value={minLevel}></input>
          </label>
          <label> Max Level: 
            <input className={recipeStyles.searchInput} type="number" placeholder="maximum level" onFocus={((e) => clear(e))} onChange={((e) => setMaxLevel(e.target.value))} value={maxLevel}></input>
          </label>
        </form>
        <ul className={recipeStyles.hlist}>{recipeElements}</ul>
        <section>
          <button className={recipeStyles.pagingButton} disabled={page <= 1} onClick={() => setPage((prevPage) => 
            prevPage - 1)}>&lt;</button>
          <button className={recipeStyles.pagingButton} disabled={recipes.length < 10} onClick={() => 
            setPage((prevPage) => prevPage + 1)}>&gt;</button>
        </section>
      </section>
    </section>
  );
};

export default RecipeByCraft;
