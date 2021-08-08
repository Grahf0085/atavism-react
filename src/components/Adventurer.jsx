import React from 'react';
import PropTypes from 'prop-types';
import adventurersyles from './adventurerstyles.css';
import { jobConverter, formatAdventurer, advImage } from '../services/utils';
import { Link } from 'react-router-dom';

const Adventurer = ({ name, mainJob, mainLevel, subJob, subLevel, face, race }) => {

  const mJob = jobConverter(mainJob);
  const sJob = jobConverter(subJob);
  const formattedAdventurer = formatAdventurer(race, face);
  const imageUrl = advImage(formattedAdventurer);

  return <section className={adventurersyles.oneItem}>
    <Link to={`/adventurer/${name}`}>
      <figure>
        <figcaption>
          <h3>{name}</h3>
        </figcaption>
        <img src={imageUrl} alt={name} height="100rem" width="100rem" />
        <figcaption>
          {subJob ? <h3>{mJob}{mainLevel} / {sJob}{subLevel}</h3> : <h3>{mJob}{mainLevel}</h3>}
        </figcaption>
      </figure>
    </Link>
      
    {/* <img src={imageUrl} alt={name} height="65rem" width="65rem"></img>
      <h3>{name}</h3>
      <h3>{mJob}{mainLevel} / {sJob}{subLevel}</h3> */}
  </section>;

};

Adventurer.propTypes = {
  name: PropTypes.string.isRequired,
  mainJob: PropTypes.number.isRequired,
  subJob: PropTypes.number,
  mainLevel: PropTypes.number.isRequired,
  subLevel: PropTypes.number,
  face: PropTypes.number.isRequired,
  race: PropTypes.number.isRequired
};

export default Adventurer;
