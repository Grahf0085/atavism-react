import React from 'react';
import headerStyles from './headerStyles.css';
import styles from '../components/app/styles.css';

const Header = () => {
  return <header className={styles.titleArea}>
    <h1 className={headerStyles.mainTitle}>Project Atavism</h1>
    <h2 className={headerStyles.subTitle}>Party Like It&apos;s 2005</h2>
  </header>;
};

export default Header;
