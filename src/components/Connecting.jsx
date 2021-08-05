import React from 'react';
import styles from '../components/app/styles.css';
import connectingStyles from './connectingStyles.css';


const Connecting = () => {
  return (
    <section className={styles.connecting}>
      <h2>Connecting</h2>
      <section className={styles.meat}>
        <h2>Linux (tested on Arch with wine 5.0)</h2>
        <ol className={connectingStyles.connectingSection}>
          <li className={connectingStyles.connectingLi}>Install wine and lutris</li>
          <li className={connectingStyles.connectingLi}>Download Installer Here: LINK TO COME</li>
          <li className={connectingStyles.connectingLi}>Install.......what file to RUN?!?!!?</li>
          <li className={connectingStyles.connectingLi}>Download atavism loader: <a href ="https://drive.google.com/file/d/1ZSG2-0D_3k3GEa53IHUwqIHhCzGldG1T/view?usp=sharing" download>-----&gt; Download Here</a></li>
          <li className={connectingStyles.connectingLi}>Put bootloader SOMEWHERE FILL THIS IN OMG</li>
          <li className={connectingStyles.connectingLi}>Start bootloader and point it to atavism.duckdns.org. Ie open a terminal in the atavism loader directory and run &apos;wine atavismloader.exe --server atavism.duckdns.org&apos;</li>
          <li className={connectingStyles.connectingLi}>Make an account through the bootloader</li>
          <li className={connectingStyles.connectingLi}>In lutris make a new game.</li>
          <ol className={connectingStyles.connectingSection}>
            <li className={connectingStyles.connectingLi}>In the &apos;Game Info&apos; tab enter a name and select wine for the runner. Ensure wine 5.0 is installed.</li>
            <li className={connectingStyles.connectingLi}>In the &apos;Game Options&apos; &apos;executable&apos; line enter the path to atavism loader. In the &apos;arguments&apos; line enter &apos;--server atavism.duckdns.org --user USERNAME --pass PASSWORD&apos;</li>
            <li className={connectingStyles.connectingLi}>Click save</li>
            <li className={connectingStyles.connectingLi}>Launch Game</li>
          </ol>
        </ol>
        <h2>Windows</h2>
        <ul className={connectingStyles.connectingSection}>
          <li className={connectingStyles.connectingLi}>Windows should not pose any additonal problems</li>
          <li className={connectingStyles.connectingLi}>You&apos;re welcome to use Ashita or Windower.  Just be sure you&apos;re only using approved addons from the rules section</li>
        </ul>
      </section>
    </section>
  );
};

export default Connecting;
