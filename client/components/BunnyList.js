import React, { PropTypes } from 'react';

const BunnyList = ({bunny, i}) => {
  return (
    <figure className="grid-figure">
      <div className="grid-photo-wrap">
        <img src={bunny.attributes['img-url']} alt={bunny.attributes.name} className="grid-photo"/>
      </div>
      <figcaption>
        <p>{bunny.attributes.name}</p>
      </figcaption>
    </figure> 
  );
};

BunnyList.propTypes = {
  bunny: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired
};

export default BunnyList;