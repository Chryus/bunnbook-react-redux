import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';  
import * as bunnyActions from '../actions/bunnyActions';
import Loading from './common/Loading';
import Photo from './Photo';


class BunnyGrid extends Component {
  render() {
    if (!this.props.bunnies) {
      return (
        <Loading />
      );
    }

    return (
      <div className="col-md-12">
        <div className="jumbotron">
          <h1>Here are the bunnies!</h1>
        </div>
        <div className="photo-grid">
          {this.props.bunnies.data.map((bunny, i) => 
            <Photo key={i} i={i} bunny={bunny} />
          )}
        </div>
      </div>
    );
  }
}

BunnyGrid.propTypes = {
  bunnies: PropTypes.object
};

export default BunnyGrid;
