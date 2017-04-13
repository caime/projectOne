import React,{Component} from 'react';
import { connect } from 'dva';
import Lock from '../containers/Lock';

const styles = {
  container: {
    position:"absolute",
    width: '100%',
    height:"100%",
    left: '0px',
    top: '0px',
    backgroundColor: '#fff',
    textAlign: 'center',
  }
};


class DeviceCtrlPage extends Component {
  render() {

    return (
      <div style={styles.container}>
        <Lock/>
      </div>
    );
  }
}

DeviceCtrlPage.propTypes = {
};


export default connect()(DeviceCtrlPage);
