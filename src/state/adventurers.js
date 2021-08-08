import { useEffect, useState } from 'react';
import { fetchAllAdventurers, fetchDetails } from '../services/atavismAPI';

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

export const getAdventurerDetails = (name) => {
  
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetchDetails(name)
      .then(setDetails)
      .finally(() => setLoading(false));
  });

  return { details, loading };

};
