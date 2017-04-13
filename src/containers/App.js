import React, {Component} from 'react';
import { connect } from 'dva';
const styles={
  app:{
    zIndex:"999"
  }
}
class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
};

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(App);
