import { useEffect, useState } from 'react';
import { fetchRecipeList, fetchRecipeSearch } from '../services/atavismAPI';

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

export const getRecipeSearch = (term, page) => {

  const [loading, setLoading] = useState(true);
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  useEffect(() => {
    fetchRecipeSearch(term, page)
      .then(setSearchedRecipes)
      .finally(() => setLoading(false));
  }, [term, page]);

  return { searchedRecipes, loading };

};

