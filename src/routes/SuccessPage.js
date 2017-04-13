import React,{Component} from 'react';
import { connect } from 'dva';
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile/lib';
import { createForm } from 'rc-form';

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0px',
    top: '0px',
    backgroundColor: '#ededed',
    textAlign: 'center'
  },
  face:{
    maxWidth:"200px"
  },
  content:{
      position:"absolute",
      width:"100%",
      bottom:"50%"
  }
};

const img = require('../assets/logo.png');
const face = require('../assets/success.png');


class SuccessPage extends Component {
  componentDidMount(){
      console.log("ggg");
      setTimeout(()=>{
        location.href="/#/nav/3"
      },1500)
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
            <img src={face} alt="" style={styles.face}/>
            <p> 添加成功!</p>
        </div>
      </div>
    );
  }
}


export default SuccessPage;
