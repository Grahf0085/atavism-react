import React from 'react';
import { getNumberOnline } from '../state/adventurers';
import headerStyles from '../styles/headerStyles.css';
import styles from '../styles/styles.css';


const Header = () => {

  const { numberOnline, loading } = getNumberOnline();

  return <header className={styles.titleArea}>
    <h1 className={headerStyles.mainTitle}>Project Atavism</h1>
    <h2 className={headerStyles.subTitle}>Party Like It&apos;s 2005</h2>
    {loading ? <h2 className={headerStyles.numberOnline}>Total Online: Loading...</h2> : <h2 className={headerStyles.numberOnline}>Total Online: {numberOnline}</h2>}
  </header>;
};

export default Header;
