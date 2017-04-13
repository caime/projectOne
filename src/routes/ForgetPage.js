import React,{Component} from 'react';
import { connect } from 'dva';
import { List, InputItem, Modal, Button } from 'antd-mobile/lib';
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
  }
};

const img = require('../assets/logo.png');
const phoneIcon=require('../assets/phone.png');
const pwIcon=require('../assets/password.png');

class ForgetPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  onClose = key => () => {
    this.setState({
      modal:false,
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      modal:true,
    });
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div style={styles.container}>
          <List style={styles.inputGroup}>
            <InputItem
            {...getFieldProps('phone')}
            placeholder="请输入手机号"
            type="phone"
            >
            <div style={{ backgroundImage: 'url('+phoneIcon+')', backgroundSize: 'cover', height: '0.44rem', width: '0.44rem' }} />
           </InputItem>
           
          </List>
          <Button style={styles.btn} className="btn" onClick={this.handleClick.bind(this)}>获取短信验证码</Button>
          
          <Modal
          title="这是 title"
          transparent
          maskClosable={false}
          visible={this.state.modal}
          onClose={this.onClose('modal')}
          footer={[{ text: '确定', onPress: () => { console.log('ok'); this.onClose('modal')(); location.href='/#/changePw'} }]}
          >
            这是内容...<br />
            这是内容...<br />
          </Modal>
      </div>
    );
  }
}

ForgetPage.propTypes = {
};

const ForgetPageForm = createForm()(ForgetPage);

export default connect()(ForgetPageForm);
