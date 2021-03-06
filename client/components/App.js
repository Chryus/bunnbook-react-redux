import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/bunnyActions';
import Main from './Main';

const mapStateToProps = (state) => {
  return {
    bunnies: state.bunnies,
    hobbies: state.hobbies
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators,
    dispatch);
};

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;