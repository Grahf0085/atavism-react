import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getAdventurerDetails } from '../state/adventurers';

const AdventurerDetails = () => {

  const { name } = useParams();

  const { details, loading } = getAdventurerDetails(name);

  if(loading) return <h1>Loading Details...</h1>;

  return (
    <section>
      <h2>Name: {details.name}</h2>
      <section>
        <h3>Jobs</h3>
        <p>WAR: {details.war}</p>
        <p>MNK: {details.mnk}</p>
        <p>WHM: {details.whm}</p>
        <p>BLM: {details.blm}</p>
        <p>RDM: {details.rdm}</p>
        <p>THF: {details.thf}</p>
        <p>PLD: {details.pld}</p>
        <p>DRK: {details.drk}</p>
        <p>BST: {details.bst}</p>
        <p>BRD: {details.brd}</p>
        <p>RNG: {details.rng}</p>
        <p>SAM: {details.sam}</p>
        <p>NIN: {details.nin}</p>
        <p>DRG: {details.drg}</p>
        <p>SMN: {details.smn}</p>
      </section>
      <section>
        <h3>Crafts</h3>
        <p>Fishing: {details.fishing}</p>
        <p>Fishing: {details.woodworking}</p>
        <p>Fishing: {details.smithing}</p>
        <p>Fishing: {details.goldsmithing}</p>
        <p>Fishing: {details.leathercraft}</p>
        <p>Fishing: {details.bonecraft}</p>
        <p>Fishing: {details.alchemy}</p>
        <p>Fishing: {details.cooking}</p>
      </section>
      <section>
      </section>
      <section>
      </section>
    </section>
  );
};

// ToonDetailPage.propTypes = {
//   name: PropTypes.string.isRequired,
//   status: PropTypes.string.isRequired,
//   species: PropTypes.string.isRequired,
//   gender: PropTypes.string.isRequired,
// };

export default AdventurerDetails;
