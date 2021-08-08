import React, { useState } from 'react';
import { getAdventurerList } from '../state/adventurers';
import Adventurer from './Adventurer';
import styles from '../components/app/styles.css';
import adventureListStyles from './adventurelist.css';

const AdventurerList = () => {

  const [page, setPage] = useState(1);
  const { adventurers, loading } = getAdventurerList(page);

  if(loading) return <h1>Loading Adventurers...</h1>;

  const adventurerElements = adventurers.map((oneAdventurer) => (
    <li key={oneAdventurer.id} className={adventureListStyles.adventurerLi}> 
      <Adventurer {...oneAdventurer} />
    </li>
  ));

  return (
    <section className={styles.adventurerList}>
      <h2>Online</h2>
      <section className={adventureListStyles.listMeat}>
        <ul className={adventureListStyles.adventurerColumns}>{adventurerElements}</ul>
        <section>
          <button className={adventureListStyles.pagingButton} disabled={page <= 1} onClick={() => setPage((prevPage) => 
            prevPage - 1)}>&lt;</button>
          <button className={adventureListStyles.pagingButton} disabled={adventurers.length < 50} onClick={() => 
            setPage((prevPage) => prevPage + 1)}>&gt;</button>
        </section>
      </section>
    </section>
  );

};

export default AdventurerList;
