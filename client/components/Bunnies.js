import React, {PropTypes, Component} from 'react';
import BunnyList from './BunnyList';

class Bunnies extends Component {
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
            <BunnyList {...this.props} key={i} i={i} bunny={bunny} />
          )}
        </div>
      </div>
    );
  }
}

Bunnies.propTypes = {
  bunnies: PropTypes.array
};

export default Bunnies;
