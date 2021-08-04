/* eslint-disable max-len */
import React from 'react';
import styles from '../components/app/styles.css';
import infoStyles from './serverInfo.css';

const Info = () => {
  return ( 
    <section className={styles.info}>
      <h2>What You Will Find Here</h2>
      <section className={styles.meat}>
        <ul className={infoStyles.whatFind}>
          <li className={infoStyles.items}>Jobs
            <ol className={infoStyles.changedPart}>
              <li className={infoStyles.items}>Several Jobs H2H skill drastically increased</li>
              <li className={infoStyles.items}>
                  PLD and DRK MP increased to equal RDMs.
              </li>
            </ol>
          </li>
          <li className={infoStyles.items}>Meta
            <ol className={infoStyles.changedPart}>
              <li className={infoStyles.items}>No Dual Boxing At This Time</li>
              <li className={infoStyles.items}>Level Sync: 10</li>
              <li className={infoStyles.items}>No Global Yell</li>
            </ol>
          </li>
          <li className={infoStyles.items}>Game Play
            <ol className={infoStyles.changedPart}>
              <li className={infoStyles.items}>Land Kings are Force Pop</li>
              <li className={infoStyles.items}>Dia/Bio Overwrite Works Both Ways</li>
              <li className={infoStyles.items}>Mob Trains Walk back to Spawn Point</li>
              <li className={infoStyles.items}>Craft Skillup Rate: 1.5</li>
              <li className={infoStyles.items}>Unlimited AH Listings. Items expire in 30 days.</li>
              <li className={infoStyles.items}>Max Level: 50. No ROZ/COP until Shadow Lord Falls</li>
              <li className={infoStyles.items}>
                  It&apos;s a known bug that topaz has way too many mobs in some zones. Also, SE has moved mobs around and
                  introduced new mobs over the years. I attempted to rearrange a few zones and then got tired of it.
              </li>
            </ol>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Info;
