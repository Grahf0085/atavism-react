import React from 'react';
import footerStyles from '../styles/footerStyles.css';
import styles from '../styles/styles.css';

const Footer = () => {
  return <footer className={styles.footerArea}>
    <p className={footerStyles.footerText}>
      All FINAL FANTASY® XI content and images © 2002-2021SQUARE ENIX CO., LTD.
      All Rights Reserved.
    </p>

    <p className={footerStyles.footerText}>
      FINAL FANTASY® is a registered trademark of SQUARE ENIX CO., LTD. All
      Rights Reserved.
    </p>

    <p className={footerStyles.footerText}>
      Special Thanks to
      <a href="https://github.com/LandSandBoat/server" className={footerStyles.footerA}> LandSandBoat</a>,
      <a href="https://www.wingsxi.com" className={footerStyles.footerA}> Wings</a>, and
      <a href="https://www.limitbreakffxi.com/" className={footerStyles.footerA}> LimitBreak</a>
    </p>
  </footer>;
};

export default Footer;
