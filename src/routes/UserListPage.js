import React,{Component} from 'react';
import { connect } from 'dva';
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile/lib';
import Landlord from "../containers/Landlord";
import UserList from "../containers/UserList";
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
  }
};

const img = require('../assets/logo.png');
const phoneIcon=require('../assets/phone.png');
const pwIcon=require('../assets/password.png');

class UserListPage extends Component {
  render() {

    const { getFieldProps } = this.props.form;

    return (
      <div style={styles.container}>
        <Landlord/>
        <UserList/>
      </div>
    );
  }
}

UserListPage.propTypes = {
};

const LoginPageForm = createForm()(UserListPage);

export default connect()(LoginPageForm);
