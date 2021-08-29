import React from 'react';
import styles from '../styles/styles.css';
import infoStyles from '../styles/serverInfoStyles.css';

const Info = () => {
  return ( 
    <section className={styles.info}>
      <h2>What You Will Find Here</h2>
      <section className={styles.meat}>
        <ul className={infoStyles.whatFind}>
          <h2>Game Play</h2>
          <li className={infoStyles.items}>
            <ol className={infoStyles.changedPart}>
              <li className={infoStyles.items}>Initial Level Cap: 50. No ROZ until Shadow Lord falls. No COP until someone has sky access</li>
              <li className={infoStyles.items}>Some &ldquo;content&ldquo; was more seperable than other &ldquo;content&ldquo;. As a result there is a lot of bleedthrough between vanilla and ROZ. Less bleed through for COP. And even less bleed through for TOAU - which was mostly eliminated</li>
              <li className={infoStyles.items}>Land Kings are Force Pop</li>
              <li className={infoStyles.items}>Argus and Leech King levels increased</li>
              <li className={infoStyles.items}>Dia/Bio Overwrite Works Both Ways</li>
              <li className={infoStyles.items}>Mob Trains Walk back to Spawn Point</li>
              <li className={infoStyles.items}>Craft Skillup Rate: 1.5</li>
              <li className={infoStyles.items}>Unlimited AH Listings. Items expire in 30 days.</li>
              <li className={infoStyles.items}>
                  It&apos;s a known bug that topaz has way too many mobs in some zones. Also, SE has moved mobs around and
                  introduced new mobs over the years. I attempted to rearrange a few zones and then got tired of it.
              </li>
            </ol>
          </li>
          <h2>Jobs</h2>
          <li className={infoStyles.items}>
            <ol className={infoStyles.changedPart}>
              <li className={infoStyles.items}>Several Jobs H2H skill drastically increased</li>
              <li className={infoStyles.items}>PLD and DRK MP increased to equal RDMs</li>
              <li className={infoStyles.items}>Several abilities/traits implemented from the start. Ie MNK and NIN have subtle blow and DRG has spirit surge even though those were not vanilla traits/abilities</li>
              <li className={infoStyles.items}>Other abiltiies/traits will be unlocked as expansions are unlocked. Ie PLD will get shield mastery and WHM will get divine veil when COP is released</li>
              <li className={infoStyles.items}>TOAU merits left in to give end game a little more depth and avoid updating DATs. Spending merits ON ANY MERITS BESIDES TOAU MERITS AND THOSE BEFORE TOAU WILL RESULT IN LOOSING MERIT POINTS</li>
            </ol>
          </li>
          <h2>Synthesis / Items</h2>
          <li className={infoStyles.items}>
            <ol className={infoStyles.changedPart}>
              <li className={infoStyles.items}>Removed desynthesis recipes that make no sense - ie Genbu&apos;s Kabuto desynthesis for level 8 alchemy to make sheep leather</li>
              <li className={infoStyles.items}>Where the english wiki wasn&apos;t clear on the level of a recipe the <a href="http://wiki.ffo.jp/">japanese wiki</a> was consulted</li>
              <li className={infoStyles.items}>Where both wikis were unclear, desynthesis levels for items obtained exclusively from mobs changed to more closely match other recipes that produced similar results</li>
              <li className={infoStyles.items}>All desynthesis recipes use subcraft - just like Limit Break - but updated to include my updated values</li>
              <li className={infoStyles.items}>All vanilla/ROZ/COP items are listed on the AH. Most ROZ wont be available until ROZ is released. Likewise for COP.</li>
            </ol>
          </li>
          <h2>Meta</h2>
          <li className={infoStyles.items}>
            <ol className={infoStyles.changedPart}>
              <li className={infoStyles.items}>No Dual Boxing At This Time</li>
              <li className={infoStyles.items}>Level Sync: 10</li>
              <li className={infoStyles.items}>No Global Yell</li>
            </ol>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Info;
