import React from 'react';
import styles from '../styles/styles.css';
import rulesStyles from '../styles/rulesStyles.css';

const Rules = () => {
  return (
    <section className={styles.rules}>
      <h2>Rules</h2>
      <section className={styles.meat}>
        <h2>General</h2>
        <section className={rulesStyles.rulesMeat}>
          <li className={rulesStyles.rulesLi}>It&apos;s just a game</li>
          <li className={rulesStyles.rulesLi}>Don&apos;t cheat</li>
          <li className={rulesStyles.rulesLi}>Have Fun</li>
          <li className={rulesStyles.rulesLi}>Be respectful</li>
          <li className={rulesStyles.rulesLi}>Play Together</li>
          <li className={rulesStyles.rulesLi}>Unless you&apos;re a BST or noob</li>
          <li className={rulesStyles.rulesLi}>No real money trade</li>
          <li className={rulesStyles.rulesLi}>No exploiting bugs. Just report it in the discord</li>
          <li className={rulesStyles.rulesLi}>No monster player killing</li>
          <li className={rulesStyles.rulesLi}>If you find an out of era item report it in the discord</li>
          <li className={rulesStyles.rulesLi}>Requests for additional addons should be made in discord addon channel</li>
        </section>
        <h2>Approved <a href = "https://docs.ashitaxi.com/">Ashita Addons/Plugins</a></h2>
        <section className={rulesStyles.rulesMeat}>
          <li className={rulesStyles.rulesLi}>Battlemod</li>
          <li className={rulesStyles.rulesLi}>Cfhblock</li>
          <li className={rulesStyles.rulesLi}>Chatmon</li>
          <li className={rulesStyles.rulesLi}>Checker</li>
          <li className={rulesStyles.rulesLi}>Clock</li>
          <li className={rulesStyles.rulesLi}>CraftMon</li>
          <li className={rulesStyles.rulesLi}>Deeps</li>
          <li className={rulesStyles.rulesLi}>Distance</li>
          <li className={rulesStyles.rulesLi}>Draw Distance</li>
          <li className={rulesStyles.rulesLi}>Duration</li>
          <li className={rulesStyles.rulesLi}>Filterless</li>
          <li className={rulesStyles.rulesLi}>Filters</li>
          <li className={rulesStyles.rulesLi}>Find</li>
          <li className={rulesStyles.rulesLi}>FPS</li>
          <li className={rulesStyles.rulesLi}>Gearlock</li>
          <li className={rulesStyles.rulesLi}>Hardware Mouse</li>
          <li className={rulesStyles.rulesLi}>Hide Console</li>
          <li className={rulesStyles.rulesLi}>Logs</li>
          <li className={rulesStyles.rulesLi}>Pet Info</li>
          <li className={rulesStyles.rulesLi}>Recast</li>
          <li className={rulesStyles.rulesLi}>Screenshot</li>
          <li className={rulesStyles.rulesLi}>Status</li>
          <li className={rulesStyles.rulesLi}>Timestamp</li>
          <li className={rulesStyles.rulesLi}>TParty</li>
          <li className={rulesStyles.rulesLi}>Watchexp</li>
        </section>
        <h2>Approved <a href = "https://docs.windower.net">Windower Addons/Plugins</a></h2>
        <section className={rulesStyles.rulesMeat}>
          <li className={rulesStyles.rulesLi}>Bar Filler</li>
          <li className={rulesStyles.rulesLi}>Battle Mod</li>
          <li className={rulesStyles.rulesLi}>Blist</li>
          <li className={rulesStyles.rulesLi}>Cancel</li>
          <li className={rulesStyles.rulesLi}>Clock</li>
          <li className={rulesStyles.rulesLi}>Console BG</li>
          <li className={rulesStyles.rulesLi}>Distance</li>
          <li className={rulesStyles.rulesLi}>Dress Up</li>
          <li className={rulesStyles.rulesLi}>Enemy Bar</li>
          <li className={rulesStyles.rulesLi}>Equip Viewer</li>
          <li className={rulesStyles.rulesLi}>FFXIDB</li>
          <li className={rulesStyles.rulesLi}>Find All</li>
          <li className={rulesStyles.rulesLi}>Gear Swap</li>
          <li className={rulesStyles.rulesLi}>Highlight</li>
          <li className={rulesStyles.rulesLi}>Info Bar</li>
          <li className={rulesStyles.rulesLi}>Logger</li>
          <li className={rulesStyles.rulesLi}>Macro Changer</li>
          <li className={rulesStyles.rulesLi}>Pet TP</li>
          <li className={rulesStyles.rulesLi}>Scoreboard</li>
          <li className={rulesStyles.rulesLi}>Set BGM</li>
          <li className={rulesStyles.rulesLi}>SS Organizer</li>
          <li className={rulesStyles.rulesLi}>Time Stamp</li>
          <li className={rulesStyles.rulesLi}>Timers</li>
          <li className={rulesStyles.rulesLi}>TParty</li>
          <li className={rulesStyles.rulesLi}>XIV Bar</li>
          <li className={rulesStyles.rulesLi}>Zone Timer</li>
        </section>
        <h2>BANNED</h2>
        <section className={rulesStyles.bannedMeat}>
          <li className={rulesStyles.rulesLi}>Any modified bootloader</li>
          <li className={rulesStyles.rulesLi}>Auction House Addons</li>
          <li className={rulesStyles.rulesLi}>Targeting Addons</li>
          <li className={rulesStyles.rulesLi}>Position of Speed Addons</li>
          <li className={rulesStyles.rulesLi}>Multisend / Servo</li>
          <li className={rulesStyles.rulesLi}>Minimap and other map overlays that interact with the world (Show NPCs, players, etc)</li>
          <li className={rulesStyles.rulesLi}>Allmaps</li>
          <li className={rulesStyles.rulesLi}>Scripts ran unattended</li>
          <li className={rulesStyles.rulesLi}>Shorthand used to claim</li>
          <li className={rulesStyles.rulesLi}>LightLuggage</li>
          <li className={rulesStyles.rulesLi}>Fishing/exp/healing bots or any other bots that automate player actions</li>
          <li className={rulesStyles.rulesLi}>Claim tools or character enhancement tools like flee or warp hacks.</li>
          <li className={rulesStyles.rulesLi}>WatchDog (or anything that gives you abilities you shouldn&apos;t have access to)</li>
        </section>
      </section>
    </section>
  );
};

export default Rules;
