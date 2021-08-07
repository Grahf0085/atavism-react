import { useEffect, useState } from 'react';
import { fetchAllAdventurers } from '../services/atavismAPI';

export const getAdventurerList = (page) => {

  const [loading, setLoading] = useState(true);
  const [adventurers, setAdventurers] = useState([]);

  useEffect(() => {
    fetchAllAdventurers(page)
      .then(setAdventurers)
      .finally(() => setLoading(false));
  }, [page]);

  return { adventurers, loading };
  
};
