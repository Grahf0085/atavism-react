import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/app/styles.css';

export default function Content() {
  return (
    <section className={styles.sideBar}>
      <Link to="/">Home</Link>
      <Link to="/info">Server Info</Link>
      <Link to="/connecting">Connecting</Link>
      <Link to="/FAQs">FAQs</Link>
      <Link to="/Rules">Rules</Link>
      <Link to="/BCNM-KSNM-ENM">BCNM/KSNM/ENM</Link>
      <Link to="/Support">Support</Link>
    </section>
  );
}
