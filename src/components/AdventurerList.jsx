import React, { useState } from 'reaact';
import { getAdventurerList } from '../state/adventurers';
import Adventurer from './Adventurer';

const AdventurerList = () => {

  const [page, setPage] = useState(1);
  const { adventurers, loading } = getAdventurerList(page);

  if(loading) return <h1>Loading List...</h1>;

  const adventurerElements = adventurers.map((oneAdventurer) => ( //right id????
    <li key={oneAdventurer.id}> 
      <Adventurer {...oneAdventurer} />
    </li>
  ));

  return (
    <>
      <button disabled={page <= 1} onClick={() => setPage((prevPage) => 
        prevPage - 1)}>&lt;</button>
      {page}
      <button disabled={adventurers.length < 3} onClick={() => 
        setPage((prevPage) => prevPage + 1)}>&gt;</button>
      <ul>{adventurerElements}</ul>
    </>
  );

};

export default AdventurerList;
