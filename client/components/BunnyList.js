import React, { PropTypes } from 'react';

const BunnyList = ({bunnies}) => {
  return (
    <ul className="list-group">
      {bunnies.map((bunny) =>
        <li className="list-group-item" key={bunny.id}>
          {bunny.attributes.name}
        </li>
      )}
    </ul>
  );
};

BunnyList.propTypes = {
  bunnies: PropTypes.array.isRequired
};

export default BunnyList;