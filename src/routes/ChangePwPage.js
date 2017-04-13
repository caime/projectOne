import React,{Component} from 'react';
import { connect } from 'dva';
import { List, InputItem, WhiteSpace, Button, Toast } from 'antd-mobile/lib';
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
    borderRadius:"0",background:"#dcb93c",color:"#fff"},
  }
};

const codeIcon = require('../assets/message.png');
const phoneIcon=require('../assets/phone.png');
const pwIcon=require('../assets/password.png');
const pw_display=require('../assets/pw_display.png');
const pw_hide=require('../assets/pw_hide.png');

class ChangePwPage extends Component {

  successToast() {
    Toast.info('已设置新密码，请重新登录!', 5);
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <List style={styles.inputGroup}>    
            <InputItem
            {...getFieldProps('password')}
            type="text"
            placeholder="短信验证码"
            style={styles.vcodeBox}
            >
            <div style={{ backgroundImage: 'url('+codeIcon+')', backgroundSize: 'cover', height: '0.44rem', width: '0.44rem' }} />
            <Button type="" size="" inline style={styles.vcodeBox.vcode}>发送验证码</Button>
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
          <Button style={styles.btn} className="btn" onClick={this.successToast}>确定</Button>
        </div>
      </div>
    );
  }
}

ChangePwPage.propTypes = {
};

const ChangePwPageForm = createForm()(ChangePwPage);

export default connect()(ChangePwPageForm);
