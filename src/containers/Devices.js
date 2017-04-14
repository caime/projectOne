import React, {Component} from 'react';
import { connect } from 'dva';
import { List,Modal } from 'antd-mobile/lib';
import DeviceItem from '../components/DeviceItem';

//icon
const addIcon=require("../assets/device_add.png");
const exitIcon=require("../assets/exit.png");

const alert =Modal.alert;
const prompt=Modal.prompt;
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
  componentDidMount() {
     const {dispatch} = this.props;
     dispatch({
      type: 'deviceList/loadData',
      payload: {}
    });
  }
  //弹窗
  makeSure(id){
    alert('确定解绑设备吗？', '', [
      { text: '取消', onPress: () => console.log('cancel') },
      { text: '确定', onPress: () => this.unbind(id), style: { color: '#846f24' } },
    ])
  }
  //输入框
  inputBox(id){
    console.log(id)
    prompt('重命名', '',
      [
        { text: '取消' },
        {
          text: '提交',
          onPress: value =>{this.rename(id,value)}
        },
      ]);
  }
  //解绑
  unbind(id){
    const {dispatch} = this.props;
    dispatch({
    type: 'deviceList/unbind',
    payload: {id:id}
    });
  }
  //重命名
  rename(id,value){
    console.log(id+value);
    const {dispatch} = this.props;
    dispatch({
    type: 'deviceList/rename',
    payload: {id:id,value:value}
    });
  }
  render() {
    const {deviceList} = this.props;
    return (
      <div style={styles.container}>
        <List>
          {
            deviceList.data.map((item)=>{
              return <DeviceItem data={item} key={item.id} unbind={this.makeSure.bind(this)} rename={this.inputBox.bind(this)}/>
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
