import React, { useState } from 'react';
import ResultSearch from './ResultSearch';
import IngredientSearch from './IngredientSearch';
import styles from '../../styles/styles.css';
import recipeStyles from '../../styles/recipes.css';

const RecipeSearch = () => {

  const [area, setArea] = useState('');

  return (
    <section className={styles.recipesList}>
      <button className={recipeStyles.button} onClick={() => setArea('result')}>Search by Result</button>
      <button className={recipeStyles.button} onClick={() => setArea('ingredient')}>Search by Ingredient</button>
      {area === 'result' ? <ResultSearch /> : <section></section> }
      {area === 'ingredient' ? <IngredientSearch /> : <section></section> }
    </section>
  );
};

export default RecipeSearch;
