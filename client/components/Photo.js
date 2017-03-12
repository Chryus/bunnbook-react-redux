import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Photo = ({bunny, i}) => {
  return (
    <figure className="grid-figure">
      <Link to={"bunnies/" + i} className="button">
        <div className="grid-photo-wrap">
          <img src={bunny.attributes['img-url']} alt={bunny.attributes.name} className="grid-photo"/>
        </div>
        <figcaption>
          <p>{bunny.attributes.name}</p>
        </figcaption>
      </Link>
    </figure>
  );
};

Photo.propTypes = {
  bunny: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired
};

export default Photo;