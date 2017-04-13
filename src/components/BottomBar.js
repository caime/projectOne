import React, {Component, PropTypes, } from 'react';
import { Router, Route } from 'dva/router';
import { TabBar, Icon, Flex} from 'antd-mobile/lib';

const lock1 = require('../assets/lock_close.png');
const icon1=require('../assets/tab_control.png');
const icon2=require('../assets/tab_record.png');
const icon3=require('../assets/tab_user.png');

const styles = {
  bar:{
    background:'#dcb93c',
    color:"#fff"
  },
  item:{
    textAlign: 'center',
    padding:"12px 0"
  }
};

class BottomBar extends Component {
  constructor(props) {
    super(props);
     this.state = {
      selectedTab: 'redTab',
      hidden: false,
    };
  }
  tab(index){
   if(index==1){
     location.href="/#/nav/deviceCtrl"
   }else if(index==2){
     location.href="/#/nav/recordList"
   }else{
    location.href="/#/nav/userList"
   }
  }
  render() {
    
    // const data = [1,2,3];
    
    return (
         <Flex style={styles.bar}>
          <Flex.Item key='1' onClick={() => {this.props.tab(1)}}>
            <div style={styles.item}>
              <img src={icon1} alt=""/><br/>
              <span>控制</span>
            </div>
          </Flex.Item >
          <Flex.Item  key='2' onClick={() => {this.props.tab(2)}}>
            <div style={styles.item}>
              <img src={icon2} alt=""/><br/>
              <span>记录</span>
            </div>
          </Flex.Item>
          <Flex.Item  key='3' onClick={() => {this.props.tab(3)}}>
            <div style={styles.item}>
              <img src={icon3} alt=""/><br/>
              <span>用户</span>
            </div>
          </Flex.Item>
        </Flex>
    );
  }
}

//state 0 1 2
BottomBar.propTypes = {

};
BottomBar.defaultProps = {

};

export default BottomBar;
