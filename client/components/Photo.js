import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Photo = ({bunny, i}) => {
  return (
    <figure className="grid-figure">
      <div className="grid-photo-wrap">
        <Link to={"bunnies/" + i} className="button">
          <img src={bunny.attributes['img-url']} alt={bunny.attributes.name} className="grid-photo"/>
        </Link>
      </div>
      <figcaption>
        <p>{bunny.attributes.name}</p>
      </figcaption>
    </figure>
  );
};

Photo.propTypes = {
  bunny: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired
};

export default Photo;