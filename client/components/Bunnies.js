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

    const bunz = this.props.bunnies.data;
    return (
      <div className="col-md-12">
        <h1>Here are the bunnies!</h1>
        <div className="col-md-4">
          <BunnyList bunnies={bunz} />
        </div>
      </div>
    );
  }
}

Bunnies.propTypes = {
  bunnies: PropTypes.array
};

export default Bunnies;
