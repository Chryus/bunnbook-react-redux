import React, {PropTypes, Component} from 'react';
import Header from './common/Header';

class Main extends Component {
  render() {
    debugger
    return (
      <div className="container-fluid">
        <Header />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.object
};

export default Main;