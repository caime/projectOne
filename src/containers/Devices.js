import React, {Component} from 'react';
import { connect } from 'dva';
import { List } from 'antd-mobile/lib';
import DeviceItem from '../components/DeviceItem';

const addIcon=require("../assets/device_add.png");
const exitIcon=require("../assets/exit.png");
const Item=List.Item;
const styles = {
  container: {},
};

class DevicesContainer extends Component {

  onClick = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'deviceData/sendCmd',
      payload: {lockState: 2}
    });
  }

  render() {
    const {deviceList} = this.props;
    return (
      <div style={styles.container}>
        <List>
          {
            deviceList.data.map((item)=>{
              return <DeviceItem data={item} key={item.id}/>
            })
          }
        </List>
        <Item
          thumb={addIcon}
          multipleLine
          onClick={() => {}}
          >
         添加设备
       </Item>
      </div>
    );
  }
}

DevicesContainer.propTypes = {
  
};

function mapStateToProps(state) {
  return {
    deviceList: state.deviceList
  };
}

export default connect(mapStateToProps)(DevicesContainer);
