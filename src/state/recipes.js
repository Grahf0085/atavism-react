import { useEffect, useState } from 'react';
import { fetchRecipeList, fetchRecipeSearch } from '../services/atavismAPI';

export const getRecipeList = (craft, page) => {

  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipeList(craft, page)
      .then(setRecipes)
      .finally(() => setLoading(false));
  }, [craft, page]);

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

