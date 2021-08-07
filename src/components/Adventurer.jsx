import React from 'react';
import PropTypes from 'prop-types';

const Adventurer = ({ name, mJob, sJob, }) => {
  return <>
    <h3>{name}</h3>
    <h3>{mJob}</h3>
    <h3>{sJob}</h3>
  </>;
};

Adventurer.propTypes = {
  // id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  mJob: PropTypes.string.isRequired,
  sJob: PropTypes.string.isRequired
};

export default Adventurer;
