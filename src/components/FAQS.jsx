import React from 'react';
import styles from '../components/app/styles.css';
import faqsStyles from './faqsStyles.css';


const FAQs = () => {
  return (
    <section className={styles.FAQs}>
      <h2>FAQs</h2>
      <section className={styles.meat}>
        <h2>Why a COP &quot;era&quot; server? There are other &quot;era&quot; servers?</h2>
        <section className={faqsStyles.faqsMeat}>
          <p> Vanilla FFXI provided the impossible task to beat the Shadow Lord at level 50 by forcing groups to combine melee and magic damage dealers.
            Around the release of ROTZ the level cap was steadily raised to 75.
            ROTZ provided new missions and end game HNMs/Gods for the new 75
            player base to come together. The new jobs added were mostly damage dealers.
            COP also brought different jobs together but this time
            the challenge wasn&apos;t to be the best end game player you could be, but about how well you could master being a level 30, 40, 50, etc
            player. After COP FFXI inroduced instanced zones (salvage), made melee burn, blm burn, smn burn, and mnk burn a more normal leveling
            experience, allowed for players of all levels and all jobs to participate in events together(beseiged), and added jobs that filled
            multiple roles (to varying degrees) in a party. In short, it made the game flatter in the tradition of WoW. I say all this to point
            out why COP is different than the expansions that followed. There are no other COP servers.
          </p>
        </section>
        <h2>Who should play on this server?</h2>
        <section className={faqsStyles.faqsMeat}>
          <p>Anyone who thinks FFXI was at it&apos;s best during COP. Anyone who wants to explore a old school game. Sadists</p>
        </section>
        <h2>What kind of server is this hosted on?</h2>
        <section className={faqsStyles.faqsMeat}>
          <p>Local machine running...</p>
          <p>Operating System: Arch Linux.</p>
          <p>Hardware: core i5 1140G7, 16GB LPDDR4X 4266MHz RAM, and a 512GB PCIe SSD.</p>
          <p>Connection: 200mbps</p>
        </section>
        <h2>Could your toon data be lost?</h2>
        <section className={faqsStyles.faqsMeat}>
          <p>The database is backed up (at least) weekly to an online server and to an external hard drive</p>
        </section>
        <h2>How often will the server be down?</h2>
        <section className={faqsStyles.faqsMeat}>
          <p>Besides the occassional power outage the server will be restarted at least weekly. A one hour warning will be posted before restarts.</p>
        </section>
      </section>
    </section>
  );
};

export default FAQs;
