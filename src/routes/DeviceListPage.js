import React,{Component} from 'react';
import { connect } from 'dva';
import Devices from '../containers/Devices';

const styles = {
  container: {
    width: '100%',
    // height: '100%',
    backgroundColor: '#ededed',
    textAlign: 'center'
  },
  devices:{
    marginTop:".5rem",background:"#fff"
  },
  exit:{
    position:" fixed",width:"100%",
    bottom:"0",background:"#fff",
    padding:"16px 0",
    borderTop:"1px solid #ccc",
    color:"#a08946"
  }
};
const exitIcon=require("../assets/exit.png");

class DeviceListPage extends Component {
  render() {

    return (
      <div style={styles.container}>
        <div style={styles.devices}>
          <Devices/>
        </div>
        <div style={styles.exit} onClick={()=>{location.href='/#/login'}}>
         <img src={exitIcon}/>
         <br/>
         退出
       </div>
      </div>
    );
  }
}

DeviceListPage.propTypes = {
};


export default connect()(DeviceListPage);
