import React from 'react';
import PropTypes from 'prop-types';
import adventurersyles from '../../styles/adventurerstyles.css';
import { jobConverter, formatAdventurer } from '../../services/utils';
import { advImage } from '../../services/advImage';
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
        <img src={imageUrl} alt={name} height="200rem" width="200rem" />
        <figcaption>
          {subJob ? <h3>{mJob}{mainLevel} / {sJob}{subLevel}</h3> : <h3>{mJob}{mainLevel}</h3>}
        </figcaption>
      </figure>
    </Link>
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
