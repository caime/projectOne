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
  inputGroup:{
    margin:"1rem 0"
  },
  btn:{
    margin:"1rem .5rem",
    background:"#dcb93c",
    color:'#fff',
  },
  vcodeBox:{
    position:"relative",
    vcode:{position:"absolute",right:"0",top:"0",
    height:"100%",border:"none",
    borderRadius:"0",background:"#dcb93c",color:"#fff"},
  }
};

const codeIcon = require('../assets/message.png');
const phoneIcon=require('../assets/phone.png');
const pwIcon=require('../assets/password.png');
const pw_display=require('../assets/pw_display.png');
const pw_hide=require('../assets/pw_hide.png');

let timer,timer2;

class RegistPage extends Component {
  constructor(props){
    super(props)
    this.state={
      text:"获取验证码"
    }
  }

  componentWillUnmount(){
    console.log("fff");
    clearTimeout(timer);
    clearInterval(timer2);
  }

  count(){

    console.log("ggg");

    let node=this.refs.vcode;
    node.style.background="#ccc";
    node.disabled="disabled"
    
    let i=59;
    timer=setInterval(()=>{
      this.setState({
        text:(i--)+"秒后重新获取"
      });
    },900);

   timer2=setTimeout(()=>{
      clearInterval(timer);
      node.style.background="#dcb93c";
      node.removeAttribute("disabled");
       this.setState({
        text:"重新获取验证码"
      });
    }, 1000*30);

  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <List style={styles.inputGroup}>
            <InputItem
            {...getFieldProps('phone')}
            placeholder="手机号码"
            type="phone"
            autoFocus
            >
            <div style={{ backgroundImage: 'url('+phoneIcon+')', backgroundSize: 'cover', height: '0.44rem', width: '0.44rem' }} />
            </InputItem>
            
            <InputItem
            {...getFieldProps('vcode')}
            type="text"
            placeholder="短信验证码"
            style={styles.vcodeBox}
            >
            <div style={{ backgroundImage: 'url('+codeIcon+')', backgroundSize: 'cover', height: '0.44rem', width: '0.44rem' }} />
            <button type="button" style={styles.vcodeBox.vcode} onClick={this.count.bind(this)} ref="vcode">{this.state.text}</button>
            </InputItem>

            <InputItem
            {...getFieldProps('password')}
            type="password"
            placeholder="设置密码"
            extra={<div style={{ backgroundImage: 'url('+pw_display+')', backgroundSize: 'cover', height: '0.44rem', width: '0.58rem'}}/>}
            >
            <div style={{ backgroundImage: 'url('+pwIcon+')', backgroundSize: 'cover', height: '0.44rem', width: '0.44rem' }} />
           </InputItem>
           
          </List>
          <Button style={styles.btn} className="btn">确定</Button>
        </div>
      </div>
    );
  }
}

RegistPage.propTypes = {
};

const RegistPageForm = createForm()(RegistPage);

export default connect()(RegistPageForm);
