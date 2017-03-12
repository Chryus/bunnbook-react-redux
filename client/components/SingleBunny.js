import React, {PropTypes} from 'react';  
import {connect} from 'react-redux';
import Photo from './Photo';

class SingleBunny extends React.Component {
  render() {
    return (
      <div className="single-photo">
        <Photo {...this.props} bunny={this.props.bunny} />
      </div>
    );
  }
}

SingleBunny.propTypes = {  
  bunny: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let bunny = {name: '', breed: '', weight: '', temperament: '', hobby_ids: []};
  const id = ownProps.params.id;
  if (state.bunnies.length >0) {
    bunny = Object.assign({}, state.bunnies.find((bunny) => bunny.id === id));
  }
}

export default SingleBunny;