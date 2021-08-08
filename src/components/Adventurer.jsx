import React from 'react';
import PropTypes from 'prop-types';
import adventurersyles from './adventurerstyles.css';
import { jobConverter, formatAdventurer, advImage } from '../services/utils';

const Adventurer = ({ name, mainJob, mainLevel, subJob, subLevel, face, race }) => {

  const mJob = jobConverter(mainJob);
  const sJob = jobConverter(subJob);
  const formattedAdventurer = formatAdventurer(race, face);
  const imageUrl = advImage(formattedAdventurer);

  if(subJob) {
    return <section className={adventurersyles.oneItem}>
      <figure>
        <figcaption>
          <h3>{name}</h3>
        </figcaption>
        <img src={imageUrl} alt={name} height="75rem" width="75rem" />
        <figcaption>
          <h3>{mJob}{mainLevel} / {sJob}{subLevel}</h3>
        </figcaption>
      </figure>
      
      {/* <img src={imageUrl} alt={name} height="65rem" width="65rem"></img>
      <h3>{name}</h3>
      <h3>{mJob}{mainLevel} / {sJob}{subLevel}</h3> */}
    </section>;
  } else {
    return <section className={adventurersyles.oneItem}>
      <img src={imageUrl} alt={name}></img>
      <h3>{name}</h3>
      <h3>{mJob}{mainLevel}</h3>
    </section>;
  }

};

Adventurer.propTypes = {
  name: PropTypes.string.isRequired,
  mainJob: PropTypes.number.isRequired,
  subJob: PropTypes.number.isRequired,
  mainLevel: PropTypes.number.isRequired,
  subLevel: PropTypes.number.isRequired
};

export default Adventurer;
