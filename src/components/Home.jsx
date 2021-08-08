import React from 'react';
import styles from '../components/app/styles.css';

const Home = () => {
  return ( 
    <section className={styles.home}>
      <h2>What Is This?</h2>
      <section className={styles.meat}>
        <p>Atavism attempts a new path to the ancient Final Fantasy XI world before the release of TOAU and all subsequent expansions.</p>
        <p>We embrace a few deviations that could, perhaps, &quot;improve&quot; things a bit.</p> 
        <p>We are a progression server that starts with vanilla content and a level 50 cap. Upon the Shadow Lords defeat ROZ zones, missions, jobs, etc
        will be unlocked for the entire server. COP missions, zones, etc will be unlocked for the entire server after one group gains access to Sky
        </p>
      </section>
    </section>
  );
};

export default Home;
