import React,{Component} from 'react';
import { connect } from 'dva';
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile/lib';
import Landlord from "../containers/Landlord";
import UserList from "../containers/UserList";

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

const phoneIcon=require('../assets/phone.png');
const pwIcon=require('../assets/password.png');

class UserListPage extends Component {
  componentWillMount() {
    for(let i=0;i<9;++){
      console.log('i am here also')
    }
  }
  render() {
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

export default connect()(UserListPage);
