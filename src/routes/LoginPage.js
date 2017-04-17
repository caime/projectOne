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
  logo: {
    marginTop:'1.4rem',
    width: '4.4rem',
    height: 'auto'
  },
  inputGroup:{
    marginTop:'1rem',
  },
  btn:{
    margin:"1rem .5rem",
    background:"#dcb93c",
    color:'#fff',
  },
  sub:{
    fontSize:"20px",
    color:"#dcb93c"
  },
  footer:{
    width:"100%",
    position:"absolute",bottom:"38px",
    a:{color:"#000"},
    span:{color:"#ccc",padding:"0 2em"},
  },
};

const img = require('../assets/logo.png');
const phoneIcon=require('../assets/phone.png');
const pwIcon=require('../assets/password.png');

class LoginPage extends Component {
  submit(){
    const { getFieldProps } = this.props.form;
    let phone=getFieldProps("phone").value;
    
   
    if(phone!=null&&phone!=""){
       phone=phone.replace(/\s/g ,"");
    console.log(phone);
      location.href="/#/deviceList"
    }
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <img style={styles.logo} src={img}/>
          <p style={styles.sub}>SMART HOME ELECTRONICS</p>

          <List style={styles.inputGroup}>
            <InputItem
            {...getFieldProps('phone')}
            placeholder="请输入手机号"
            type="phone"
            >
            <div style={{ backgroundImage: 'url('+phoneIcon+')', backgroundSize: 'cover', height: '0.44rem', width: '0.44rem' }} />
           </InputItem>
            <InputItem
            {...getFieldProps('password')}
            type="password"
            placeholder="设置密码"
            >
            <div style={{ backgroundImage: 'url('+pwIcon+')', backgroundSize: 'cover', height: '0.44rem', width: '0.44rem' }} />
           </InputItem>
           
          </List>
          <Button style={styles.btn} className="btn" onClick={this.submit.bind(this)}>登录</Button>
        </div>
        <div style={styles.footer}>
          <a href="/#/regist" style={styles.footer.a}>新用户注册</a>
            <span style={styles.footer.span}>|</span>
          <a href="/#/forget"style={styles.footer.a} >忘记密码</a>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
};

const LoginPageForm = createForm()(LoginPage);

export default connect()(LoginPageForm);
