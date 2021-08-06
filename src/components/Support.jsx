import React from 'react';
import styles from '../components/app/styles.css';

const Support = () => {
  return (
    <section className={styles.support}>
      <h2>Supportish</h2>
      <section className={styles.meat}>
        <h2>Toon Got Stuck? Type &quot;!unstuck&quot;</h2>
        <p>The &quot;!unstuck&quot; command will teleport your toon back to it&apos;s homepoint after 20 minutes. This command should only be used
         as a last resprt when you&apos;re unable to move. After you type &quot;!unstuck&quot; and press enter you toon will receive a terror
         status (your character will be unable to move or otherwise act) for 20 minutes. After a 20 minute wait your toon will be teleported back to it&apos;s home point. Anyone
         abusing this command could be punished. This command cannot be cancelled once triggered.
        </p>
        <h2>Game Hung or Crashed During a Cutscene/Dialogue? Type &quot;!release&quot;</h2>
        <p>If a cutscene or dialogue is frozen it might be possible to skip the cutscene by using the &quot;!release&quot; command. Not guaranteed to work.
        </p>
        <h2>Player Harassed You? Use /blacklist</h2>
        <p>Maybe you try and talk out the problem first. Be brave. If that doesn&apos;t work ask the player to stop sending you
          messages. If that doesn&apos;t work use the /blacklist command to block the player from contacting you in-game. If that
          doesn&apos;t work please take a screenshot of the incident and report on discord.
        </p>
        <h2>Witnessed a Crime? Screenshot It</h2>
        <p>Take a screenshot of the violation and post it in the discord channel. If you want to remain anonymous just PM me the screenshot. Must have evidence of your claim.</p>
      </section>
    </section>
  );
};

export default Support;
