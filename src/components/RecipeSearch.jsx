import React, { useState } from 'react';
import ResultSearch from './ResultSearch';
import IngredientSearch from './IngredientSearch';
import styles from '../styles/styles.css';

const RecipeSearch = () => {

  const [area, setArea] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.recipesList}>
      <form onSubmit={handleSubmit}>
        <label> Search by Result: 
          <input type="radio" name="searchBy" value={area} onChange={() => setArea('result')}></input>
        </label>
        <label> Search by Ingredient: 
          <input type="radio" name="searchBy" value={area} onChange={() => setArea('ingredient')}></input>
        </label>
      </form>
      {area === 'result' ? <ResultSearch /> : <section></section> }
      {area === 'ingredient' ? <IngredientSearch /> : <section></section> }
    </section>
  );
};

export default RecipeSearch;
