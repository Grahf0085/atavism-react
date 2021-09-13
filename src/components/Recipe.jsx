/* eslint-disable react/prop-types */
import React from 'react';
import recipeStyles from '../styles/recipes.css';

const Recipe = ({ wood, smith, gold, cloth, leather, bone, alchemy, 
  cook, crystal, ingredient1, ingredient2, ingredient3, ingredient4,
  ingredient5, ingredient6, ingredient7, ingredient8, result, resultHQ1,
  resultHQ2, resultHQ3, resultQty, resultHQ1Qty,
  resultHQ2Qty, resultHQ3Qty, }) => {

  {result !== null ? result = result.replaceAll('_', ' ') : '';}
  {resultHQ1 !== null ? resultHQ1 = result.replaceAll('_', ' ') : '';}
  {resultHQ2 !== null ? resultHQ2 = result.replaceAll('_', ' ') : '';}
  {resultHQ3 !== null ? resultHQ3 = result.replaceAll('_', ' ') : '';}
  {crystal !== null ? crystal = crystal.replaceAll('_', ' ') : '';}
  {ingredient1 !== null ? ingredient1 = ingredient1.replaceAll('_', ' ') : '';}
  {ingredient2 !== null ? ingredient2 = ingredient2.replaceAll('_', ' ') : '';}
  {ingredient3 !== null ? ingredient3 = ingredient3.replaceAll('_', ' ') : '';}
  {ingredient4 !== null ? ingredient4 = ingredient4.replaceAll('_', ' ') : '';}
  {ingredient5 !== null ? ingredient5 = ingredient5.replaceAll('_', ' ') : '';}
  {ingredient6 !== null ? ingredient6 = ingredient6.replaceAll('_', ' ') : '';}
  {ingredient7 !== null ? ingredient7 = ingredient7.replaceAll('_', ' ') : '';}
  {ingredient8 !== null ? ingredient8 = ingredient8.replaceAll('_', ' ') : '';}

  return <section className={recipeStyles.recipeItem}>
    <section>
      Result: {result}({resultQty})
      <section>
        Skills: {wood !== 0 && ('Wood: ' + wood + ' ') }
        {smith !== 0 && ('Smith: ' + smith + ' ') }
        {gold !== 0 && ('Gold: ' + gold + ' ') }
        {cloth !== 0 && ('Cloth: ' + cloth + ' ') }
        {leather !== 0 && ('Leather: ' + leather + ' ') }
        {bone !== 0 && ('Bone: ' + bone + ' ') }
        {alchemy !== 0 && ('Alchemy: ' + alchemy + ' ') }
        {cook !== 0 && ('Cooking: ' + cook + ' ') }
      </section>
    </section>
    <section>
      Ingredients: {crystal} {', '}
      {ingredient1 !== null && (ingredient1 + ', ') }
      {ingredient2 !== null && (ingredient2 + ', ') }
      {ingredient3 !== null && (ingredient3 + ', ') }
      {ingredient4 !== null && (ingredient4 + ', ') }
      {ingredient5 !== null && (ingredient5 + ', ') }
      {ingredient6 !== null && (ingredient6 + ', ') }
      {ingredient7 !== null && (ingredient7 + ', ') }
      {ingredient8 !== null && (ingredient8 + ', ') }
    </section>
    HQ1: {resultHQ1}({resultHQ1Qty})
    HQ2: {resultHQ2}({resultHQ2Qty})
    HQ3: {resultHQ3}({resultHQ3Qty})
  </section>;
};

export default Recipe;
