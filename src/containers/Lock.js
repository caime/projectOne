import React, {Component} from 'react';
import { connect } from 'dva';
import Lock from '../components/Lock';

const touch_open=require('../assets/box_open.png');
const touch_close=require("../assets/box_close_02.png");

const styles = {
  action1:{
    lineHeight:"1rem",marginTop:".2rem"
  },
  action2:{
     lineHeight:"1rem",
  },
   text:{
     display:"inline-block",marginRight:"1em",
      verticalAlign: "middle",
    }
};
class LockContainer extends Component {

  onClick = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'deviceData/sendCmd',
      payload: {lockState: 2}
    });
  }

  render() {
    const {deviceData} = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.action1}>
          <img src={touch_open} alt="" style={styles.text}/><span>轻触开启锁头</span>
        </div>
          <Lock state={deviceData.lockState} onClick={this.onClick}/>
        <div style={styles.action2}>
          <img src={touch_open} alt="" style={styles.text}/><span>智能锁盒开启</span>
        </div>
      </div>
    );
  }
}

LockContainer.propTypes = {
};

function mapStateToProps(state) {
  return {
    deviceData: state.deviceData
  };
}

export default connect(mapStateToProps)(LockContainer);
