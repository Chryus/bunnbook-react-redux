import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';  
import * as bunnyActions from '../actions/bunnyActions';
import Photo from './Photo';

class BunnyGrid extends Component {
  render() {
    if (!this.props.bunnies.data) {
      return (
        <div className="jumbotron">
          <h1>Loading the bunnies!</h1>
        </div>
      );
    }
    
    return (
      <div className="col-md-12">
        <div className="jumbotron">
          <h1>Here are the bunnies!</h1>
        </div>
        <div className="photo-grid">
          {this.props.bunnies.data.map((bunny, i) => 
            <Photo {...this.props} key={i} i={i} bunny={bunny} />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  // state = {bunnies: [{id:1, name: "Maru"}, etc.]}
  return {
    bunnies: state.bunnies
  };
}

BunnyGrid.propTypes = {
  bunnies: PropTypes.object
};

export default connect(mapStateToProps)(BunnyGrid);
