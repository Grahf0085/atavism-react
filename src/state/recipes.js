import { useEffect, useState } from 'react';
import { fetchRecipeList, fetchRecipeResultSearch, fetchRecipeIngredientSearch } from '../services/atavismAPI';

export const getRecipeList = (craft, minLevel, maxLevel, page) => {

  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipeList(craft, minLevel, maxLevel, page)
      .then(setRecipes)
      .finally(() => setLoading(false));
  }, [craft, minLevel, maxLevel, page]);

  return { recipes, loading };

};

export const getRecipeResultSearch = (term, page) => {

  const [loadingResults, setLoading] = useState(true);
  const [searchedResultRecipes, setSearchedResultRecipes] = useState([]);

  useEffect(() => {
    fetchRecipeResultSearch(term, page)
      .then(setSearchedResultRecipes)
      .finally(() => setLoading(false));
  }, [term, page]);

  return { searchedResultRecipes, loadingResults };

};

export const getRecipeIngredientSearch = (term, page) => {

  const [loadingIngredients, setLoading] = useState(true);
  const [searchedIngredientRecipes, setSearchedIngredientRecipes] = useState([]);

  useEffect(() => {
    fetchRecipeIngredientSearch(term, page)
      .then(setSearchedIngredientRecipes)
      .finally(() => setLoading(false));
  }, [term, page]);

  return { searchedIngredientRecipes, loadingIngredients };
};

