import React, { useState } from 'react';
import styles from '../styles/styles.css';
import { getNameList } from '../state/adventurers';
import Adventurer from './Adventurer';
import playersearchstyles from '../styles/playersearch.css';

const PlayerSearch = () => {

  const [searchedName, setName] = useState('adventurer\'s name');
  const [page, setPage] = useState(1);

  const { nameList, loading } = getNameList(searchedName, page);

  if(loading) return <h1>Loading Adventurers...</h1>;

  const nameElements = nameList.map((name) => (
    <li key={name.id} className={playersearchstyles.adventurerLi}> 
      <Adventurer {...name} />
    </li>
  ));

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const clear = (e) => {
    e.target.value = '';
  };

  return (
    <section className={styles.adventurerList}>
      <form onSubmit={handleSubmit} className={playersearchstyles.searchForm}>
        <input className={playersearchstyles.searchInput} type="text" placeholder="adventurer's name" onFocus={((e) => clear(e))} onChange={((e) => setName(e.target.value))} value={searchedName}></input>
      </form>
      <section className={playersearchstyles.listMeat}>
        <ul className={playersearchstyles.adventurerColumns}>{nameElements}</ul>
        <section>
          <button className={playersearchstyles.pagingButton} disabled={page <= 1} onClick={() => setPage((prevPage) => 
            prevPage - 1)}>&lt;</button>
          <button className={playersearchstyles.pagingButton} disabled={nameList.length < 10} onClick={() => 
            setPage((prevPage) => prevPage + 1)}>&gt;</button>
        </section>
      </section>
    </section>
  );
};

export default PlayerSearch;
