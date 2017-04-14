import React, {Component, PropTypes} from 'react';

const lock1 = require('../assets/lock_close.png');
const lock2 = require('../assets/lock_open.png');
const lock3 = require('../assets/lock_open_02.png');


const styles = {
  container: {},
  img: {
    width: '90%',
    maxWidth: '800px'
  }
};
class Lock extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let img = null;
    const {state, onClick} = this.props;
    switch(state) {
      case 0: {
        img = lock1;
        break;
      }
      case 1: {
        img = lock2;
        break;
      }
      case 2: {
        img = lock3;
        break;
      }
    }

    // const data = [1,2,3];
    return (
      <div style={styles.container} onClick={onClick}>
        <img style={styles.img} src={img}/>
      </div>
    );
  }
}

//state 0 1 2
Lock.propTypes = {
  onClick: PropTypes.func,
  state: PropTypes.number
};
Lock.defaultProps = {
  onClick: () => {},
  state: 0,
};

export default Lock;
