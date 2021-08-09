import React from 'react';
import { useParams } from 'react-router-dom';
import { getAdventurerDetails } from '../state/adventurers';
import { formatAdventurer, advImage, jobConverter } from '../services/utils';
import titles from '../services/titles';
import zones from '../services/zones';
import detailstyles from '../styles/detailstyles.css';
import styles from '../styles/styles.css';

const AdventurerDetails = () => {

  const { name } = useParams();

  const { details, loading } = getAdventurerDetails(name);

  if(loading) return <h1>Loading Details...</h1>;

  const formattedAdventurer = formatAdventurer(details.race, details.face);
  const imageUrl = advImage(formattedAdventurer);

  const title = titles[details.title];
  const zone = zones[details.zone];

  const mJob = jobConverter(details.mainJob);
  const sJob = jobConverter(details.subJob);

  return (
    <section className={styles.adventurerDetails}>
      <section className={styles.meat}>
        <section className={detailstyles.container}>
          <section className={detailstyles.overview}>
            <section className={detailstyles.nameTitleJob}>
              <h2>{details.name}</h2>
              <h2 className={detailstyles.detailsTitle}>{title}</h2>
              {details.subJob ? <h2>{mJob}{details.mainLevel} / {sJob}{details.subLevel}</h2> : <h2>{mJob}{details.mainLevel}</h2>}
              <h2>{zone}</h2>
            </section>
            <img src={imageUrl} alt={details.name} width="200rem" height="200rem"></img>       
            <section className={detailstyles.nationsBanner}>
              <section className={detailstyles.bastok}><span className={detailstyles.missionRank}>{details.rankBastok}</span>
              </section>
              <section className={detailstyles.sandoria}><span className={detailstyles.missionRank}>{details.rankSandoria}</span>
              </section>
              <section className={detailstyles.windurst}><span className={detailstyles.missionRank}>{details.rankWindurst}</span>
              </section>
            </section>
          </section>
          <section className={detailstyles.jobs}>
            <p>WAR {details.war}</p>
            <p>MNK {details.mnk}</p>
            <p>WHM {details.whm}</p>
            <p>BLM {details.blm}</p>
            <p>RDM {details.rdm}</p>
            <p>THF {details.thf}</p>
            <p>PLD {details.pld}</p>
            <p>DRK {details.drk}</p>
            <p>BST {details.bst}</p>
            <p>BRD {details.brd}</p>
            <p>RNG {details.rng}</p>
            <p>SAM {details.sam}</p>
            <p>NIN {details.nin}</p>
            <p>DRG {details.drg}</p>
            <p>SMN {details.smn}</p>
          </section>
          <section className={detailstyles.crafts}>
            <p>Fishing: {details.fishing}</p>
            <p>Fishing: {details.woodworking}</p>
            <p>Fishing: {details.smithing}</p>
            <p>Fishing: {details.goldsmithing}</p>
            <p>Fishing: {details.leathercraft}</p>
            <p>Fishing: {details.bonecraft}</p>
            <p>Fishing: {details.alchemy}</p>
            <p>Fishing: {details.cooking}</p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default AdventurerDetails;
