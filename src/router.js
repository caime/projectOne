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

function setTitle (t) {
  document.title = t;
  var i = document.createElement('iframe');
  i.src = '//m.baidu.com/favicon.ico';
  i.style.display = 'none';
  i.onload = function() {
    setTimeout(function(){
      i.remove();
    }, 9);
  };
  document.body.appendChild(i);
}

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="login" component={LoginPage} onEnter={()=>setTitle("HOMEY")}/>
        <Route path="regist" component={RegistPage} onEnter={()=>setTitle("注册")}/>
        <Route path="forget" component={ForgetPage} onEnter={()=>setTitle("忘记密码")}/>
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
