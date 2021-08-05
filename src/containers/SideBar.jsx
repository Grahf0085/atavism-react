import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/app/styles.css';
import sidebarStyles from './sidebarStyles.css';

export default function Content() {
  return (
    <section className={styles.sideBar}>
      <section className={sidebarStyles.subList}>
        <Link to="/">Home</Link>
        <Link to="/info">Server Info</Link>
        <Link to="/connecting">Connecting</Link>
        <Link to="/FAQs">FAQs</Link>
        <Link to="/Rules">Rules</Link>
        <Link to="/BCNM-KSNM-ENM">BCNM/KSNM/ENM</Link>
        <Link to="/Support">Support</Link>
      </section>
      <section className={sidebarStyles.subList}>
        <h3>Tools</h3>
        <a href = "https://www.pyogenes.com/ffxi/timer/v2.html">Time Info.</a>
        <a href = "http://ffxi-stat-calc.sourceforge.net/cgi-bin/ffxistats.cgi">Stats Calculator</a>
        <a href = "https://flippantry.com/skillchain/">Skill Chains</a>
        <a href = "http://campsitarus.blogspot.com/">Campsitarus</a>
        <a href = "http://ffxi-atlas.mageringnetwork.com/">Vana&apos;diel Atlas</a>
      </section>
      <section className={sidebarStyles.subList}>
        <h3>Links</h3>
        <a href = "https://www.wingsxi.com/wings/">Wings</a>
        <a href = "https://www.limitbreakffxi.com/">Limit Break</a>
        <a href = "https://gitlab.com/Grahf0085/atavism">Gitlab</a>
        <a href = "https://discord.gg/r78h8Bt4">Discord</a>
      </section>
    </section>
  );
}
