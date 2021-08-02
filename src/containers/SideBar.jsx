import React from 'react';
import { Link } from 'react-router-dom';

export default function Content() {
  return (
    <section className="sideBar">
      <Link to="/">Home</Link>
      <Link to="/connecting">Connecting</Link>
      <Link to="/FAQs">FAQs</Link>
      <Link to="/Rules">Rules</Link>
      <Link to="/BCNM-KSNM-ENM">BCNM / KSNM / ENM</Link>
      <Link to="/Support">Support</Link>
    </section>
  );
}
