import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/styles.css';
import sidebarStyles from '../styles/sidebarStyles.css';

export default function Content() {
  return (
    <section className={styles.sideBar}>
      <section className={sidebarStyles.subList}>
        <Link to="/" className={sidebarStyles.mobileA}>Home</Link>
        <Link to="/info" className={sidebarStyles.mobileA}>Server Info</Link>
        <Link to="/connecting" className={sidebarStyles.mobileA}>Connecting</Link>
        <Link to="/FAQs" className={sidebarStyles.mobileA}>FAQs</Link>
        <Link to="/rules" className={sidebarStyles.mobileA}>Rules</Link>
        <Link to="/working" className={sidebarStyles.mobileA}>Working Content</Link>
        <Link to="/support" className={sidebarStyles.mobileA}>Support</Link>
      </section>
      <section className={sidebarStyles.subList}>
        <Link to="/adventurers" className={sidebarStyles.mobileA}>Who&apos;s Online</Link>
        <Link to="/playersearch" className={sidebarStyles.mobileA}>Player Search</Link>
        <Link to="/recipes" className={sidebarStyles.mobileA}>Recipes By Craft</Link>
        <Link to="/recipesearch" className={sidebarStyles.mobileA}>Search Recipes</Link>
      </section>
      <section className={sidebarStyles.subList}>
        <h3>Tools</h3>
        <a href = "https://www.pyogenes.com/ffxi/timer/v2.html" className={sidebarStyles.mobileA}>Time Info.</a>
        <a href = "http://ffxi-stat-calc.sourceforge.net/cgi-bin/ffxistats.cgi" className={sidebarStyles.mobileA}>Stats Calculator</a>
        <a href = "https://flippantry.com/skillchain/" className={sidebarStyles.mobileA}>Skill Chains</a>
        <a href = "http://campsitarus.blogspot.com/" className={sidebarStyles.mobileA}>Campsitarus</a>
        <a href = "http://ffxi-atlas.mageringnetwork.com/" className={sidebarStyles.mobileA}>Vana&apos;diel Atlas</a>
      </section>
      <section className={sidebarStyles.subList}>
        <h3>Links</h3>
        <a href = "https://atavismxi.fandom.com/wiki/AtavismXI_Wiki" className={sidebarStyles.mobileA}>Atavism Wiki</a>
        <a href = "https://www.wingsxi.com/wings/" className={sidebarStyles.mobileA}>Wings</a>
        <a href = "https://www.limitbreakffxi.com/" className={sidebarStyles.mobileA}>Limit Break</a>
        <a href = "https://gitlab.com/Grahf0085/atavism" className={sidebarStyles.mobileA}>Gitlab</a>
        <a href = "https://discord.gg/D8urYjmhDA" className={sidebarStyles.mobileA}>Discord</a>
      </section>
    </section>
  );
}
