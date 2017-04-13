import React, {Component} from 'react';
import { connect } from 'dva';
import BottomBar from "../components/BottomBar";
import RecordList from './RecordList';
import DeviceCtrlPage from '../routes/DeviceCtrlPage';
import UserListPage from '../routes/UserListPage';

const styles={
  bar:{
      position:"fixed",
      width:"100%",
      bottom:"0"
  },
  wrap:{
      //background:"#fff"
  }
}
class Nav extends Component {
  constructor(){
    super();
    this.state={
      index:1
    }
  }
  tab(index){
    this.setState({
      index
    })
  }
  componentDidMount(){
      this.setState({
      index:this.props.params.index
    })
  }
  render() {
    var inner=null;
    const {index}=this.state;
    if(index==1){
      inner=<DeviceCtrlPage/>
    }else if(index==2){
      inner=<RecordList/>
    }else{
      inner=<UserListPage/>
    }
    return (
      <div style={styles.wrap}>
        {/*this.props.children*/
         inner
        }
       <div style={styles.bar}>
        <BottomBar tab={this.tab.bind(this)}/>
       </div>
      </div>
    );
  }
}

Nav.propTypes = {
};

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(Nav);
