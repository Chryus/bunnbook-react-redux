import React, {PropTypes, Component} from 'react';
import Header from './common/Header';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
