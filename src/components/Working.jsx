import React from 'react';
import styles from '../styles/styles.css';
import workingStyles from '../styles/workingStyles.css';

const Working = () => {
  return (
    <section className={styles.working}>
      <h2>Missions</h2>
      <section className={workingStyles.bcnmMeat}>
        <h2>Nation Missions: All Working</h2>
        <h2>Zilart Missions: ZM1 to ZM13</h2>
        <h2>COP Missions: PM1 to PM5-2</h2>
      </section>
      <h2>BCNMs, KSNMs, and ENMs</h2>
      <section className={workingStyles.bcnmMeat}>
        <section>
          <h2>Balgas Dais</h2>
          <p>Treasure and Tribulations (BS50)</p>
          <p>Wild Wild Whiskers (BS60)</p>
          <p>sectionine Punishers (BS60)</p>
          <p>Early Bird Catches the Wyrm (KS99)</p>
        </section>
        <section>
          <h2>Waughroon Shrine</h2>
          <p>Royal Jelly (BS40)</p>
          <p>Up in Arms (BS60)</p>
          <p>Operation Desert Swarm (KS30)</p>
        </section>
        <section>
          <h2>Horlais Peak</h2>
          <p>Carapace Combatants (BS30)</p>
          <p>Under Observation (BS40)</p>
          <p>Double Dragonian (KS30)</p>
        </section>
        <section>
          <h2>Sacrifical Chamber</h2>
          <p>Jungle Boogymen (BS60)</p>
          <p>Amphibian Assault (BS60)</p>
        </section>
        <section>
          <h2>Bearclaw Pinnacle</h2>
          <p>Brothers (ENM75)</p>
        </section>
        <section>
          <h2>Boneyard Gully</h2>
          <p>Sheep in Antlion&apos;s Clothing (ENM75)</p>
        </section>
        <section>
          <h2>Ghelsba Outpost</h2>
          <p>Petrifying Pair (BS30)</p>
        </section>
        <section>
          <h2>Qu&apos;Bia Arena</h2>
          <p>Undying Promise (BS40)</p>
        </section>
      </section>
    </section>
  );
};

export default Working;
