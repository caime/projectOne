import React,{Component, PropTypes} from 'react';
import { connect } from 'dva';
import { Button, List ,Modal } from 'antd-mobile/lib';

const Item = List.Item;
const alert = Modal.alert;

const styles = {
  container: {
    width: '100%',
    // height: '100%',
    backgroundColor: '#ededed',
    textAlign: 'center'
  },
    btn:{
    margin:".4rem .5rem 1.4rem .5rem",
    background:"#dcb93c",
    color:'#fff',
  },
  link:{
    display:"line-block",
    width:"100%",
    height:"100%"
  }
};
const remove=require("../assets/user_link_remove.png");
const empower=require("../assets/rlist_empower.png");


class UserList extends Component {
  
  //  onClick = () => {
  //    const {dispatch}=this.props;
  //     dispatch({
  //       type: 'recordList/test',
  //       payload: {lockState: 2}
  //     });
  //   }
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  unbind = (id) =>{alert('删除', '确定删除么???', [
      { text: '取消', onPress: () => console.log('cancel') },
      { text: '确定', onPress: () => console.log(id), style: { color: '#846f24' } },
    ])};

  render() {
    const {users}=this.props;
    return (
      <div>
      <List >
          {
            users.map((item,index)=>{
              return(
                <Item key={index}
                  thumb={empower}
                  multipleLine
                  onClick={() => {}}
                  extra={<img onClick={() => {this.unbind(item.id)}} src={remove} style={{width:".6rem",height:".6rem"}}/>}
                >
                {item.phone}
                </Item>
              )
            })
          }
      </List>
        <Button style={styles.btn} className="btn" onClick={() =>location.href="/#/addUser"}>添加租客</Button>
      </div>
    );
  }
}

UserList.propTypes = {
  users:PropTypes.array
};
UserList.defaultProps = {
  onClick: () => {},
  users:[
    {id:1,phone:"123898333"},
    {id:2,phone:"124598333"},
    {id:3,phone:"123398333"},
  ]
};
function mapStateToProps(state) {
  return {
    recordList: state.recordList
  };
}
export default connect(mapStateToProps)(UserList);
