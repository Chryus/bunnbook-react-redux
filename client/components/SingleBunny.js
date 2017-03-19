import React, {PropTypes} from 'react';  
import {connect} from 'react-redux';
import _ from 'lodash';
import Loading from './common/Loading';
import Photo from './Photo';


class SingleBunny extends React.Component {
  render() {
    if (this.props.bunnies.length == 0) {
      return (
        <Loading />
      );
    }

    const id = parseInt(this.props.params.id);
    const bunny = this.props.bunnies[id];

    return (
      <div className="single-photo">
        <Photo key={id} bunny={bunny} i={id} />
      </div>
    );
  }
}

export default SingleBunny;