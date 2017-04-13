import React from 'react';
import { Router, Route } from 'dva/router';
import App from './containers/App';
import Nav from './containers/Nav';
import RecordList from './containers/RecordList';
import LoginPage from './routes/LoginPage';
import RegistPage from './routes/RegistPage';
import ForgetPage from './routes/ForgetPage';
import ChangePwPage from './routes/ChangePwPage';
import DeviceListPage from './routes/DeviceListPage';
import DeviceCtrlPage from './routes/DeviceCtrlPage';
import UserListPage from './routes/UserListPage';
import AddUserPage from './routes/AddUserPage';
import SuccessPage from './routes/SuccessPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="login" component={LoginPage}/>
        <Route path="regist" component={RegistPage}/>
        <Route path="forget" component={ForgetPage}/>
        <Route path="changePw" component={ChangePwPage}/>
        <Route path="addUser" component={AddUserPage}/> 
        <Route path="deviceList" component={DeviceListPage}/>
        <Route path="success" component={SuccessPage}/> 
      </Route>

      <Route path="nav/:index" component={Nav}>
          <Route path="deviceCtrl" component={DeviceCtrlPage}/>
          <Route path="recordList" component={RecordList}/>
          <Route path="userList" component={UserListPage}/>
        </Route>
    </Router>
  );
}

export default RouterConfig;
