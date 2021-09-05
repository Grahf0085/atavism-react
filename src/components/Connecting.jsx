import React from 'react';
import styles from '../styles/styles.css';
import connectingStyles from '../styles/connectingStyles.css';


const Connecting = () => {
  return (
    <section className={styles.connecting}>
      <h2>Connecting</h2>
      <section className={styles.meat}>
        <h2>Existing Installs</h2>
        <ul className={connectingStyles.connectingSection}>
          <li className={connectingStyles.connectingLi}>Existing installations of Wings or Limit Break might connect and play on Atavism. It has worked for some and not others. There might be bugs specific to those installers we cannot support</li>
          <li className={connectingStyles.connectingLi}>Point your bootloader to play.atavismxi.com to make a new account and login using it</li>
        </ul>
        <h2>Linux (tested on Arch with wine 5.0)</h2>
        <ol className={connectingStyles.connectingSection}>
          <li className={connectingStyles.connectingLi}>Install wine and lutris</li>
          <li className={connectingStyles.connectingLi}>For SSL connections will need to install lib32-gnutls and winbind (sometimes included in Samba package)</li>
          <li className={connectingStyles.connectingLi}>Download Installer <a href="https://drive.google.com/file/d/17M3B0CDdAZ0GTmOAiHP17jS8uWVBYoIC/view?usp=sharing">-&gt;Here&lt;-</a></li>
          <li className={connectingStyles.connectingLi}>Extract contents of archive</li>
          <li className={connectingStyles.connectingLi}>Run &apos;AtavismXI Installer.exe&apos; with wine</li>
          <li className={connectingStyles.connectingLi}>Follow the Prompts</li>
          <li className={connectingStyles.connectingLi}>After install finishes might have to run FINAL FANTASY XI Config.exe (/.wine/drive_c/Program Files (x86)/PlayOnline/SquareEnix/FINAL FANTASY XI/ToolsUS) and change display settings for game to start</li>
          <li className={connectingStyles.connectingLi}>Likewise, emulating a virtual desktop in wine configuration might help avoid bugs</li>
          <li className={connectingStyles.connectingLi}>Open a terminal in .wine/drive_c/Program Files (x86)/PlayOnline/SquareEnix/PlayOnlineViewer 
              and run &apos;wine atavismloader.exe --server play.atavismxi.com&apos;</li>
          <li className={connectingStyles.connectingLi}>Make an account through the bootloader. Exit bootloader.</li>
          <li className={connectingStyles.connectingLi}>In lutris make a new game</li>
          <ol className={connectingStyles.connectingSection}>
            <li className={connectingStyles.connectingLi}>In the &apos;Game Info&apos; tab enter a name and select wine for the runner. Ensure wine 5.0 is installed and selected as the wine version being used.</li>
            <li className={connectingStyles.connectingLi}>In the &apos;Game Options&apos; &apos;executable&apos; line enter the path to atavism loader (.wine/drive_c/Program Files (x86)/PlayOnline/SquareEnix/PlayOnlineViewer/atavismloader.exe)</li>
            <li className={connectingStyles.connectingLi}>In the &apos;arguments&apos; line enter &apos;--server play.atavismxi.com --user USERNAME --pass PASSWORD&apos;</li>
            <li className={connectingStyles.connectingLi}>Click save</li>
            <li className={connectingStyles.connectingLi}>Launch Game</li>
          </ol>
        </ol>
        <h2>Windows</h2>
        <ul className={connectingStyles.connectingSection}>
          <li className={connectingStyles.connectingLi}>Download Installer <a href="https://drive.google.com/file/d/17M3B0CDdAZ0GTmOAiHP17jS8uWVBYoIC/view?usp=sharing">-&gt;Here&lt;- and unzip</a></li>
          <li className={connectingStyles.connectingLi}>Extract contents of archive</li>
          <li className={connectingStyles.connectingLi}>Run &apos;AtavismXI Installer.exe&apos;</li>
          <li className={connectingStyles.connectingLi}>Follow the Prompts</li>
          <li className={connectingStyles.connectingLi}>After install finishes might have to run FINAL FANTASY XI Config.exe and change display settings for game to start.</li>
          <li className={connectingStyles.connectingLi}>You&apos;re welcome to use Ashita or Windower, which should already be setup. Just be sure you&apos;re only using approved addons from the rules section</li>
        </ul>
      </section>
    </section>
  );
};

export default Connecting;
