import { useEffect, useState } from 'react';
import { fetchRecipeList } from '../services/atavismAPI';

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
