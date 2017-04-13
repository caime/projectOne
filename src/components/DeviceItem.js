import React, {Component, PropTypes} from 'react';
import { List } from 'antd-mobile/lib';

const Item = List.Item;
const Brief = Item.Brief;
const lock1 = require('../assets/lock_close.png');
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
        float:"right",marginLeft:"50px"
      },
      unbind:{
        textAlign:"center",
        float:"right",
      }
  }
};


class DeviceItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const {state, onClick} = this.props;

    // const data = [1,2,3]
    const { data }=this.props;
    
    return (
        <Item style={styles.item}
          thumb={data.status?online:offline}
          multipleLine
          onClick={() => {}}
          extra={
            <div style={styles.items}>
                <div style={styles.item.btn}><img src={unbind}/><br/>解绑</div>
                <div style={styles.item.unbind}><img src={edit}/><br/>重命名</div>
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

//state 0 1 2
DeviceItem.propTypes = {
//   onClick: PropTypes.func,
//   state: PropTypes.number
     data:PropTypes.object
};
DeviceItem.defaultProps = {
//   onClick: () => {},
//   state: 0,
    data:{id:0,name:"my-device","status":false}
};

export default DeviceItem;
