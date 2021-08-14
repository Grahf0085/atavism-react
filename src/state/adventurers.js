import { useEffect, useState } from 'react';
import { fetchAllAdventurers, fetchDetails, fetchNumberOnline, fetchNameList } from '../services/atavismAPI';

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
  }, [name]);

  return { details, loading };

};

export const getNumberOnline = () => {

  const [loading, setLoading] = useState(true);
  const [numberOnline, setNumberOnline] = useState(0);

  useEffect(() => {
    fetchNumberOnline()
      .then(setNumberOnline)
      .finally(() => setLoading(false));
  });

  return { numberOnline, loading };
};

export const getNameList = (name, page) => {

  const [loading, setLoading] = useState(true);
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    fetchNameList(name, page)
      .then(setNameList)
      .finally(() => setLoading(false));
  }, [name]);

  return { nameList, loading };
};
