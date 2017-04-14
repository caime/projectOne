/*
  显示单条设备信息记录
  包括：设备名称，设备状态，以及对其解绑和重命名
*/
import React, {Component, PropTypes} from 'react';
import { List } from 'antd-mobile/lib';

const Item = List.Item;
const Brief = Item.Brief;

//样式
const online=require("../assets/device_online.png");
const offline=require("../assets/device_offline.png");
const edit=require("../assets/edit.png");
const unbind=require("../assets/link_remove.png");

const styles = {
  container: {},
  items:{
      overflow:"hidden",
     
  },
  item:{
      btn:{
        textAlign:"center",
        float:"right",
      },
      unbind:{
        textAlign:"center",
        float:"left",
      }
  }
};

class DeviceItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { data }=this.props;   

    return (
        <Item style={styles.item}
          thumb={data.status?online:offline}
          multipleLine
          onClick={() => {}}
          extra={
            <div style={styles.items}>
                <div style={styles.item.btn} onClick={()=>{this.props.unbind(data.id)}}><img src={unbind}/><br/>解绑</div>
                <div style={styles.item.unbind} onClick={()=>{this.props.rename(data.id)}}><img src={edit}/><br/>重命名</div>
            </div>
          }
        >

          <span onClick={()=>{location.href='/#/nav/1'}}>{data.name}</span>
          <Brief>
            {data.status?"在线":"离线"}
          </Brief>

        </Item>
      
    );
  }
}

//data(device)
DeviceItem.propTypes = {
     data:PropTypes.object,
     unbind:PropTypes.func
};
DeviceItem.defaultProps = {
    data:{id:0,name:"my-device","status":false},
    unbind:()=>{}
};

export default DeviceItem;
